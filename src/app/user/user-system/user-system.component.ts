import { Component } from '@angular/core';
import { UsuariosServices } from '../../services/users.service';
import { ImageService } from '../../services/image.service';
import { Usuario } from '../../models/user.model';

@Component({
  selector: 'app-user-system',
  templateUrl: './user-system.component.html',
  styleUrls: ['./user-system.component.scss']
})
export class UserSystemComponent {

  name: string = "";
  password: string = "";
  viewPhoto: boolean = false;
  viewName: boolean = false;
  viewPassword: boolean = false;
  photos: string[] = [];

  constructor(private userService: UsuariosServices, private photoService: ImageService) {
    this.photos = this.photoService.getAllImageUrls();
  }

  get user(): Usuario {
    return this.userService.user;
  }

  showPhoto() {
    this.viewPhoto = !this.viewPhoto;
  }

  onPhotoSelected(photo: string) {
    this.user.setPhoto(photo);
    this.userService.editUser(this.user);
  }

  validate() {
    let flag = false;

    if (this.userService.user.getName != "") {
      flag = true;
    }

    return flag;
  }

  showName() {
    if(this.viewName===false){
      this.viewName = true;
    }else{
      this.viewName = false;
    }
    
  }

  showPassword() {

    if(this.viewPassword == false){
      this.viewPassword = true;
    }else{
      this.viewPassword = false;
    }
    
  }

  changeName() {
    if(this.userService.findUser(this.name)===false){
      this.user.setName(this.name);
      this.userService.editUser(this.user);
    }else{
      alert("Nombre ya en uso");
    }
    
  }

  changePassword() {
    if(!this.userService.validatePassword(this.password)){
      this.user.setPassword(this.password);
      this.userService.editUser(this.user);
    }else{
      alert("Contraseña muy corta");
    }
    
  }

  ifLogging() {
    this.userService.ifLogging();
  }
}