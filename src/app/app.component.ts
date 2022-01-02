import { Component, VERSION } from '@angular/core';
import { classUml, Eclass, Eprop, interfaceUml } from './class.type';

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
      type: Eclass.Regular,
      props: [
        { name: 'data', accessibility: Eprop.Private, type: 'METADATA' },
        { name: 'name', accessibility: Eprop.Private, type: 'string' },

        { name: 'level', accessibility: Eprop.Private, type: 'integer' },
        { name: 'buildings', accessibility: Eprop.Private, type: 'IBuilding' },
      ],
      methods: [
        {
          name: 'upgrade',
          accessibility: Eprop.Private,
          arg: '',
          returnTs: 'boolean',
          text: 'upgradeCost();return true',
        },
        {
          name: 'upgradeCost',
          accessibility: Eprop.Private,
          arg: 'x integer',
          returnTs: 'integer',
          text: 'return x*x',
        },
      ],
    },
    {
      name: 'Barracks',
      type: Eclass.Regular,
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

  public interfacesUml: interfaceUml[] = [
    {
      name: 'IBuilding',
      props: [
        { name: 'data', accessibility: Eprop.Private, type: 'METADATA' },
        { name: 'name', accessibility: Eprop.Private, type: 'string' },

        { name: 'level', accessibility: Eprop.Private, type: 'integer' },
        { name: 'cost', accessibility: Eprop.Private, type: 'IResource[]' },
      ],
      methods: [
        {
          name: 'upgrade',
          arg: 'x integer',
          returnTs: 'string',
        },
        {
          name: 'build',
          arg: 'x integer',
          returnTs: 'string',
        },
      ],
    },
    {
      name: 'IResource',
      props: [
        { name: 'name', accessibility: Eprop.Private, type: 'string' },
        { name: 'amount', accessibility: Eprop.Private, type: 'string' },
      ],
      methods: [
        {
          name: 'add',
          arg: 'x integer',
          returnTs: 'integer',
        },
        {
          name: 'sub',
          arg: 'x integer',
          returnTs: 'integer',
        },
      ],
    },
  ];
}
