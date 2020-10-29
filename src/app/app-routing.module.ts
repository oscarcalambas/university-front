import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseSaveComponent } from './component/course-save/course-save.component';
import { DepartmentDeleteComponent } from './component/Department-delete/department-delete.component';
import { DepartmentEditComponent } from './component/Department-edit/department-edit.component';
import { DepartmentSaveComponent } from './component/Department-save/department-save.component';
import { StudentDeleteComponent } from './component/Student-delete/student-delete.component';
import { StudentEditComponent } from './component/Student-edit/student-edit.component';
import { StudentListComponent } from './component/Student-list/student-list.component';
import { StudentSaveComponent } from './component/Student-save/student-save.component';
import {DepartmentListComponent} from './component/Department-list/department-list.component';
import { InstructorEditComponent } from './component/instructor-edit/instructor-edit.component';
import { InstructorSaveComponent } from './component/instructor-save/instructor-save.component';
import { InstructorListComponent } from './component/instructor-list/instructor-list.component';
import { InstructorDeleteComponent } from './component/instructor-delete/instructor-delete.component';



const routes: Routes = [
  { path: 'course-list', component: CourseListComponent },
  { path: 'course-save', component: CourseSaveComponent },
  { path: 'course-edit/:id', component: CourseEditComponent },
  { path: 'course-delete/:id', component: CourseDeleteComponent },

  { path: 'student-list', component: StudentListComponent },
  { path: 'student-save', component: StudentSaveComponent },
  { path: 'student-edit/:id', component: StudentEditComponent },
  { path: 'student-delete/:id', component: StudentDeleteComponent },

  { path: 'department-list', component: DepartmentListComponent },
  { path: 'department-save', component: DepartmentSaveComponent },
  { path: 'department-edit/:id', component: DepartmentEditComponent },
  { path: 'department-delete/:id', component: DepartmentDeleteComponent },

  { path: 'instructor-list', component: InstructorListComponent},
  { path: 'instructor-edit/:id', component: InstructorEditComponent},
  { path: 'instructor-save', component: InstructorSaveComponent},
  { path: 'instructor-delete/:id', component: InstructorDeleteComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

