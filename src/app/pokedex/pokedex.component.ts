import { Component } from '@angular/core';
import 'tslib';
@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
    min = 1;
    max = 152;
    pokemonList: any[] = [];
    data: any;

    ngOnInit() {
        const storedData = localStorage.getItem("data");
        if (storedData) {
            this.data = JSON.parse(storedData);
        }

        this.renderTable();
    }

    async fetchPokemon(id: number) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        try {
            const result = await fetch(url);
            if (result.status === 200) {
                const json = await result.json();
                return json;
            } else {
                alert("No se encontró el Pokémon");
            }
        } catch (e) {
            console.log(e);
        }
    }

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
        this.showPokemons(this.pokemonList);
    }

    async filterPokemons(text: string) {
        let filteredList = [];

        if (text.trim() !== "") {
            filteredList = this.pokemonList.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(text.toLowerCase())
            );
            console.log("entre")
        } else {
            filteredList = this.pokemonList;
        }

        this.showPokemons(filteredList);
    }

    showPokemons(pokemons: any) {
        const table = document.getElementById("lista");
        let html = "";

        for (const element of pokemons) {
            html += `<a href="./pokemon.html" onclick="this.viewPokemon(${element.id})"><li class="pokemon">Nombre: ${element.name}
                <img src="${element.sprites.front_default}" alt="Pokemon"></img></li></a>`;
        }

        if (table) {
            table.innerHTML = html;
        }
    }

    viewPokemon(id: any) {
        this.data = this.pokemonList.find(pokemon => pokemon.id === id);
        localStorage.setItem("data", JSON.stringify(this.data));
    }
}
