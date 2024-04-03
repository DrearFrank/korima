import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Users} from "./usuarios-model";

@Injectable()
export class UsuarioService {


  baseUrl = '/korima/user';

  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + '/getAll')
  }
  save(user: any) {
    return this.http.post<any>(this.baseUrl + '/saveOrUpdate', user);
  }


}
