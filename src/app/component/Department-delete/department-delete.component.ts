import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { Department } from 'src/app/domain/Department';
import { CourseService } from 'src/app/service/course.service';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

  public id: number;
  public department: Department;
  
  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public departmentService: DepartmentService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getdById();
  }

  public getdById() {
    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    });
  }
  public delete() {
    
    this.departmentService.delete(this.department.DepartmentID).subscribe(data => {
      this.router.navigate(['/course-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });

  }
}
