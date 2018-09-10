import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ConsumoComponent } from './pages/consumo/consumo.component';
import { GeneradoComponent } from './pages/generado/generado.component';
import { AppRoutingModule } from './app-routing.module';
import { AhorroComponent } from './pages/ahorro/ahorro.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { ChartsModule } from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ConsumoComponent,
    GeneradoComponent,
    AhorroComponent,
    GraficasComponent,
    SoporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
