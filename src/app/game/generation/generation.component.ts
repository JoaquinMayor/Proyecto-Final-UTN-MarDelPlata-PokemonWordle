import { Component, EventEmitter, Output } from '@angular/core';
import { PokemonApiServices } from 'src/app/services/pokemonApi.service';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent {
  @Output() generationSelected = new EventEmitter<String>();
  generation: string = '';
  constructor(private apiService:PokemonApiServices){}
  
  async choiceGeneration(event: any) {
    this.generation = event.target.value;
    await this.apiService.listaSpeciesPokemon(this.generation);
    this.generationSelected.emit(this.generation);
  }

}
