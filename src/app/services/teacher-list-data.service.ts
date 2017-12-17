import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // importing Http
import 'rxjs/add/operator/map'; // importing react JS extension operator map

@Injectable()
export class TeacherListDataService {
teachers: Teacher[];

  constructor(public http:Http) { 
    //console.log("TeacherListDataService constructor executing");
    //this.teachers = [
      //{teacherId: "0", name:'ilker_5', lastname:'kiris_5', title: "professor", age:30, isFullTime:false, updatedOn: Date()},
    //];
  }

  getTeachers() {
    // below returns an "observable" from rxjs (react JS extension)
    return this.http.get('http://localhost:9016/api/v1/teachers')
      .map( response => response.json()); // rxjs map operator allows us to hook up a transformer to observable returned by above GET
  }
}

// using 'export' below allows any component using this service to be able to import the below interface
export interface Teacher {
  teacherId: string,
  name:string,
  lastname:string,
  title: string,
  age: number,
  isFullTime: boolean,
  updatedOn: Date
}