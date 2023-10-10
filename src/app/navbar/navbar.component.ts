import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dropdownActive: boolean = false;

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }
}