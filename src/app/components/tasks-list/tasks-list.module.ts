import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TasksListComponent } from './tasks-list.component';

@NgModule({
  declarations: [TasksListComponent],
  imports: [CommonModule],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
