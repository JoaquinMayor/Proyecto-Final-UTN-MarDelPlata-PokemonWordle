import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../../services/users.service';
import { Usuario } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin-user',
  templateUrl: './loggin-user.component.html',
  styleUrls: ['./loggin-user.component.css']
})
export class LogginUserComponent implements OnInit{
  
  name:string = "";
  password:string = "";
  log:boolean = false;

  constructor(private userService:UsuariosServices, private router:Router){}
  ngOnInit(): void {
    this.ifLogging()
  }
  
  get user(): Usuario {
    return this.userService.user;
  }
  
  logging(){
    this.userService.logging(this.name, this.password);
    this.router.navigate(["/home"]);
  }
  ifLogging(){
    if(this.userService.user.getId!=0){
      this.router.navigate(["/home"]);
    }
    
  }
}
