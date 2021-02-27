import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamePageComponent} from './game-page/game-page.component';
import {SentencePageComponent} from './sentence-page/sentence-page.component';

const routes: Routes = [
  { path: 'game', component: GamePageComponent },
  { path: 'sentences', component: SentencePageComponent },
  { path: '', redirectTo: '/game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
