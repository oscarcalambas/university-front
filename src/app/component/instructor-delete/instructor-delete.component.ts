import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-delete',
  templateUrl: './instructor-delete.component.html',
  styleUrls: ['./instructor-delete.component.css']
})
export class InstructorDeleteComponent implements OnInit {

  public id: number;
  public instructor: Instructor;
  
  public showMsg: boolean = false;
  public msg: string;
  public type: string;

  constructor(public instructorService: InstructorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getdById();
  }

  public getdById() {
    let param = this.activatedRoute.params['_value'];
    this.id = param.id;

    this.instructorService.getById(this.id).subscribe(data => {
      this.instructor = data;
    });
  }
  public delete() {
    
    this.instructorService.delete(this.instructor.ID).subscribe(data => {
      this.router.navigate(['/instructor-list']);
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger';
    });

  }
}
