import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { SharedService } from "./../../services/shared.service";
      
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CRUDTask2Service {
  private apiServer = "http://localhost:3000/products";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  }
constructor(private httpClient: HttpClient) { }

  create(customer: any): Observable<any> {
    return this.httpClient.post<any>(this.apiServer , JSON.stringify(customer) ,this.httpOptions )
    .pipe(
      catchError(this.errorHandler)
    )
  }
  
  getById(id:any): Observable<any> {
    return this.httpClient.get<any>(this.apiServer + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiServer)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, Customer:any): Observable<any> {
    return this.httpClient.put<any>(this.apiServer + '/' + id, JSON.stringify(Customer), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:any){
    return this.httpClient.delete<any>(this.apiServer + '/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}