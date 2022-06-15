import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModule } from './common/common-components.module';
import { TasksListComponentModule } from './tasks-list/tasks-list.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TasksListComponentModule, CommonComponentsModule],
  exports: [TasksListComponentModule, CommonComponentsModule],
})
export class ComponentsModule {}
