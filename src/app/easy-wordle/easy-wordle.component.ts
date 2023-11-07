import { Component, OnInit } from '@angular/core';
import { UsuariosServices } from '../services/users.service';
import { getUsers } from 'src/config/config';

@Component({
  selector: 'app-easy-wordle',
  templateUrl: './easy-wordle.component.html',
  styleUrls: ['./easy-wordle.component.scss']
})
export class EasyWordleComponent implements OnInit{
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
