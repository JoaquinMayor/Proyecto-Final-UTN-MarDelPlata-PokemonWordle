import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';
import { UsuariosServices } from 'src/app/services/users.service';
import { getUsers } from 'src/config/config';

@Component({
  selector: 'app-ranking-of-scores',
  templateUrl: './ranking-of-scores.component.html',
  styleUrls: ['./ranking-of-scores.component.scss']
})
export class RankingOfScoresComponent implements OnInit {
  ranking: Usuario[] = [];
  scores: number[] = [];

  constructor(private userService: UsuariosServices) { }
  ngOnInit(): void { 

    getUsers().then((users)=>{
      this.userService.users = users;
      this.userService.validateLogin();
      this.ranking = this.userService.users.sort((a, b) => b.getMaxScoreEasy - a.getMaxScoreEasy);
      for (const user of this.ranking) {
       this.scores.push(user.getMaxScoreEasy);
      }
    });
  }

  changeTable(opcion: number) {
    this.scores.splice(0, this.scores.length);
    if (opcion == 1) {
      this.ranking = this.userService.users.sort((a, b) => b.getMaxScoreEasy - a.getMaxScoreEasy);
      for (const user of this.ranking) {
        this.scores.push(user.getMaxScoreEasy);
      }
    } else if (opcion == 2) {
      this.ranking = this.userService.users.sort((a, b) => b.getMaxScoreHard - a.getMaxScoreHard);
      for (const user of this.ranking) {
        this.scores.push(user.getMaxScoreHard);
      }
    } else {
      this.ranking = this.userService.users.sort((a, b) => b.getMaxScoreImage - a.getMaxScoreImage);
      for (const user of this.ranking) {
        this.scores.push(user.getMaxScoreImage);
      }
    }
  }
}
