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
      title: new FormControl('', Validators.required),
      body:new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    console.log(this.homepageform)
    this.gorest.post({title: this.homepageform.value.title, body:this.homepageform.value.body}).subscribe(data => {
      console.log(data)
    })



    // this.gorest.post(
    //   {name: this.homepageform.value.title, body:this.homepageform.value.body}
    //  ).subscribe(data => {
    //       console.log(data)
    //     })
  }   
}
