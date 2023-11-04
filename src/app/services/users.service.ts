import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { Router } from "@angular/router";
import * as bcrypt from 'bcryptjs';
import { CryptoService } from "./crypto.service";
import {setUser, getUsers} from "../../config/config"


@Injectable({ providedIn: 'root' })
export class UsuariosServices {
    user: Usuario = new Usuario("0", "", "", "");
    users: Usuario[] = [];
    
    constructor(private router: Router, private cryptoService:CryptoService) { }

  
    
    async chargeUsuario(user: Usuario) {
        setUser(user);
        this.users.push(user);
        
    }

    async searchUsuario(name: string, password: string) {
       
        let userExist: Usuario = new Usuario("0", "", "", "");
        if (this.users.length != 0) {
            let flag = false;
            for (let i = 0; i < this.users.length && flag == false; i++) {
                let usuario = this.users[i];
                if (usuario.getName === name) {
                    if (usuario.getPassword === password) {
                        userExist = usuario;
                        flag = true;
                    } else {
                        alert("Contraseña Incorrecta");
                    }
                }
            }
        }
        return userExist;
    }

    findUser(name: string) {
        let flag: boolean = false;
        for (const user of this.users) {
            
            if (name === user.getName) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    async editUser(user: Usuario) {
        this.users = await getUsers();
        setUser(user);
        let flag: boolean = false;
        if (user && this.users.length != 0) {
            for (let i = 0; i < this.users.length && flag == false; i++) {
                if (user.getId == this.users[i].getId) {
                    flag = true;
                    this.users[i] = user;
                }
            }
        }
    }

     validateName(name: string) {
        
        let flag = false;
        if (this.users.length > 0) {
            for (let user of this.users) {
                if (name == user.getName || name == "") {
                    flag = true;
                }
            }
        }
        return flag;
    }

     validatePassword(password: string) {
        
        let flag = false;
        if (password.length < 5 || password === "") {
            flag = true;
        }
        return flag;
    }

    async logging(name: string, password: string) {
        let flag = false;
        let value = 0;
        this.users = await getUsers();
        for (let i = 0; i<this.users.length && flag == false; i++) {
            
            if (this.users[i].getName == name) {

                if (await this.cryptoService.compararPassword(password , this.users[i].getPassword)) {
                    this.user = this.users[i];
                    value = 0;
                    flag = true;
                } else {
                    value = 2;
                }
            } else {
                value = 1;
            }
        }
        return value;
    }

    logout() {
        this.user = new Usuario("0", "", "", "");
    }

    ifLogging() {
        if (this.user.getId != "0") {
            this.router.navigate(["/home"]);
        }
    }

   
}