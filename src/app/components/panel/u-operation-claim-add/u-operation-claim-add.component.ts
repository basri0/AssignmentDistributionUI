import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OperationClaimModel } from 'src/app/models/operationClaim/operationClaimModel';
import { UserModel } from 'src/app/models/userModels/userModel';
import { MessageService } from 'src/app/services/message.service';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-u-operation-claim-add',
  templateUrl: './u-operation-claim-add.component.html',
  styleUrls: ['./u-operation-claim-add.component.scss']
})
export class UOperationClaimAddComponent implements OnInit {

  userOperationClaimForm:FormGroup;
  users:UserModel[] = [];
  operationClaims:OperationClaimModel[] = [];
  constructor(private userOperationClaimService:UserOperationClaimService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private operationClaimService:OperationClaimService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getOperationClaims();
    this.createForm();
  }

  createForm(){
    this.userOperationClaimForm = this.formBuilder.group({
        userId: ['',Validators.required],
        operationClaimId: ['',Validators.required],
        isApproved: [false]
    })
  }

  getUsers(){
    this.userService.getAll().subscribe( (response) => {
      this.users = response.listData;
    })
  }

  getOperationClaims(){
    this.operationClaimService.getAll().subscribe( (response) => {
      this.operationClaims = response.listData;
    })
  }
  
  add(){
    if (this.userOperationClaimForm.valid) {
      const {userId,operationClaimId,isApproved} = Object.assign({},this.userOperationClaimForm.value);
      this.userOperationClaimService.add({
        id:0,
        userId:userId,
        operationClaimId :operationClaimId,
        isApproved:isApproved
      }).subscribe( (response) =>{
        this.messageService.show(response.message)
      })
    } else {
      this.messageService.show("lütfen boş geçmeyin")
    }
  }

}
