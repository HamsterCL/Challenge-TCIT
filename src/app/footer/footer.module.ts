import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {IonicModule} from "@ionic/angular";
import {PostModule} from "../post/post.module";
import {NewComponent} from "../post/new/new.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PostModule,
    FormsModule
  ]
})
export class FooterModule { }
