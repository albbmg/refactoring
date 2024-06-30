// src/app/home/home-page/home-page.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService, StudentDTO } from '../student.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  students: StudentDTO[] = [];

  constructor(private studentService: StudentService) {
    console.log('HomePageComponent loaded.');
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }
}
