import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sentence} from '../shared/interfaces/Sentence';
import {GameMove} from '../shared/interfaces/GameMove';
import {GameState} from '../shared/interfaces/GameState';

const API = 'https://kas-kur-kaip-kada.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getSentenceById(id: number): Observable<Sentence> {
    return this.http.get<Sentence>(`${API}/sentences/${id}`);
  }

  makeMove(gameId: string, request: GameMove): Observable<void> {
    return this.http.put<void>(`${API}/game/${gameId}`, request);
  }

  getGameById(gameId: string): Observable<GameState[]> {
    return this.http.get<GameState[]>(`${API}/game/${gameId}`);
  }
}
