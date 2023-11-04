import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  
  constructor(private userService:UsuariosServices){}


}
