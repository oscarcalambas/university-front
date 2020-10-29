import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './service/course.service';
import { CourseListComponent } from './component/course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { StudentDeleteComponent } from './component/Student-delete/student-delete.component';
import { StudentListComponent } from './component/Student-list/student-list.component';
import { StudentSaveComponent } from './component/Student-save/student-save.component';
import { StudentEditComponent } from './component/Student-edit/student-edit.component';
import { DepartmentListComponent } from './component/Department-list/department-list.component';
import { DepartmentSaveComponent } from './component/Department-save/department-save.component';
import { DepartmentDeleteComponent } from './component/Department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/Department-edit/department-edit.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';
import { StudentService } from './service/student.service';
import { DepartmentService } from './service/department.service';
import { InstructorService } from './service/instructor.service';

//import { InstructorService } from './service/instructor.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseSaveComponent,
    CourseEditComponent,
    CourseDeleteComponent,

    StudentListComponent,
    StudentSaveComponent,
    StudentEditComponent,
    StudentDeleteComponent,

    DepartmentListComponent,
    DepartmentSaveComponent,
    DepartmentEditComponent,
    DepartmentDeleteComponent,

    InstructorListComponent,
    InstructorEditComponent,
    InstructorSaveComponent,
    InstructorDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CourseService,
     StudentService,
     DepartmentService,
     InstructorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
