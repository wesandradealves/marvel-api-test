import { Component, 
  ViewEncapsulation, 
  Output, 
  EventEmitter, 
  AfterViewInit, 
  Input, 
  SimpleChanges} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  inputs: ['data']
})
export class HeroCardComponent implements AfterViewInit {
  @Input() data:any = false;
  constructor() { }

  ngAfterViewInit(): void {}  
}
