import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true })], // <-- debugging purposes only)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    PageNotFoundComponent
];
