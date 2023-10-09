import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';
import { UsuariosServices } from '../services/users.service';
import { Usuario } from '../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent{
  name:string = "";
  password:string = "";
  image:string = "";
 photos:string[] = this.photoService.images;
 selectedPhoto:string ="";
 view:boolean = false;

  constructor(private photoService:ImageService,private userService:UsuariosServices){}
  

  show(){
    if(this.view === true){
      this.view = false;
    }else{
      this.view = true;
    }
  }
  onPhotoSelected(photo: string) {
    this.selectedPhoto = photo;
  }


  addUser(){
    if(this.userService.validateName(this.name) === false){

      if(this.userService.validatePassword(this.password)===false){
        
        let user = new Usuario(this.userService.users.length+1, this.name,this.password,this.selectedPhoto);
        this.userService.chargeUsuario(user);

      }else{
        alert("Contraseña muy Corta");
      }
     
    }else{
      alert("Nombre de Usuario Existente");
    }
    console.log(this.userService.users);
  }

}
