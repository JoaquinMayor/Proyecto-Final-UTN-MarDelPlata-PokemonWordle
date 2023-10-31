import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})

export class DataService{

    constructor(private httpClient:HttpClient){}

    //Guardar usuarios
    saveUsers(users:Usuario[]){
        this.httpClient.put("https://wordlepokemon-default-rtdb.firebaseio.com/users.json", users)
        .subscribe(
            response => console.log("Guardado Exitoso"),
            error => console.log("No se Guardo de Manera Exitosa"+ error)
        )
    }
    //Cargar usuarios
    chargeUsers(){
        return this.httpClient.get<any>("https://wordlepokemon-default-rtdb.firebaseio.com/users.json");
    }

    //Modificar usuario
    changeUser(index:number, user:Usuario){
        let url = "https://wordlepokemon-default-rtdb.firebaseio.com/users/" + index +'.json';

        this.httpClient.put(url, user)
        .subscribe(
            response => console.log("Modificación Exitosa"),
            error => console.log("Modificación Erronea" + error)
        )
    }
}