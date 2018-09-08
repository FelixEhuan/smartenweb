import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConsumoComponent } from './pages/consumo/consumo.component';
import { GeneradoComponent } from './pages/generado/generado.component';
import { LoginComponent } from './pages/login/login.component';
import { AhorroComponent } from './pages/ahorro/ahorro.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { SoporteComponent } from './pages/soporte/soporte.component';

const APP_ROUTES: Routes = [
  { path: 'Inicio', component: HomeComponent },
  { path: 'Consumo', component: ConsumoComponent },
  { path: 'Generado', component: ConsumoComponent },
  { path: 'Ahorro', component: AhorroComponent },
  { path: 'Graficas', component: GraficasComponent },
  { path: 'Soporte', component: SoporteComponent },
  { path: 'Login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
