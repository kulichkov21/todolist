import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from "../app.component";
import {Sort, Filter} from "../app.component";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})

export class FilterComponent implements OnInit {
  toggleSortPrior = true
  toggleSortData = false
  searchtext = ''
  filter : Filter = {
    active: true,
    end: true,
    priority: 0
  }
 @Output() onSearch : EventEmitter<string> = new EventEmitter<string>()
  @Output() onEditSort: EventEmitter<Sort> = new EventEmitter<Sort>()
  @Output() onEditFilter: EventEmitter<Filter> = new EventEmitter<Filter>()
  // @ts-ignore
  @ViewChild('sortPriority', {static: false}) sortPrior: ElementRef
  // @ts-ignore
  @ViewChild('sortData', {static: false}) sortDate: ElementRef

  constructor() {

  }

 // onSearch(text:string){
 //    this.search.emit(text)
 //   console.log(text)
 // }
  ngOnInit(): void {

  }

  choiseSort($event: MouseEvent) {

  }

  sortingChoise(event: MouseEvent) {
    const mySort : Sort = {activeSort: ''}
    // @ts-ignore
    if (event.target.classList.contains('__sortingpriority')) {
      (event.target as any)?.classList.add('activeSort')
      this.sortDate.nativeElement.classList.remove('activeSort')
      // @ts-ignore
      if (event.target.classList.contains('__sortUp')){
        // @ts-ignore
        event.target.classList.remove('__sortUp')
        // @ts-ignore
        event.target.classList.add('__sortDown')
        mySort.activeSort = 'sortPriorDown'
      } else {
        // @ts-ignore
        event.target.classList.remove('__sortDown')
        // @ts-ignore
        event.target.classList.add('__sortUp')
        mySort.activeSort = 'sortPriorUp'
      }
      // @ts-ignore
      console.log(event.target.classList)
    } else {
      // @ts-ignore
      event.target.classList.add('activeSort')
      this.sortPrior.nativeElement.classList.remove('activeSort')
      // @ts-ignore
      if (event.target.classList.contains('__sortUp')){
        // @ts-ignore
        event.target.classList.remove('__sortUp')
        // @ts-ignore
        event.target.classList.add('__sortDown')
        mySort.activeSort = 'sortDataDown'
      } else {
        // @ts-ignore
        event.target.classList.remove('__sortDown')
        // @ts-ignore
        event.target.classList.add('__sortUp')
        mySort.activeSort = 'sortDataUp'
      }

    }
    this.onEditSort.emit(mySort)

  }

  search() {
    this.onSearch.emit(this.searchtext)
    console.log(this.searchtext)
  }

  filterForm() {
   this.onEditFilter.emit(this.filter)
  }
}
