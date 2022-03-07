import { Component, 
  ViewEncapsulation, 
  Output, 
  EventEmitter, 
  AfterViewInit, 
  Input, 
  SimpleChanges} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {}  

}
