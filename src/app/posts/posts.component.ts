import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts:[any];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
    private http: HttpClient
  ) {
    http.get(this.url).subscribe(response => {
      this.posts = response as any;
    });
  }

  createPost(input:HTMLInputElement) {
    const title = input.value;
    
    this.http.post(this.url,JSON.stringify({
      userId: 11,
      id: 101,
      title: title,
      body: 'naber???'
    })).subscribe(response => {
      console.log(response);
    });
  }

  updatePost(post:any){
    post.title = 'updated';
    this.http.put(this.url + `/${post.id}`,JSON.stringify(post)).subscribe(response => console.log(response));

    /*this.http.patch(this.url + `/${post.id}`,JSON.stringify({
      title: 'updated'
    }));*/
  }

  deletePost(post:any){
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }
}
