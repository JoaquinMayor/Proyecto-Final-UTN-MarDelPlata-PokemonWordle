import { Usuario } from "./usuario.model";


export class UsuariosServices{
    usuarios:Usuario[] = [];

    cargarUsuario(usuario:Usuario){
        this.usuarios.push(usuario);
    }

    buscarUsuario(name:string, password:string){
        let usuarioExistente:Usuario = new Usuario(0,"","","");
        
        if(this.usuarios.length!=0){
            let flag = false;
            for(let i = 0; i<this.usuarios.length && flag ==false;i++){
               let usuario = this.usuarios[i];
               if(usuario.getName === name){
                   if(usuario.getPassword===password){
                        usuarioExistente = usuario;
                        usuarioExistente.setLogging = true;
                        flag = true;
                   } else{
                        alert("Contraseña Incorrecta");
                   }
               }
            }
        }
        return usuarioExistente;
    }

    modificarUsuario(usuario:Usuario){
        let flag = false;
        if(usuario && this.usuarios.length !=0){
            for(let i = 0; i<this.usuarios.length && flag ==false;i++){
                if(usuario.getId == this.usuarios[i].getId){
                    flag = true;
                    this.usuarios[i] = usuario;
                }
            }
        }
    }
}