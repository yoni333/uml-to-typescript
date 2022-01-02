import { Component, VERSION } from '@angular/core';
import { classUml, Eclass, Eprop } from './class.type';

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
      type:Eclass.Regular,
      props: [
        { name: 'data', accessibility: Eprop.Private, type: 'METADATA' },
        { name: 'name', accessibility: Eprop.Private, type: 'string' },

        { name: 'level', accessibility: Eprop.Private, type: 'integer' },
      ],
      methods: [
        {
          name: 'upgrade',
          accessibility: Eprop.Private,
          arg: 'x integer',
          returnTs: 'string',
          text: 'return x*x',
        },
      ],
    },
    {
      name: 'Barracks',
      type:Eclass.Regular,
      props: [
        { name: 'data', accessibility: Eprop.Private, type: 'METADATA' },
        { name: 'name', accessibility: Eprop.Private, type: 'string' },

        { name: 'level', accessibility: Eprop.Private, type: 'integer' },
      ],
      methods: [
        {
          name: 'upgrade',
          accessibility: Eprop.Private,
          arg: 'x integer',
          returnTs: 'string',
          text: 'return x*x',
        },
        {
          name: 'build',
          accessibility: Eprop.Public,
          arg: 'x integer',
          returnTs: 'string',
          text: 'return x+x+2',
        },
      ],
    },
  ];

  public interfaceUml: classUml[] = []
}
