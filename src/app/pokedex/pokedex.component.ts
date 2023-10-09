import { Component } from '@angular/core';
import 'tslib';
import { Pokemon } from '../models/pokemon.model';
@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
    min:number = 1;
    max:number = 5;
    pokemonList: Pokemon[] = [];
    

    /* ngOnInit() {
        const storedData = localStorage.getItem("data");
        if (storedData) {
            this.data = JSON.parse(storedData);
        }

        this.renderTable();
    } */

    

    async createPokemonList() {
        const pokemons = [];
        let pokemon;
        for (let i = this.min; i < this.max; i++) {
            pokemon = await this.fetchPokemon(i);
            pokemons.push(pokemon);
        }

        return pokemons;
    }

    async renderTable() {
        this.pokemonList = await this.createPokemonList();
        //this.showPokemons(this.pokemonList);
    }

    async filterPokemons(text: string) {
        let filteredList = [];

        if (text.trim() !== "") {
            filteredList = this.pokemonList.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(text.toLowerCase())
            );
            
        } else {
            filteredList = this.pokemonList;
        }

        this.showPokemons(filteredList);
    }

    showPokemons(pokemons: any) {
        const table = document.getElementById("lista");
        let html = "";
      
        for (const element of pokemons) {
          html += `
            <a href="./pokemon.html" (click)="viewPokemon(${element.id})">
              <li class="pokemon">Nombre: ${element.name}
                <img src="${element.sprites.front_default}" alt="Pokemon" />
              </li>
            </a>
          `;
        }
      
        if (table) {
          table.innerHTML = "";
          table.innerHTML = html;
        }
      }
      

    /* viewPokemon(id: any) {
        this.data = this.pokemonList.find(pokemon => pokemon.id === id);
        localStorage.setItem("data", JSON.stringify(this.data));
    } */
}
