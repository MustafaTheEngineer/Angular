import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:[any];
  error:any;

  constructor(
    private postService:PostService
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      response => {
      this.posts = <[any]>response;
    }, 
    error => this.error = error);
  }

  createPost(input:HTMLInputElement) {
    const title = input.value;
    const post = {
      title: title
    }
    
    this.postService.createPost(JSON.stringify(post)).subscribe(response => {
      console.log(response);
    });
  }

  updatePost(post:any){
    post.title = 'updated';
    this.postService.updatePost(post).subscribe(response => console.log(response));

    /*this.http.patch(this.url + `/${post.id}`,JSON.stringify({
      title: 'updated'
    }));*/
  }

  deletePost(post:any){
    this.postService.deletePost(post).subscribe(response => {
      console.log(response);
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }
}
