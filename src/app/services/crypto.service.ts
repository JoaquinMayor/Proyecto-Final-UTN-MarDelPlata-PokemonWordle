import { Injectable } from "@angular/core";
import * as bcrypt from 'bcryptjs';

@Injectable({
    providedIn: 'root'
})

export class CryptoService{
    async generarHashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
      }

      async compararPassword(password: string, hash: string): Promise<boolean> {
        const match = await bcrypt.compare(password, hash);
        console.log(match);
        return match;
      }
}



