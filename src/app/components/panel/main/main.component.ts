import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentUserEmail = '';
  isAdmin = false;
  isLogginIn = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.getCurrentUserValue();
    this.getIsAdmin();
    if (this.authService.currentUserValue) {
      this.isLogginIn = true;
    } else {
      this.isLogginIn = false;
    }
  }

  getCurrentUserValue(){
    this.currentUserEmail = this.authService.currentUserValue.userEmail;
  }

  logout(){
    this.authService.logout();
  }

  getIsAdmin(){
    const isAdmin = this.authService.currentUserValue.userEmail === environment.manager;
    if (isAdmin) {
      this.isAdmin = true;
    } else {      
      this.isAdmin = false;
    } 
  }

}
