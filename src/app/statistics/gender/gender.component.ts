import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StudentService, StudentDTO } from '../../home/student.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  public chart: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      const maleCount = data.filter(student => student.sexo === 'M').length;
      const femaleCount = data.filter(student => student.sexo === 'F').length;
      this.chart = new Chart('genderChart', {
        type: 'pie',
        data: {
          labels: ['Male', 'Female'],
          datasets: [
            {
              data: [maleCount, femaleCount],
              backgroundColor: ['#36A2EB', '#FF6384']
            }
          ]
        },
        options: {
          responsive: true
        }
      });
    });
  }
}
