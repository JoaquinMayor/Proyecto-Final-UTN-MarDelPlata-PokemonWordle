export class Pokemon {
    private id: number;
    private name: string;
    private generation: string;
    private frontSprite: string;
    private backSprite: string;
    private front_shiny: string;
    private back_shiny: string;
    private eggGroup: string;
    private description: string;
    private type1: string;
    private type2: string;
    private atk: number;
    private specialAtk: number;
    private speed: number;
    private defense: number;
    private specialDef: number;
    private hp: number;
    private heigth: number;
    private weight: number;

    constructor(id: number, name: string, generation: string, frontSprite: string, backSprite: string, front_shiny: string, back_shiny: string, eggGroup: string, description: string, type1: string, type2: string, atk: number, specialAtk: number, speed: number, defense: number, specialDef: number, hp: number, heigth: number, weigth: number) {
        this.id = id;
        this.name = name;
        this.generation = generation;
        this.frontSprite = frontSprite;
        this.backSprite = backSprite;
        this.front_shiny = front_shiny;
        this.back_shiny = back_shiny;
        this.eggGroup = eggGroup;
        this.description = description;
        this.type1 = type1;
        this.type2 = type2;
        this.atk = atk;
        this.specialAtk = specialAtk;
        this.speed = speed;
        this.defense = defense;
        this.specialDef = specialDef;
        this.hp = hp;
        this.heigth = heigth;
        this.weight = weigth;
    }

    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getGeneration() {
        return this.generation;
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
        return this.heigth;
    }

    get getWeigth() {
        return this.weight;
    }

    get getFrontSprite() {
        return this.frontSprite;
    }

    get getBackSprite() {
        return this.backSprite;
    }

    get getFrontShiny() {
        return this.front_shiny;
    }

    get getBackShiny() {
        return this.back_shiny;
    }

    get getEggGroup() {
        return this.eggGroup;
    }

    get getDescription() {
        return this.description;
    }

    get getType1() {
        return this.type1;
    }

    get getType2() {
        return this.type2;
    }
}