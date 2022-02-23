import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoProductPageComponent } from './detailed-info-product-page/detailed-info-product-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainLayoytComponent } from './shared/components/main-layoyt/main-layoyt.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoytComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: MainPageComponent },
      { path: 'detailed/:id', component: DetailedInfoProductPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
