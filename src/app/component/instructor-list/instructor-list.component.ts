import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';

import { Instructor } from 'src/app/domain/instructor';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit, OnDestroy {

  public instructor: Instructor[];
  public subInstructor: Subscription;
  constructor( public instructorService: InstructorService) { }
ngOnDestroy(): void{
  this.subInstructor.unsubscribe();

}
  ngOnInit(): void {
    this.getAll();
  }
  public getAll(){
this.subInstructor = this.instructorService.getAll().subscribe(data =>{
  this.instructor = data;

  console.log (this.instructor);
});

  }

}
