import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../../services/users.service';
import { Usuario } from '../../models/user.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CryptoService } from 'src/app/services/crypto.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-loggin-user',
  templateUrl: './loggin-user.component.html',
  styleUrls: ['./loggin-user.component.scss']
})
export class LogginUserComponent implements OnInit {
  
  log: boolean = false;

  constructor(private userService: UsuariosServices, private router: Router, private cryptoService:CryptoService, private dataService:DataService) { }
  ngOnInit(): void {
    this.dataService.chargeUsers().subscribe(
      (users:Usuario[]) => {
        this.userService.users = users;
      })
    
    this.ifLogging()
  }

  get user(): Usuario {
    return this.userService.user;
  }

  async logging(form:NgForm) {
    let error:number = 0
    const name:string =  form.value.name;
    const password:string = form.value.password;
    console.log(this.userService.users);
    error = await this.userService.logging(name,password);
    if(error==1){
      alert("Nombre de usuario Incorrecto");
    }else if(error == 2){
      alert("Contraseña Incorrecta");
    }else{
      this.router.navigate(["/home"]);
    }
  }
  ifLogging() {
    this.userService.ifLogging();
  }
}
