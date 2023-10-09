import { Component } from '@angular/core';
import { UsuariosServices } from '../services/users.service';
import { ImageService } from '../services/image.service';
import { Usuario } from '../models/user.model';

@Component({
  selector: 'app-user-system',
  templateUrl: './user-system.component.html',
  styleUrls: ['./user-system.component.scss']
})
export class UserSystemComponent {
  
  name:string = "";
  password:string = "";
  user:Usuario = this.usersService.client;
  viewPhoto:boolean = false;
  viewName:boolean = false;
  viewPassword:boolean = false;
  photos:string[]= this.photoService.images;
  


  constructor(private usersService:UsuariosServices, private photoService:ImageService){}

  showPhoto(){
    if(this.viewPhoto === true){
      this.viewPhoto = false;
    }else{
      this.viewPhoto = true;
    }
  }
  onPhotoSelected(photo: string) {
    this.user.setPhoto = photo;
    this.usersService.editUser(this.user);
  }

  validate(){
    let flag = false;

    if(this.usersService.client.getName != ""){
      flag = true;
    }

    return flag;
  }

  showName(){
    this.viewName = true
  }

  showPassword(){
    this.viewPassword = true
  }

  changeName(){
    this.user.setName=this.name;
    this.usersService.editUser(this.user);
  }

  changePassword(){
    this.user.setPassword=this.password;
    this.usersService.editUser(this.user);
  }
}
