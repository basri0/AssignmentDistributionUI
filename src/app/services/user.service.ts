import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { UserModel } from '../models/userModels/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl:string = environment.baseApiUrl + 'Users' + '/get-all';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<ListResponseModel<UserModel>>(this.apiUrl);
  }
}
