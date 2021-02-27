import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {GameMove} from '../shared/interfaces/GameMove';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  hasStarted = false;
  isLocked = false;
  isTimeToSubmit = true;
  name = '';
  gameId = '';
  content = '';
  question = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  toggleLock(): void {
    this.isLocked = !this.isLocked;
  }

  submit(): void {
    const request: GameMove = {
      name: this.name,
      content: this.content
    };
    this.gameService.makeMove(this.gameId, request).subscribe();
  }

  updateGameState(): void {
    this.content = '';
    this.gameService.getGameById(this.gameId).subscribe(gameStates => {
      this.question = gameStates.filter(gameState => gameState.name === this.name)[0].question;
    });
  }
}
