import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(private userService:UsuariosServices){}
  ngOnInit(): void {
    this.userService.loadUsuario
  }

}
