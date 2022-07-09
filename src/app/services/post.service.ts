import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  

  constructor(
    private http: HttpClient
  ) { }

  getPosts(){
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  createPost(post:any) {
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post:any) {
    return this.http.put(this.url + `/${post.id}`,JSON.stringify(post));
  }

  deletePost(post:any){
    return this.http.delete(this.url + '/' + post.id);
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Client error: ' + error.error.message);
    }else{
      console.log('Backend error: status code: ' + error.status + " error: " + error.error);
    }

    return throwError('Bilinmeyen bir hata oluştu');
  }
}
