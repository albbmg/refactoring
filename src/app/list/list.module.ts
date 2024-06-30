import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent }
];

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ]
})
export class ListModule {
  constructor() {
    console.log('ListModule loaded.');
  }
}
