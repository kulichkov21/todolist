import { Pipe, PipeTransform } from '@angular/core';
import {Filter, Task} from "../app.component";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {


  transform(tasks: Task[], filter : Filter ): Task[] {
    let res
if (filter.priority == 0){
  res = tasks.filter(task => {
    return task.active == filter.active || task.done == filter.end
  })
}
else {
  res = tasks.filter(task => {
    return ((task.active == filter.active || task.done == filter.end) && (task.priority == filter.priority))
  })
}
return res
    }



}
