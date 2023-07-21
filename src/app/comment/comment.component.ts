import { Component, OnInit } from '@angular/core';
import { GorestService } from '../gorest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  commentform!: FormGroup

  constructor(private gorest: GorestService){}

  ngOnInit(): void {
    this.commentform = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    body:new FormControl('', Validators.required)
  })
}

onSubmit(){
  console.log(this.commentform)
  let currentidcomment = localStorage.getItem("post_id")

  this.gorest.postComment(
   currentidcomment,  { name: this.commentform.value.name, email:this.commentform.value.email, body:this.commentform.value.body}
   ).subscribe(data => {
        console.log(data)
      })
}

}
