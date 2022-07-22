import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  students: Student[] = [
    {
      name: 'radha',
      id: 1,
    },
    {
      name: 'mohan',
      id: 1,
    },
    {
      name: 'sohan',
      id: 1,
    },
  ];
}
