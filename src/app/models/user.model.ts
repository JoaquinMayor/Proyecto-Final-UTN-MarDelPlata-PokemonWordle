export class Usuario {
    private id: string;
    private name: string;
    private password: string;
    private imagenScore: number;
    private tryImage: number
    private hardScrore: number;
    private tryHard: number;
    private easyScore: number;
    private tryEasy: number;
    private maxScoreImage: number;
    private maxScoreEasy: number;
    private maxScoreHard: number;
    private photo: string;

    constructor(id: string, name: string, password: string, photo: string) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.photo = photo;
        this.imagenScore = 0;
        this.easyScore = 0;
        this.hardScrore = 0
        this.tryEasy = 0;
        this.tryHard = 0;
        this.tryImage = 0;
        this.maxScoreEasy = 0;
        this.maxScoreHard = 0;
        this.maxScoreImage = 0;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getPassword() {
        return this.password;
    }

    get getPhoto() {
        return this.photo;
    }


    get getImageScore() {
        return this.imagenScore;
    }

    get getHardScore() {
        return this.hardScrore;
    }

    get getEasyScore() {
        return this.easyScore;
    }

    get getTryImage() {
        return this.tryImage;
    }

    get getTryEasy() {
        return this.tryEasy;
    }

    get getTryHard() {
        return this.tryHard;
    }

    get getMaxScoreImage() {
        return this.maxScoreImage;
    }

    get getMaxScoreEasy() {
        return this.maxScoreEasy;
    }

    get getMaxScoreHard() {
        return this.maxScoreHard;
    }

    setId(id: string) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setPhoto(photo: string) {
        this.photo = photo;
    }

    setImageScore(imageScore: number) {
        this.imagenScore = imageScore;
    }

    setHardScore(hardScore: number) {
        this.hardScrore = hardScore;
    }

    setEasyScore(easyScore: number) {
        this.easyScore = easyScore;
    }

    setTryImage(tryImage: number) {
        this.tryImage = tryImage;
    }

    setTryEasy(tryEasy: number) {
        this.tryEasy = tryEasy;
    }

    setTryHard(tryHard: number) {
        this.tryHard = tryHard;
    }

    setMaxScoreImage(maxScoreImage: number) {
        this.maxScoreImage = maxScoreImage;
    }

    setMaxScoreEasy(maxScoreEasy: number) {
        this.maxScoreEasy = maxScoreEasy
    }

    setMaxScorehard(maxScoreHard: number) {
        this.maxScoreHard = maxScoreHard;
    }
}