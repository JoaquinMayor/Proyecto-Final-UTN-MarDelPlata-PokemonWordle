import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { UsuariosServices } from '../../services/users.service';
import { Usuario } from '../../models/user.model';
import { PokemonApiServices } from '../../services/pokemonApi.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { getUsers } from "../../../config/config"
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  photos: string[] = [];
  selectedPhoto: string = "";
  view: boolean = false;

  constructor(private photoService: ImageService, private userService: UsuariosServices, private jsonpokemon: PokemonApiServices, private router: Router, private cryptoService: CryptoService) {
    this.photos = this.photoService.getAllImageUrls();
    this.selectedPhoto = this.photoService.getImageUrl("pefil-base.png");
  }
 

  show(event: any) {
    event.preventDefault();
    this.view = !this.view;
  }

  onPhotoSelected(photo: string) {
    this.selectedPhoto = photo;
  }

  async addUser(form: NgForm) {
    
    const name: string = form.value.name;
    const password: string = form.value.password;
    if (this.userService.validateName(name) == false) {
      if (!this.userService.validatePassword(password)) {
        const crypt = await this.cryptoService.generarHashPassword(password);
        let user = new Usuario(crypto.randomUUID(), name, crypt, this.selectedPhoto);
        this.userService.chargeUsuario(user);
        this.router.navigate(["/home"]);
      } else {
        alert("Contraseña muy corta");
      }
    } else {
      alert("Nombre muy corto o nombre de usuario existente");
    }
  }


  mostrarJson() {
    this.jsonpokemon.listaSpeciesPokemon("3");
  }
}
