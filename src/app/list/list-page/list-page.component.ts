import { Component, OnInit } from '@angular/core';
import { StudentService, StudentDTO } from '../../home/student.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  students: StudentDTO[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }
}