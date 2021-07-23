import {Component, Input, SimpleChanges} from '@angular/core';
import {Event} from "@angular/router";
import {OnInit, OnChanges} from "@angular/core";
import {HttpClient} from "@angular/common/http";



export interface Task {
  id?: number
  priority: number
  text: string
  time: Date
  active: boolean
  done: boolean
}

export interface Sort {
  activeSort: string
}
export interface Filter {
  priority : number
  active: boolean
  end: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'todolist';
  search = ''
  requestLink: string = 'http://localhost:3000/items'
  tasks: Task[]  = []
    // = [
    // {id: 1, priority: 1, text: 'Помыть попу', time: new Date(), done: false, active: true},
    // {id: 2, priority: 2, text: 'Помыть попу', time: new Date(), done: true, active: false},
    // {id: 3, priority: 3, text: 'Помыть попу', time: new Date(), done: false, active: true}]

  public sort: Sort = {
    activeSort: 'sortPriorUp'
  }
  filter : Filter = {
      priority : 0,
      active: true,
      end: true
  }

constructor(private http: HttpClient) {

}
  ngOnInit(): void {
    this.firstSorting(this.tasks)
    this.http.get<Task[]>(this.requestLink)
      .subscribe(response => {
        console.log(response)
        this.tasks = response
      })
  }


  private firstSorting(tasks: Task[]) {
    this.tasks.sort((a, b) => a.priority < b.priority ? 1 : -1);
  }

  updateTasksAdd(task: Task) {
    this.http.post<Task>(this.requestLink, task)
      .subscribe(task => {
        console.log(task)
        this.tasks.unshift(task)
        this.onlineSort(this.sort.activeSort, this.tasks)
      })

  }

  updateTasksDelete(task: Task) {
    let id = this.tasks.indexOf(task)
    this.http.delete<Task>(`http://localhost:3000/items/${task.id}`)
      .subscribe(response => {
        this.tasks.splice(id, 1)
      })
  }

  public onlineSort(param: string, t: Task[]) {
    switch (param) {
      case 'sortPriorUp': {
        t.sort((a, b) => ((a.priority <= b.priority))  ? 1 : -1)
        this.sort.activeSort = param
        console.log(t)
        break
      }
      case 'sortPriorDown': {
        t.sort((a, b) => a.priority >= b.priority ? 1 : -1)
        this.sort.activeSort = param
        console.log(t)
        break
      }
      case 'sortDataDown': {
        t.sort((a, b) => a.time > b.time ? 1 : -1)
        this.sort.activeSort = param
        console.log(t)
        break
      }
      case 'sortDataUp': {
        t.sort((a, b) => a.time < b.time ? 1 : -1)
        this.sort.activeSort = param
        console.log(t)
        break
      }
    }
  }

  sortingTasks(sort: Sort) {


    this.sort.activeSort = sort.activeSort
    this.onlineSort(sort.activeSort, this.tasks)
    console.log(this.tasks)

  }

  findText(event: string) {
    this.search = event
  }

  doFilter(filter: Filter) {
    this.filter = filter
    console.log(this.filter, this.tasks)
  }

  reNewTask(task: Task) {
    this.http.put<Task>(`http://localhost:3000/items/${task.id}`, task)
      .subscribe(response => {
        console.log(response)
      })
  }
}
