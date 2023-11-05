import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent {
  @Output() generationSelected = new EventEmitter<String>();
  generation: string = "0";
  constructor(private router: Router) { }

  ngOnInit() {
    this.generation = "0";
    this.generationSelected.emit(this.generation);
  }

  async choiceGeneration(event: any) {
    this.generation = event.target.value;
    this.generationSelected.emit(this.generation);
  }

  getRouter() {
    return this.router.url;
  }
}
