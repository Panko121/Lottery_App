import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawHistoryComponent } from './draw-history/draw-history.component';
import { HeaderComponent } from './header/header.component';
import { PlayComponent } from './play/play.component';
import { DrawNumbersService } from './services/draw-numbers.service';

@NgModule({
  declarations: [
    AppComponent,
    DrawHistoryComponent,
    HeaderComponent,
    PlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [DrawNumbersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
