import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';
import { UsuariosServices } from '../services/users.service';
import { Usuario } from '../models/user.model';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  name: string = "";
  password: string = "";
  image: string = "";
  photos: string[] = [];

  selectedPhoto: string = "";
  view: boolean = false;

  constructor(private photoService:ImageService, private userService:UsuariosServices) {
    this.photos = this.photoService.getAllImageUrls();
  }

  show() {
    this.view = !this.view;
  }

  onPhotoSelected(photo: string) {
    this.selectedPhoto = photo;
  }

  addUser() {
    console.log(this.name + " hola");
    if (!this.userService.validateName(this.name)) {
      if (!this.userService.validatePassword(this.password)) {
        let user = new Usuario(this.userService.users.length + 1, this.name, this.password, this.selectedPhoto);
        this.userService.chargeUsuario(user);
      } else {
        alert("Contraseña muy corta");
      }
    } else {
      alert("Nombre de usuario existente");
    }
    console.log(this.userService.users);
  }
}
