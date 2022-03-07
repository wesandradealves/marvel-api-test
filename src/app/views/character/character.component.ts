import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { DataService } from '../../services/services.service';
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { SpinnerComponent } from "../../components/spinner/spinner.component";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public characterId:any = null;
  public character:any = null;
  @ViewChild(TopBarComponent) topBar:any;
  @ViewChild(SpinnerComponent) spinner:any;
  
  constructor(private route:ActivatedRoute, private $self: DataService) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['characterId']) {
      this.characterId = parseInt(this.route.snapshot.params['characterId']);

      this.$self.getCharacters(this.characterId).then(response => {
        this.character = response.data.results[0];

      }).catch(err => this.character = false);         
    }
  }

}
