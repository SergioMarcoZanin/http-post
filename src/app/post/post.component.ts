import { Component, OnInit } from '@angular/core';
import { GorestService } from '../gorest.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[] = [{
    "id":0,
    "user_id":0,
    "title":"",
    "body":""
  }]

  post: Post = {
    "id":0,
    "user_id":0,
    "title":"",
    "body":""
  }

  comments: Comment[] = [{
    "id":0,
    "post_id":0,
    "name":"",
    "email":"",
    "body":""
  }]
  comment: Comment = {
    "id":0,
    "post_id":0,
    "name":"",
    "email":"",
    "body":""
  }

  homepageform!: FormGroup;

  constructor(private gorest: GorestService){}

  ngOnInit(): void {
  this.homepageform = new FormGroup ({
    title: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })
  this.getPosts()
}

  getPosts(){
      this.gorest.get().subscribe((data: any) => {
      this.posts = data;
      console.log(data);
    });
}
  getPostComments(id:number){
      this.gorest.getPostComment(id).subscribe((data: any) => {
      this.comments = data.filter((comment: Comment) => comment.post_id == id);
      console.log(this.comments);
    });
  }
  deletePost(id:number){
      this.gorest.delete(id).subscribe((data: any) => {
      this.post = data
      console.log(data)
      this.getPosts()
      }, (error) => {console.log(error)})
}
  gotoComment(id:number){
    localStorage.setItem('post_id', id.toString());
  }
}
interface Post {
  id:number;
  user_id:number;
  title:string;
  body:string;
}

interface Comment {
  id:number;
  post_id:number;
  name:string;
  email:string;
  body:string;
}



