import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class UsuariosServices {
    user: Usuario = new Usuario(0, "", "", "");
    users: Usuario[] = [];

    constructor(private router: Router) { }

    chargeUsuario(user: Usuario) {
        this.users.push(user);
    }

    searchUsuario(name: string, password: string) {
        let userExist: Usuario = new Usuario(0, "", "", "");
        if (this.users.length != 0) {
            let flag = false;
            for (let i = 0; i < this.users.length && flag == false; i++) {
                let usuario = this.users[i];
                if (usuario.getName === name) {
                    if (usuario.getPassword === password) {
                        userExist = usuario;
                        userExist.setLogging(true);
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

    editUser(user: Usuario) {
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

    logging(name: string, password: string) {
        let flag = false;
        let value = 0;
        for (let i = 0; i<this.users.length && flag == false; i++) {
            if (this.users[i].getName == name) {
                if (this.users[i].getPassword == password) {
                    this.user = this.users[i];
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
        this.user = new Usuario(0, "", "", "");
    }

    ifLogging() {
        if (this.user.getId != 0) {
            this.router.navigate(["/home"]);
        }
    }
}