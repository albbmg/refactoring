import { Component, OnInit } from '@angular/core';
import { StudentService, StudentDTO } from '../../home/student.service';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent implements OnInit {
  totalAlumnos: number = 0;
  totalAprobados: number = 0;
  totalSuspendidos: number = 0;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.totalAlumnos = data.length;
      this.totalAprobados = data.filter(student => student.nota >= 5).length;
      this.totalSuspendidos = data.filter(student => student.nota < 5).length;
    });
  }
}
