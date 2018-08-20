import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";


const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: '**', component: DashboardComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });