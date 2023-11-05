import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ImageService {
    imageNames: string[] = [
        "beectribeel.png",
        "charmander.png",
        "groudon.png",
        "lucario.png",
        "mew.png",
        "mewtwo.png",
        "pefil-base.png",
        "pikachu.png",
        "ratata.png",
        "raykuaza.png",
        "snorlax.png",
        "wippinbel.png",
        "charizard.png",
        "charizardX.png",
        "magikarp.png",
        "shaymin.png",
        "Shuffle545.png",
        "thundurus.png",
        "chimchar.png",
        "infernape.png"
    ];

    getImageUrl(imageName: string): string {
        return `../../assets/photos/${imageName}`;
    }

    getAllImageUrls(): string[] {
        return this.imageNames.map(imageName => this.getImageUrl(imageName));
    }
}