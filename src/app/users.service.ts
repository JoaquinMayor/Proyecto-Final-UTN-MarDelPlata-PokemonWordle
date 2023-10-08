import { Injectable } from "@angular/core";
import { Usuario } from "./user.model";




@Injectable({providedIn: 'root'})
export class UsuariosServices{
    client:Usuario = new Usuario(0,"","", "");
    users:Usuario[] = [];

    chargeUsuario(user:Usuario){
        this.users.push(user);
    }

    searchUsuario(name:string, password:string){
        let userExist:Usuario = new Usuario(0,"","","");
        
        if(this.users.length!=0){
            let flag = false;
            for(let i = 0; i<this.users.length && flag ==false;i++){
               let usuario = this.users[i];
               if(usuario.getName === name){
                   if(usuario.getPassword===password){
                        userExist = usuario;
                        userExist.setLogging = true;
                        flag = true;
                   } else{
                        alert("Contraseña Incorrecta");
                   }
               }
            }
        }
        return userExist;
    }

    editUser(user:Usuario){
        let flag = false;
        if(user && this.users.length !=0){
            for(let i = 0; i<this.users.length && flag ==false;i++){
                if(user.getId == this.users[i].getId){
                    flag = true;
                    this.users[i] = user;
                }
            }
        }
    }

    validateName(name:string){
        let flag = false;
        if(this.users.length<1){
            for (let user of this.users) {
                if(user.getName === name || name ===""){
                    flag = true;
                }
            }
        }
        

        return flag;
    }

    validatePassword(password:string){
        let flag = false;
        
            if(password.length<5 || password === ""){
                flag = true;
            }

        return flag;
    }

    logging(name:string, password:string){
        let flag = false;

        for (let user of this.users) {
            if(user.getName === name){
                if(user.getPassword === password){
                    this.client = user;
                }else{
                    alert("Contrasela Incorrecta")
                }
            }else{
                alert("Nombre de usuario incorrecto");
            }
        }
    }
}