import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { UsuariosServices } from '../../services/users.service';
import { Usuario } from '../../models/user.model';
import { PokemonApiServices } from '../../services/pokemonApi.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent{
  
  photos: string[] = [];
  

  selectedPhoto: string = "";
  view: boolean = false;

  constructor(private photoService:ImageService, private userService:UsuariosServices, private jsonpokemon:PokemonApiServices) {
    this.photos = this.photoService.getAllImageUrls();
    this.selectedPhoto = this.photoService.getImageUrl("pefil-base.png");
  }
 

  show(event:any) {
    event.preventDefault();
    this.view = !this.view;
  }

  onPhotoSelected(photo: string) {
    this.selectedPhoto = photo;
  }

  addUser(form:NgForm) {

    const name:string = form.value.name;
    const password:string = form.value.password;
    
    if (this.userService.validateName(name) == false) {
      
      if (!this.userService.validatePassword(password)) {
        let user = new Usuario(this.userService.users.length + 1, name, password, this.selectedPhoto);
        this.userService.chargeUsuario(user);
      } else {
        alert("Contraseña muy corta");
      }
    } else {
      alert("Nombre de usuario existente");
      
    }
    console.log(this.userService.users);
  }

  mostrarJson(){
    this.jsonpokemon.listaSpeciesPokemon("3");
    
  }
}
