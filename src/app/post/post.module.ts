import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list/list.component";
import { IonicModule } from "@ionic/angular";
import { DeleteComponent } from "./delete/delete.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewComponent } from "./new/new.component";

@NgModule({
  declarations: [ListComponent, DeleteComponent, NewComponent],
  exports: [
    ListComponent,
    DeleteComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostModule { }
