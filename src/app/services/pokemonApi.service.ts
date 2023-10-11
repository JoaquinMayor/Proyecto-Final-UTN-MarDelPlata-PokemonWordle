import { Injectable } from "@angular/core";
import { Pokemon } from "../models/pokemon.model";
import { HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PokemonApiServices{
    pokemonSpecies:any;
    pokemonSpeciesURLList:any[] = [];
    pokemonArray:Pokemon[] = [];

    jsonPokemons:any[] = [];
    
    constructor(private httpClient:HttpClient){

    }

    singlePokemonApi(id:string){
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        return this.httpClient.get(url);       
    }

    jsonSinglePokemon(url:string){
        return this.httpClient.get(url);
    }

    /*async otraFuncion(){
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
    }*/

    generationPokemonApi(generation:string){ //Junta todo el dato de la generacion
        const url = `https://pokeapi.co/api/v2/generation/${generation}`;
        return this.httpClient.get(url);     
    }

    obtenerListaPokemonApi(generation:string){ //obtiene el dato de la generacion en formato json

        this.generationPokemonApi(generation).subscribe(
            res=>{
                this.pokemonSpecies = res;    
            }
        )
    }

    listaSpeciesPokemon(generation:string){ //Guarda la lista de especies de pokemon de esa generacion
        this.obtenerListaPokemonApi(generation);
        for (let pokemon of this.pokemonSpecies.pokemon_species) {
            this.pokemonSpeciesURLList.push(pokemon);
        }
        this.datesSinglePokemons();
    }

    datesSinglePokemons(){
        let jsonPokemon:any;
        let jsonPoke:any;
        let description = "";
        let type2 = "None"
    
        for (const pokemon of this.pokemonSpeciesURLList) {
           
            this.jsonSinglePokemon(pokemon.url).subscribe(
                res => {
                    jsonPokemon = res;
                    
                    this.singlePokemonApi(jsonPokemon.id).subscribe(
                        res =>{
                            jsonPoke = res;
                             this.createArrayPokemon(jsonPokemon,jsonPoke);
                        }
                    )
                }
            );
     }
      console.log(this.pokemonArray);      
          
    }

    createArrayPokemon(jsonPokemon:any, jsonPoke:any){
             
        let description = "";
        let type2 = "None"
        /*if(jsonPoke.types.length == 1){
                        type2 = jsonPoke.types[1].name; 
                    }*/
                    //console.log(jsonPokemon.generation.name);
                    
     this.pokemonArray.push(new Pokemon(jsonPokemon.id, 
        jsonPokemon.name,
        jsonPokemon.generation.name,
        jsonPoke.sprites.front_default,
        jsonPoke.sprites.back_default,
        jsonPokemon.egg_groups[0].name,
        "description",
        jsonPoke.types[0].name, 
        type2, 
        jsonPoke.stats[1].base_stat,
        jsonPoke.stats[3].base_stat,
        jsonPoke.stats[5].base_stat,
        jsonPoke.stats[2].base_stat,
        jsonPoke.stats[4].base_stat,
        jsonPoke.stats[0].base_stat,
        jsonPoke.heigth,
        jsonPoke.weight));
    }

    





    

    async otraFuncionMas(){
        let url = "";    
        try{
                const resultGeneration = await fetch(url);
                if (resultGeneration.status === 200) {
                    const jsonGeneration = await resultGeneration.json();
                    for (const pokemon of jsonGeneration.pokemon_species) {
                        let urlPokemon = pokemon.url;
                        let resultPokemon = await fetch(urlPokemon);
                        let jsonPokemon = resultPokemon.json(); //primera pagina pokemon https://pokeapi.co/api/v2/pokemon-species/786/
                        /* let id = jsonPokemon.id;
                        let otherUrlPokemon = `https://pokeapi.co/api/v2/pokemon/${jsonPokemon.capture_rate}`; */
                    }
                } else {
                    alert("No se encontró la generacion");
                }
            }catch(e){
                console.log(e);
            }
        }
    
}