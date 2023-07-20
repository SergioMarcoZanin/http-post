import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GorestService } from '../gorest.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

    homepageform!: FormGroup

    constructor(private gorest: GorestService) { }

  ngOnInit(): void {
      this.homepageform = new FormGroup ({
      user_id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      body:new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    console.log(this.homepageform)
    this.gorest.post(
      {user_id:this.homepageform.value.user_id, title: this.homepageform.value.title, body:this.homepageform.value.body}
     ).subscribe(data => {
          console.log(data)
        })
  }
}
