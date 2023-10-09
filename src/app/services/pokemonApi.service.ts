import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";

@Injectable({providedIn: 'root'})
export class pokemonApiServices{
    pokemons:Pokemon[] = [];

    async singlePokemonApi(id:string){
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

    async generationPokemonApi(generation:string){
        const url = `https://pokeapi.co/api/v2/generation/${generation}`;
        try{
            const resultGeneration = await fetch(url);
            if (resultGeneration.status === 200) {
                const jsonGeneration = await resultGeneration.json();
                for (const pokemon of jsonGeneration.pokemon_species) {
                    let urlPokemon = pokemon.url;
                    let resultPokemon = await fetch(urlPokemon);
                    let jsonPokemon = resultPokemon.json(); //primera pagina pokemon https://pokeapi.co/api/v2/pokemon-species/786/
                    let id = jsonPokemon.id;
                    let otherUrlPokemon = `https://pokeapi.co/api/v2/pokemon/${jsonPokemon.capture_rate}`;
                }
            } else {
                alert("No se encontró la generacion");
            }
        }
    }
    
}