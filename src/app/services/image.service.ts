import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ImageService {
    imageNames: string[] = [
        "beectribeel.png",
        "charmander.png",
        "groudon.jpg",
        "lucario.png",
        "mew.png",
        "mewtwo.png",
        "pefil-base.png",
        "pikachu.png",
        "pokebal.jpeg",
        "ratata.jpg",
        "raykuaza.jpg",
        "snorlax.jpg",
        "wippinbel.png"
    ];

    getImageUrl(imageName: string): string {
        return '../../assets/photos/${imageName}';
    }

    getAllImageUrls(): string[] {
        return this.imageNames.map(imageName => this.getImageUrl(imageName));
    }
}