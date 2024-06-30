import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ResumeDataComponent } from './resume-data/resume-data.component';
import { GenderComponent } from './gender/gender.component';
import { GeneralResultsComponent } from './general-results/general-results.component';

const routes: Routes = [
  { path: '', component: StatisticsPageComponent }
];

@NgModule({
  declarations: [
    StatisticsPageComponent,
    ResumeDataComponent,
    GenderComponent,
    GeneralResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class StatisticsModule {
  constructor() {
    console.log('StatisticsModule loaded.');
  }
}
