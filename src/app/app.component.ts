import { Component, VERSION } from '@angular/core';
import { classUml, Eprop } from './class.type';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'UML to TS';

  public classUml: classUml[] = [
    {
      name: 'City',
      props: [
        { name: 'data', accessibility: Eprop.private, ts: 'METADATA' },
        { name: 'name', accessibility: Eprop.private, ts: 'string' },

        { name: 'level', accessibility: Eprop.private, ts: 'integer' },
      ],
      methods: [
        {
          name: 'upgrade',
          accessibility: Eprop.private,
          arg: 'x integer',
          returnTs: 'string',
          text: 'return x*x',
        },
      ],
    },
    {
      name: 'Barracks',
      props: [
        { name: 'data', accessibility: Eprop.private, ts: 'METADATA' },
        { name: 'name', accessibility: Eprop.private, ts: 'string' },

        { name: 'level', accessibility: Eprop.private, ts: 'integer' },
      ],
      methods: [
        {
          name: 'upgrade',
          accessibility: Eprop.private,
          arg: 'x integer',
          returnTs: 'string',
          text: 'return x*x',
        },
        {
          name: 'build',
          accessibility: Eprop.public,
          arg: 'x integer',
          returnTs: 'string',
          text: 'return x+x+2',
        },
      ],
    },
  ];
}
