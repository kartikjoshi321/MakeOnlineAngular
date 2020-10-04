import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{path:'todo',loadChildren: './todo/todo.module#TodoModule'}
  {path:'todo',loadChildren: ()=> import('./todo/todo.module').then(m=>m.TodoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
