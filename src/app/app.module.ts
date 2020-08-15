import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PokeService } from './shared/services/poke-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    NgbTooltipModule,
  ],
  providers: [
    PokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
