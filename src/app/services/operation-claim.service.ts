import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperationClaimModel } from '../models/operationClaim/operationClaimModel';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  private readonly apiUrl:string = environment.baseApiUrl + 'OperationClaims';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + '/getoperationclaims';
    return this.httpClient.get<ListResponseModel<OperationClaimModel>>(getListUrl);
  }

  getByOperationClaimId(operationClaimId:number){
    const getByIdUrl = this.apiUrl + '/getbyoperationclaimid/' + operationClaimId;
    return this.httpClient.get<SingleResponseModel<OperationClaimModel>>(getByIdUrl);
  }

  add(operationClaimModel:OperationClaimModel){    
    const addUrl = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(addUrl,operationClaimModel);
  }

  update(operationClaimModel:OperationClaimModel){
    const updateUrl = this.apiUrl + '/update';
    return this.httpClient.put<ResponseModel>(updateUrl,operationClaimModel);
  }

  delete(operationClaimModel:OperationClaimModel){    
    const deleteUrl = this.apiUrl + '/delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:operationClaimModel});
  }
}
