import { Component, OnInit } from '@angular/core';
import { AssignmentDto } from 'src/app/models/assignmentDto';
import { AssignmentService } from 'src/app/services/assignment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-assigments',
  templateUrl: './assigments.component.html',
  styleUrls: ['./assigments.component.scss']
})
export class AssigmentsComponent implements OnInit {

  assignments:AssignmentDto[];
  constructor(private authService:AuthenticationService,
    private assignmentService:AssignmentService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.assignmentService.getByUserId(this.authService.currentUserValue.id).subscribe(response =>{
      this.assignments = response.listData;
    })
  }
}
