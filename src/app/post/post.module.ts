import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list/list.component";
import { IonicModule } from "@ionic/angular";
import { DeleteComponent } from "./delete/delete.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewComponent } from "./new/new.component";
import { FilterComponent } from "./filter/filter.component";
import {FilterNamePipe} from "../pipe/filter-name.pipe";

@NgModule({
  declarations: [ListComponent, DeleteComponent, NewComponent, FilterComponent],
  exports: [
    ListComponent,
    DeleteComponent,
    NewComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    FilterNamePipe
  ]
})
export class PostModule { }
