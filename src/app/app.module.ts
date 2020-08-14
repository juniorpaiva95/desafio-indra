import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokeService } from './shared/services/poke-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeListComponent } from './pokemon/poke-list/poke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    PokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
