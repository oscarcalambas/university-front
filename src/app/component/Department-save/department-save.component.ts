import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { Department } from 'src/app/domain/Department';
import { CourseService } from 'src/app/service/course.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-save',
  templateUrl: './department-save.component.html',
  styleUrls: ['./department-save.component.css']
})
export class DepartmentSaveComponent implements OnInit {
public department: Department;
public showMsg: boolean = false;
public msg: string;
public type: string;

  constructor(public departmentService: DepartmentService, 
    private router: Router) { }

  ngOnInit(): void {
    this.department = new Department(0, '', 0, 0, 0, 0,);
  }

  public save
  (){
    console.log(this.department);
    
    this.departmentService.save(this.department).subscribe(data => {
      this.router.navigate(['/department-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });
  }

}


