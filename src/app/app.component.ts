import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public classUml = [
    {
      name: 'City',
      props: [
        { name: 'data', type: 'private', ts: 'METADATA' },
        { name: 'name', type: 'private', ts: 'string' },

        { name: 'level', type: 'private', ts: 'integer' },

      ],
      methods:[
        { name: 'upgrade', type: 'private', ts: 'integer' ,returnTs:"string"},
      ]
    },
  ];
}
