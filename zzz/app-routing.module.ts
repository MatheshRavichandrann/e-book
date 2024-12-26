// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Import the components you want to route to

const routes: Routes = [
{ path: '', component: AppComponent },  // Default route (home page)
  // Add more routes here as your app grows
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configures routes for the app
  exports: [RouterModule],  // Export RouterModule to make it available to other modules
})
export class AppRoutingModule { }
