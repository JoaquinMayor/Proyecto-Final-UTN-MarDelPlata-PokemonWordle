import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})

export class DataService{

    constructor(private httpClient:HttpClient){}

    //Guardar usuarios
    saveUser(users:Usuario[]){
        this.httpClient.put('linkFirebase', users)
        .subscribe(
            response => console.log("Guardado Exitoso"),
            error => console.log("No se Guardo de Manera Exitosa"+ error)
        )
    }

    chargeUsers(){
        return this.httpClient.get('linkFirebase');
    }


    changeUser(index:number, user:Usuario){
        let url = '' + index +'.json';

        this.httpClient.put(url, user)
        .subscribe(
            response => console.log("Modificación Exitosa"),
            error => console.log("Modificación Erronea" + error)
        )
    }
}