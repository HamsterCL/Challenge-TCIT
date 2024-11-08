import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent{

  public userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(10)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]),
  });

  constructor() { }

}
