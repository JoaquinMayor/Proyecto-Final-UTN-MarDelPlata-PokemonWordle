import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../services/users.service';
import { getUsers } from 'src/config/config';

@Component({
  selector: 'app-hard-wordle',
  templateUrl: './hard-wordle.component.html',
  styleUrls: ['./hard-wordle.component.scss']
})
export class HardWordleComponent implements OnInit{
  generation: string = "";
  show: boolean = false;

  constructor(private userService: UsuariosServices) { }

  ngOnInit(): void {
    getUsers().then((users)=>{
      this.userService.users = users;
      this.userService.validateLogin();
    });
  }

  generationSelected(generation: any) {
    this.generation = generation;
  }

  showGame() {
    this.show = true;
  }

}
