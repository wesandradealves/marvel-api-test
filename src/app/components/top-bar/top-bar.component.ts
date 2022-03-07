import { Component, 
  ViewEncapsulation, 
  Output, 
  EventEmitter, 
  AfterViewInit, 
  Input, 
  SimpleChanges} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements AfterViewInit {
  @Input() data:any = false;
  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.data);
  }  
}
