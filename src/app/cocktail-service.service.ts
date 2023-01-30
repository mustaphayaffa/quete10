import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor() { }
  
  getCocktails(){
    const pinacolada = new Cocktail ("pinacolada", 10, "https://assets.afcdn.com/recipe/20180705/80349_w350h250c1cx2208cy2125.jpg" ) 
    const mojito = new Cocktail ("Mojito", 15,"https://assets.afcdn.com/recipe/20180705/80255_w350h250c1cx2774cy1849.jpg")
    return [pinacolada, mojito]
}
  
}