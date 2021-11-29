import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CONCEITOS_ROUTES } from "./conceitos";

import { HomeComponent } from "./introducao";


export const app_routing: Routes = [
    {
        path: '',
        component:HomeComponent,
        pathMatch: 'full'
    },
   ...CONCEITOS_ROUTES
];


@NgModule({
    imports: [
        RouterModule.forRoot(app_routing)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }