import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Cheeky {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
