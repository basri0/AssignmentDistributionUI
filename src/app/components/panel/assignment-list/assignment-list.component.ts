import { Component, OnInit } from '@angular/core';
import { AssignmentDto } from 'src/app/models/assignmentDto';
import { AssignmentService } from 'src/app/services/assignment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {

  assignments:AssignmentDto[];
  constructor(private authService:AuthenticationService,
    private assignmentService:AssignmentService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.assignmentService.getAll().subscribe(response =>{
      this.assignments = response.listData;
    })
  } 


  delete(assignmentDto:AssignmentDto){
    this.assignmentService.delete({
      id:assignmentDto.assignmentId,
      userId:assignmentDto.userId,
      name:assignmentDto.name,
      description:assignmentDto.description
    }).subscribe(response =>{
      this.messageService.show(response.message)
      this.ngOnInit();
    })
  }
}
