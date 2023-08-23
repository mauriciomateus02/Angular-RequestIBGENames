import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDetailsComponent } from './pages/table-details/table-details.component';
import { SearchNamesComponent } from './pages/search-names/search-names.component';

const routes: Routes = [
  {path: 'table',component: TableDetailsComponent},
  {path: '', component: SearchNamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
