import { Pipe, PipeTransform } from '@angular/core';
import {Task, Filter} from "../app.component";

@Pipe({
  name: 'filteractive'
})
export class FilteractivePipe implements PipeTransform {

  transform(tasks: Task[], filter : boolean, filter2: boolean): Task[] {
   return tasks.filter(task => {
     return task.active == filter || task.done == filter2
   })
  }

}
