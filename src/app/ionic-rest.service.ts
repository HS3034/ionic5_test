import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Member {
 
  name: string;
  email: string;
  password: number;
  
}

@Injectable({
  providedIn: 'root'
})

export class IonicRestService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addMember(Member: Member): Observable<any> {
    return this.http.post<Member>('https://localhost:5001/api/members', Member, this.httpHeader)
      .pipe(
        catchError(this.handleError<Member>('Add Member'))
      );
  }

  getMember(id): Observable<Member[]> {
    return this.http.get<Member[]>('https://localhost:5001/api/members' + id)
      .pipe(
        tap(_ => console.log(`Member fetched: ${id}`)),
        catchError(this.handleError<Member[]>(`Get Member id=${id}`))
      );
  }

  getMemberList(): Observable<Member[]> {
    return this.http.get<Member[]>('https://localhost:5001/api/members')
      .pipe(
        tap(Member => console.log('Member fetched!')),
        catchError(this.handleError<Member[]>('Get Member', []))
      );
  }

  updateMember(id, Member: Member): Observable<any> {
    return this.http.put('https://localhost:5001/api/members' + id, Member, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Member updated: ${id}`)),
        catchError(this.handleError<Member[]>('Update Member'))
      );
  }

  deleteMember(id): Observable<Member[]> {
    return this.http.delete<Member[]>('https://localhost:5001/api/members' + id, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Member deleted: ${id}`)),
        catchError(this.handleError<Member[]>('Delete Member'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}