import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as PostActions from "../state/action/post.action";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent {
  public isAlertOpen: boolean = false;
  public isAlertOKOpen: boolean = false;
  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(10)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]),
  });
  public alertButtons = [
    {
      text: 'Aceptar',
      role: 'confirm',
      handler: () => {
        console.info('confirm');
      },
    }
  ];

  constructor(private store: Store) {
    this.userForm.reset();
  }

  onSavePost(): void {
    if(this.userForm.valid) {
      this.isAlertOpen = false;
      const newPost: any = {
        name: this.userForm.get('name')?.value,
        description: this.userForm.get('description')?.value,
      };
      this.store.dispatch(PostActions.addPost({ post: newPost }));
      this.isAlertOKOpen = true;
      this.userForm.reset();
    }
    else {
      this.isAlertOpen = true;
      this.isAlertOKOpen = false;
    }
  }

}
