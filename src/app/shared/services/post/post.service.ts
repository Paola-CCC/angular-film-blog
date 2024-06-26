import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const API: string = environment.apiURL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  //OK
  getAll(): Observable<any> {
    return this.http.get(API + 'posts-all', httpOptions);
  }
  //OK
  getOnePost(id: any): Observable<any> {
    return this.http.get(API + `post-show/${id}`, httpOptions);
  }
  //OK
  deleteOnePost(id: any): Observable<any> {
    return this.http.delete(API + `post-remove/${id}`, httpOptions);
  }

  //OK
  addNewPost(title: string, content: string, userId: any): Observable<any> {
    return this.http.post(
      API + 'post-new',
      {
        title,
        content,
        userId
      },
      httpOptions
    );
  }

  //OK
  updatePost(
    title: string,
    content: string,
    userId: any,
    postId: any
  ): Observable<any> {
    return this.http.put(
      API + 'postUpdate',
      {
        title,
        content,
        userId,
        postId
      },
      httpOptions
    );
  }
}
