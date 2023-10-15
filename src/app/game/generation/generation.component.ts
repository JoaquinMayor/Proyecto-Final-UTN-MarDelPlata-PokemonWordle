import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent {
  @Output() generationSelected = new EventEmitter<String>();
  generation: string = '1';

  choiceGeneration(event: any) {
    this.generation = event.target.value;
    this.generationSelected.emit(this.generation);
  }

}
