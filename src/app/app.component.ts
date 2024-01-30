import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Goodbye {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
