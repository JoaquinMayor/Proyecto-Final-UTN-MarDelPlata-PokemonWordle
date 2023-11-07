import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../../services/users.service';
import { Usuario } from '../../models/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { getUsers } from 'src/config/config';

@Component({
  selector: 'app-loggin-user',
  templateUrl: './loggin-user.component.html',
  styleUrls: ['./loggin-user.component.scss']
})
export class LogginUserComponent {
  log: boolean = false;

  constructor(private userService: UsuariosServices, private router: Router) { }
 

  get user(): Usuario {
    return this.userService.user;
  }

  async logging(form: NgForm) {
    let error: number = 0
    const name: string = form.value.name;
    const password: string = form.value.password;
    error = await this.userService.logging(name, password);
    if (error == 1) {
      alert("Nombre de usuario Incorrecto");
    } else if (error == 2) {
      alert("Contraseña Incorrecta");
    } else {
      this.router.navigate(["/home"]);
    }
  }
 
}
