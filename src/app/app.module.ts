import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListadoComponent } from './listado/listado.component';
import { AComponent } from './a/a.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListadoComponent, AComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
