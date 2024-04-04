import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookATableComponent } from './book-a-table/book-a-table.component';

const routes: Routes = [
{path:"booktable",component:BookATableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
