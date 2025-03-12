import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Define your routes here
export const routes: Routes = [
  { path: '', component: AppComponent }, // Default route (home page)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import RouterModule with the routes defined
  exports: [RouterModule], // Export RouterModule to use in app component
})
export class AppRoutingModule {}