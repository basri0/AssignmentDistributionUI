import { Component, OnInit } from '@angular/core';
import { OperationClaimModel } from 'src/app/models/operationClaim/operationClaimModel';
import { MessageService } from 'src/app/services/message.service';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-list',
  templateUrl: './operation-claim-list.component.html',
  styleUrls: ['./operation-claim-list.component.scss']
})
export class OperationClaimListComponent implements OnInit {

  operationClaims:OperationClaimModel[] = [];
  constructor(private operationClaimService:OperationClaimService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.operationClaimService.getAll().subscribe( (response) =>{
      this.operationClaims = response.listData; 
    })
  }

  delete(operationClaim:OperationClaimModel){
    this.operationClaimService.delete(operationClaim).subscribe( (response) =>{
      this.messageService.show(response.message)
      this.getAll();
    })
  }
}
