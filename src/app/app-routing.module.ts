import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'notice', component:NotificationComponent },
  {path:'task', component:TaskComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
