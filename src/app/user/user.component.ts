import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[];
  selectedUser: User|undefined;
  showForm: boolean;

  constructor(private userService: UserService) {
    this.users = [];
    this.selectedUser = undefined;
    this.showForm = false;
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUser().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addUser() {
    // You can initialize selectedUser here if you want to add a new user
    // this.selectedUser = new User();
    this.showForm = true;
  }

  editUser(user: User) {
    this.selectedUser = user;
    this.showForm = true;
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(
      (data: any) => {
        this.getUsers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  saveUser() {
    if (this.selectedUser && this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser).subscribe(
        (data: any) => {
          this.getUsers();
          this.showForm = false;
          this.selectedUser = undefined;
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else if (this.selectedUser) { // Check if selectedUser is defined
      // If selectedUser is not undefined, it means we are creating a new user
      this.userService.saveUser(this.selectedUser).subscribe(
        (data: any) => {
          this.getUsers();
          this.showForm = false;
          this.selectedUser = undefined;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
  
  

  cancelForm() {
    this.showForm = false;
    this.selectedUser = undefined;
  }
}
