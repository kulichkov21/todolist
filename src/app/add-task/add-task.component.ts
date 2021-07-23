import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../app.component";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.sass']
})
export class AddTaskComponent implements OnInit {
  @Output() onAdd: EventEmitter<Task> = new EventEmitter<Task>()
  priority = 'high'
  text = ''


  constructor() {
  }

  ngOnInit(): void {
  }

  addTask() {
    const newTask: Task = {
      text: this.text,
      // @ts-ignore
      priority: this.convert(this.priority),
      time: new Date(),
      done: false,
      active: true
    }
    this.onAdd.emit(newTask)
    console.log(newTask)
    this.text = ''
  }

  // @ts-ignore
  convert(priority: string) {
    switch (priority) {
      case 'low':
        return 1
      case 'middle':
        return 2
      case 'high':
        return 3
    }
  }
}
