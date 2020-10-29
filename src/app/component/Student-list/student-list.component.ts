import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { Student } from 'src/app/domain/Student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  public students: Student[];
  public subStudent: Subscription;
  constructor( public studentService: StudentService) { }
ngOnDestroy(): void{
  this.subStudent.unsubscribe();

}
  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
this.subStudent = this.studentService.getAll().subscribe(data =>{
  this.students = data;
  
  console.log (this.students)
 
});

  }

}
