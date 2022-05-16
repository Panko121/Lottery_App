import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawHistoryComponent } from './draw-history/draw-history.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {path: 'play', component: PlayComponent},
  {path: 'draw-history', component: DrawHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
