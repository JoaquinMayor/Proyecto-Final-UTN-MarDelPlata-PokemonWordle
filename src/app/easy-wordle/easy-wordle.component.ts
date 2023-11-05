import { Component } from '@angular/core';
import { UsuariosServices } from '../services/users.service';

@Component({
  selector: 'app-easy-wordle',
  templateUrl: './easy-wordle.component.html',
  styleUrls: ['./easy-wordle.component.scss']
})
export class EasyWordleComponent {
  generation: string = "";
  show: boolean = false;

  constructor(private userService: UsuariosServices) { }

  generationSelected(generation: any) {
    this.generation = generation;
  }

  showGame() {
    this.show = true;
  }

  ifLogging() {
    this.userService.ifLogging();
  }
}
