import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Course } from 'src/app/domain/course';
import { Department } from 'src/app/domain/Department';
import { CourseService } from 'src/app/service/course.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit, OnDestroy {

  public departments: Department[];
  public subDepartment: Subscription;
  constructor( public departmentService: DepartmentService) { }
ngOnDestroy(): void{
  this.subDepartment.unsubscribe();

}
  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
this.subDepartment = this.departmentService.getAll().subscribe(data =>{
  this.departments = data;

  console.log (this.departments);
});

  }

}
