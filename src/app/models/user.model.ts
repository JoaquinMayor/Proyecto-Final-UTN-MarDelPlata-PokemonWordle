
export class Usuario{
    private id:number
    private name:string;
    private password:string;
    private imagenScore:number;
    private hardScrore:number;
    private easyScore:number;
    private photo:string;
    private logging:boolean;

    constructor(id:number, name:string, password:string, photo:string){
        this.id  =id;
        this.name = name;
        this.password = password;
        this.photo = photo;
        this.imagenScore = 0;
        this.easyScore = 0;
        this.hardScrore = 0
        this.logging = false;
    }

    get getId(){
        return this.id;
    }
    
    get getName(){
        return this.name;
    }

    get getPassword(){
        return this.password;
    }

    get getPhoto(){
        return this.photo;
    }

    get getLogging(){
        return this.logging;
    }

    get getImageScore(){
        return this.imagenScore;
    }

    get getHardScore(){
        return this.hardScrore;
    }

    get getEasyScore(){
        return this.easyScore;
    }

    set setName(name:string){
        this.name = name;
    }

    set setPassword(password:string){
        this.password = password;
    }

    set setPhoto(photo:string){
        this.photo = photo;
    }

    set setLogging(logging:boolean){
        this.logging= logging;
    }

    set setImageScore(imageScore:number){
        this.imagenScore = imageScore;
    }

    set setHardScore(hardScore:number){
        this.hardScrore = hardScore;
    }

    set setEasyScore(easyScore:number){
        this.easyScore = easyScore;
    }
}