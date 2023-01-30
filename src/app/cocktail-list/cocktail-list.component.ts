import { Component } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';
import { Cocktail } from '../cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
  cocktails : Cocktail[] = this.cocktailsService.getCocktails()

  constructor(public cocktailsService : CocktailServiceService){
    
  }

  

}
