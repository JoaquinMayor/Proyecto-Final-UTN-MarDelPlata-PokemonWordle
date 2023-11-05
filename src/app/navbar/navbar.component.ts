import { Component } from '@angular/core';
import { UsuariosServices } from '../services/users.service';
import { Usuario } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dropdownActive: boolean = false;
  name: string = "";
  password: string = "";

  constructor(private userService: UsuariosServices, private router: Router) { }

  get user(): Usuario {
    return this.userService.user;
  }

  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }

  prueba() {
    this.router.navigate(["user/logging"])
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(["/home"])
  }

  getRouter() {
    return this.router.url;
  }
}