import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { UserOperationClaim } from '../models/userModels/userOperationClaim';
import { UserOperationClaimModel } from '../models/userModels/userOperationClaimModel';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {


  private readonly apiUrl:string = environment.baseApiUrl + 'UserOperationClaims';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + '/get-all';
    return this.httpClient.get<ListResponseModel<UserOperationClaimModel>>(getListUrl);
  }

  add(userOperationClaim:UserOperationClaim){    
    const addUrl = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(addUrl,userOperationClaim);
  }

  delete(userOperationClaim:UserOperationClaim){    
    const deleteUrl = this.apiUrl + '/delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:userOperationClaim});
  }

  getByUserEmail(userEmail:string){
    const getByUrl = this.apiUrl + '/GetByUserEmail/' + userEmail;
    return this.httpClient.get<ListResponseModel<UserOperationClaimModel>>(getByUrl);
  }

  getByUserId(userId:number){
    const getByUrl = this.apiUrl + '/get-by-user-id/' + userId;
    return this.httpClient.get<ListResponseModel<UserOperationClaimModel>>(getByUrl);
  }
}
