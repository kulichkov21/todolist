import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../app.component";


@Pipe({
  name: 'find',
  pure: false
})
export class FindPipe implements PipeTransform {
  transform(tasks: Task[], search : string = ''): Task[] {
  if (!search.trim()){
    return tasks
  } else {
return tasks.filter(task => {
  return task.text.includes(search)
})
  }
  }

}
