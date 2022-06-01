import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainComponent as PanelMainComponent } from './components/panel/main/main.component';
import { MainComponent as UIMainComponent } from './components/public-components/main/main.component';
import { OperationClaimAddComponent } from './components/panel/operation-claim-add/operation-claim-add.component';
import { OperationClaimListComponent } from './components/panel/operation-claim-list/operation-claim-list.component';
import { UOperationClaimAddComponent } from './components/panel/u-operation-claim-add/u-operation-claim-add.component';
import { UOperationClaimListComponent } from './components/panel/u-operation-claim-list/u-operation-claim-list.component';
import { UsersComponent } from './components/panel/users/users.component';
import { AssigmentsComponent } from './components/public-components/assigments/assigments.component';
import { HomeComponent } from './components/public-components/home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AssignmentListComponent } from './components/panel/assignment-list/assignment-list.component';
import { AssignmentAddComponent } from './components/panel/assignment-add/assignment-add.component';
import { PanelHomeComponent } from './components/panel/panel-home/panel-home.component';

const routes: Routes = [
  {path:'',component:UIMainComponent,children:[
    {path:'',component:HomeComponent},
    {path:'assignments',canActivate:[AuthenticationGuard],component:AssigmentsComponent},

  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'panel',canActivate:[AuthenticationGuard],canActivateChild:[AuthenticationGuard],component:PanelMainComponent,children:[
   
    {path:'',component:PanelHomeComponent},
    {path:'users',component:UsersComponent},

    {path:'user-operation-claim',canActivate:[AdminGuard],canActivateChild:[AdminGuard],children:[
      {path:'add',component:UOperationClaimAddComponent},
      {path:'list',component:UOperationClaimListComponent}
    ]},
    
    {path:'operation-claim',canActivate:[AdminGuard],canActivateChild:[AdminGuard],children:[
      {path:'add',component:OperationClaimAddComponent},
      {path:'list',component:OperationClaimListComponent}
    ]},

    {path:'assignment',children:[
      {path:'list',component:AssignmentListComponent},
      {path:'add',component:AssignmentAddComponent}
    ]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  