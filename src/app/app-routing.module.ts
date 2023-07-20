import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '' , component: HomepageComponent},
  {path: 'post' , component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
