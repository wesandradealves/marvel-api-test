import { Component, ViewEncapsulation, ViewChild, AfterViewInit, SimpleChanges} from '@angular/core';
import { DataService } from '../../services/services.service';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { HeroCardComponent } from "../../components/hero-card/hero-card.component";
import { SpinnerComponent } from "../../components/spinner/spinner.component";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit  {
  public searchQuery = null;
  public filter:any = null;
  @ViewChild(SearchBarComponent) searchBar:any;
  @ViewChild(HeroCardComponent) heroCard:any;
  @ViewChild(SpinnerComponent) spinner:any;

  constructor(private $self: DataService) { }

  onSearchQuery(searchQuery: any) {
      this.filter = null;
      this.searchQuery = searchQuery;
      this.$self.getCharacters(searchQuery ? searchQuery : '').then(response => {
        if(response.data.results) this.filter = response.data.results;
      }).catch(err => console.log(err));  
  }  

  ngAfterViewInit(): void {
		this.$self.getCharacters().then(response => {
      if(response.data.results) this.filter = response.data.results;
		}).catch(err => console.log(err));    
  }

  ngOnChanges(changes: SimpleChanges) {}    
}
