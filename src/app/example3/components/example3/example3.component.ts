import { Component } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
})
export class Example3Component {
  buttonClicked() {
    alert('Hello world');
  }
}
