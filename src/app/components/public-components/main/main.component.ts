import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isLogginIn = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    if (this.authService.currentUserValue) {
      this.isLogginIn = true;
    } else {
      this.isLogginIn = false;
    }
  }

  logout(){
    this.authService.logout();
  }

}
