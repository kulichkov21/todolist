import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../app.component";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  @Output() onDelete: EventEmitter<Task> = new EventEmitter<Task>()
  // @ts-ignore
  @Input() task: Task
  @Output() newTask: EventEmitter<Task> = new EventEmitter<Task>()
  priorities = {
    high: 'Высокий',
    middle: "Средний",
    low: 'Низкий'
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }

  taskDone(event : MouseEvent) {
 if (!this.task.done) {
   this.task.done = true
   this.task.active = false
   this.newTask.emit(this.task)
   // @ts-ignore
   // event.target.classList.remove('check')
   // // @ts-ignore
   // event.target.classList.add('return')
 } else {
   this.task.done = false
   this.task.active = true
   this.newTask.emit(this.task)
   // @ts-ignore
   // event.target.classList.remove('return')
   // // @ts-ignore
   // event.target.classList.add('check')
 }
    console.log(event)
    console.log(this.task)
  }

  editTask(event: MouseEvent) {
    // @ts-ignore
    if (event.target.parentNode.childNodes[1].classList.contains('__taskcard-card-left-textEditHidden')){
      // @ts-ignore
      event.target.parentNode.childNodes[1].classList.remove('__taskcard-card-left-textEditHidden')
    } else {
      // @ts-ignore
      event.target.parentNode.childNodes[1].classList.add('__taskcard-card-left-textEditHidden')
      // @ts-ignore
      this.task.text = event.target.parentNode.childNodes[1].value
      this.newTask.emit(this.task)
    }
  }

  deleteTask(task : Task) {
    this.onDelete.emit(task)
    console.log(task)
  }
}
