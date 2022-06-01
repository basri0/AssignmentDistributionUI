import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Assignment } from '../models/assignment';
import { AssignmentDto } from '../models/assignmentDto';
import { ListResponseModel } from '../models/responseModels/listResponseModel';
import { ResponseModel } from '../models/responseModels/responseModel';
import { SingleResponseModel } from '../models/responseModels/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  private readonly apiUrl:string = environment.baseApiUrl + 'Assignments';

  constructor(private httpClient:HttpClient) { }

  getAll(){
    const getListUrl = this.apiUrl + '/getdto-all';
    return this.httpClient.get<ListResponseModel<AssignmentDto>>(getListUrl);
  }

  getById(id:number){
    const getByIdUrl = this.apiUrl + '/getdtoby/assignment-id/' + id;
    return this.httpClient.get<SingleResponseModel<AssignmentDto>>(getByIdUrl);
  }

  getByUserId(id:number){
    const getByIdUrl = this.apiUrl + '/getdtoby/user-id/' + id;
    return this.httpClient.get<ListResponseModel<AssignmentDto>>(getByIdUrl);
  }


  add(assignment:Assignment){    
    const addUrl = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(addUrl,assignment);
  }

  update(assignment:Assignment){
    const updateUrl = this.apiUrl + '/update';
    return this.httpClient.put<ResponseModel>(updateUrl,assignment);
  }

  delete(assignment:Assignment){    
    const deleteUrl = this.apiUrl + '/delete';
    return this.httpClient.delete<ResponseModel>(deleteUrl,{body:assignment});
  }
}
