import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myGroup = new FormGroup({
    title: new FormControl('lalalaal'),
  });

  title = 'test';
  person = {
    name: 'John',
    surname: 'Smith',
  };

  test: { foo?: { bar: 3 } } | null = null;

  constructor(private service: MyService) {
    console.log(this.service);
  }
}

@Injectable({ providedIn: 'root' })
export class MyService {
  static MY_URL_SCHEME = 'my app://';
  static MY_URL_SCHEME_LENGTH = MyService.MY_URL_SCHEME.length;
}
