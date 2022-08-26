import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-split-child';

  userForm!: FormGroup

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      basicInfo: this._formBuilder.group({
        firstName: [],
        lastName: [],
        email: [],
        age: []
      }),
      address: this._formBuilder.group({
        street: [],
        number: [],
        postal: [],
        city: []
      })
    });
  }
}
