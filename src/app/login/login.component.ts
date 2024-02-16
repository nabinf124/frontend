import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
    });
  }

  checkValidUser() {
    // Implement your logic for checking valid user
    const userName = this.loginForm.get('userName')?.value;
    const passWord = this.loginForm.get('passWord')?.value;

    // Example validation logic (replace this with your actual logic)
    if (userName === 'admin' && passWord === 'admin') {
      console.log('Valid user. Navigating to home...');
      // Navigate to the home page
      this.router.navigate(['/task']); // Assuming '/task' is your home page URL
    } else {
      console.log('Invalid user');
      // Handle invalid user (e.g., display error message)
    }
  }
}
