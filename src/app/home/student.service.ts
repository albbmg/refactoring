import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StudentDTO {
  nombre: string;
  sexo: string;
  nota: number;
  ausencias: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private http: HttpClient, private papa: Papa) {
    console.log('StudentService loaded.');
    if (!http) {
      console.error('HttpClient not provided.');
    }
    if (!papa) {
      console.error('PapaParse not provided.');
    }
  }

  getStudents(): Observable<StudentDTO[]> {
    return this.http.get('assets/notas_alumnos.csv', { responseType: 'text' })
      .pipe(
        map(csvData => {
          const parsedData = this.papa.parse(csvData, { header: true }).data;
          return parsedData as StudentDTO[];
        })
      );
  }
}
