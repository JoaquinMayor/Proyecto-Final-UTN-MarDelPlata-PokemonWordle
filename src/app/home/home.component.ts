import { Component, OnInit } from '@angular/core';
import { getUsers } from 'src/config/config';
import { UsuariosServices } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UsuariosServices) { }

  ngOnInit(): void {
    getUsers().then((users) => {
      this.userService.users = users;
      this.userService.validateLogin();
    });
  }
}
