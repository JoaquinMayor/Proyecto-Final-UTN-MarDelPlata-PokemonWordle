import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../../services/users.service';
import { Usuario } from '../../models/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loggin-user',
  templateUrl: './loggin-user.component.html',
  styleUrls: ['./loggin-user.component.scss']
})
export class LogginUserComponent implements OnInit {
  
  log: boolean = false;

  constructor(private userService: UsuariosServices, private router: Router) { }
  ngOnInit(): void {
    this.ifLogging()
  }

  get user(): Usuario {
    return this.userService.user;
  }

  logging(form:NgForm) {
    const name:string =  form.value.name;
    const password:string = form.value.password;
    this.userService.logging(name,password);
    this.router.navigate(["/home"]);
  }
  ifLogging() {
    this.userService.ifLogging();
  }
}
