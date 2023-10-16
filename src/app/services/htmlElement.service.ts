import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlElementService {
  private elementRefs: { [key: string]: ElementRef } = {};

  setElementRef(key: string, elementRef: ElementRef): void {
    this.elementRefs[key] = elementRef;
  }

  getElementRef(key: string): ElementRef{
    return this.elementRefs[key];
  }

  removeElementRef(key: string): void {
    delete this.elementRefs[key];
  }
}