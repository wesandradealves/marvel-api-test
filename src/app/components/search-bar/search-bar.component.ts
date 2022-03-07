import { Component, 
  ViewEncapsulation, 
  Output, 
  EventEmitter, 
  AfterViewInit, 
  Input, 
  SimpleChanges} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  inputs: ['expanded']
})
export class SearchBarComponent implements AfterViewInit {
  searchQuery:any = null;
  timeout:any = null;
  @Output() onSearchQuery = new EventEmitter<any>();
  @Input('expanded') isExpanded:any = false;

  constructor() { }

  keyPress(searchQuery: KeyboardEvent) {
    this.searchQuery = searchQuery

    clearTimeout(), setTimeout(() => {
      this.onSearchQuery.emit(searchQuery);
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {}  

  ngAfterViewInit(): void {}  
}
