export class Stats {
    private name: string;
    private hp: number;
    private atk: number;
    private specialAtk: number;
    private speed: number;
    private defense: number;
    private specialDef: number;
    private weight: number;
    private height: number;
    private stat1: string;
    private stat2: string;

    constructor(name: string, hp: number, atk: number, specialAtk: number, speed: number, defense: number, specialDef: number, weight: number, height: number, stat1: string, stat2: string) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.specialAtk = specialAtk;
        this.speed = speed;
        this.defense = defense;
        this.specialDef = specialDef;
        this.weight = weight;
        this.height = height;
        this.stat1 = stat1;
        this.stat2 = stat2;
    }

    get getName() {
        return this.name;
    }
    get getAtk() {
        return this.atk;
    }

    get getSpecialAtk() {
        return this.specialAtk;
    }

    get getSpeed() {
        return this.speed;
    }

    get getDefense() {
        return this.defense;
    }

    get getSpecialDef() {
        return this.specialDef;
    }

    get getHp() {
        return this.hp;
    }

    get getHeigth() {
        return this.height;
    }

    get getWeigth() {
        return this.weight;
    }

    get getType1() {
        return this.stat1;
    }

    get getType2() {
        return this.stat2;
    }

    setName(name: string) {
        this.name = name;
    }

    setHp(hp: number) {
        this.hp = hp;
    }

    setAtk(atk: number) {
        this.atk = atk;
    }

    setSpecialAtk(specialAtk: number) {
        this.specialAtk = specialAtk;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }

    setDefense(defense: number) {
        this.defense = defense;
    }

    setSpecialDef(specialDef: number) {
        this.specialDef = specialDef;
    }

    setWeight(weight: number) {
        this.weight = weight;
    }

    setHeight(height: number) {
        this.height = height;
    }

    setType1(stat1: string) {
        this.stat1 = stat1;
    }

    setType2(stat2: string) {
        this.stat2 = stat2;
    }
}