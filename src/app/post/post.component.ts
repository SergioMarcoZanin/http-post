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
  homepageform!: FormGroup;

  constructor(private gorest: GorestService){}

  ngOnInit(): void {
  this.homepageform = new FormGroup ({
    user_id: new FormControl('', Validators.required),
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
}

interface Post {
  id:number;
  user_id:number;
  title:string;
  body:string;
}



