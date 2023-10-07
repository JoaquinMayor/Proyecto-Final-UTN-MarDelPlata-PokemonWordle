import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';



@Injectable({providedIn: 'root'})
export class ImageService{
    images: string[] = ["../photos/beectribeel.png","../photos/charmander.png","../photos/groudon.jpg","../photos/lucario.png","../photos/mew.png","../photos/mewtwo.png","../photos/pefil-base.png","../photos/pikachu.png","../photos/pokebal.jpeg","../photos/ratata.jpg","../photos/raykuaza.jpg","../photos/snorlax.jpg","../photos/wippinbel.png"];
}