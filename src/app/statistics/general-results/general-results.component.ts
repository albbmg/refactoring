import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StudentService, StudentDTO } from '../../home/student.service';

@Component({
  selector: 'app-general-results',
  templateUrl: './general-results.component.html',
  styleUrls: ['./general-results.component.css']
})
export class GeneralResultsComponent implements OnInit {
  public chart: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      const approvedCount = data.filter(student => student.nota >= 5).length;
      const failedCount = data.filter(student => student.nota < 5).length;
      this.chart = new Chart('resultsChart', {
        type: 'bar',
        data: {
          labels: ['Aprobados', 'Suspendidos'],
          datasets: [
            {
              label: 'Resultados',
              data: [approvedCount, failedCount],
              backgroundColor: ['#4CAF50', '#FF5252']
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}
