import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Sentence} from '../shared/interfaces/Sentence';

@Component({
  selector: 'app-sentence-page',
  templateUrl: './sentence-page.component.html',
  styleUrls: ['./sentence-page.component.scss']
})
export class SentencePageComponent implements OnInit {
  id = 0;
  sentence: Sentence = {id: 0, content: ''};

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  getSentence(id: number): void {
    this.gameService.getSentenceById(id).subscribe(sentence => this.sentence = sentence);
  }
}
