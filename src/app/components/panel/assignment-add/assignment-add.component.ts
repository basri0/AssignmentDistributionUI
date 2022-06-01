import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/userModels/userModel';
import { AssignmentService } from 'src/app/services/assignment.service';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assignment-add',
  templateUrl: './assignment-add.component.html',
  styleUrls: ['./assignment-add.component.scss']
})
export class AssignmentAddComponent implements OnInit {

  addForm:FormGroup;
  users:UserModel[] = [];
  constructor(private userService:UserService,
    private assignmentService:AssignmentService,
    private messageService:MessageService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      userId:[0,Validators.required],
      name:['',Validators.required],
      description:['',Validators.required]
    })
    this.getUsers();
  }
  getUsers(){
    this.userService.getAll().subscribe( (response) => {
      this.users = response.listData;
    })
  }


  add(){
    if (this.addForm.valid) {
      const {userId,name,description} = this.addForm.value;
      this.assignmentService.add({id:0,name:name,userId:userId,description:description}).subscribe(response=>{
        this.messageService.show(response.message)
      })
    } else {
      this.messageService.show("lÜTFEN fORMU DOLDURUNUZ !")
    }
  }
}
