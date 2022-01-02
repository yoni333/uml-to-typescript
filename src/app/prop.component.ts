import { Component, Input } from '@angular/core';
import { prop } from './class.type';
import { Eprop } from './class.type';

type propEdit = {
  name: boolean;
  accessibility: boolean;
  type: boolean;
  value: boolean;
};
type propView = { data: prop; show: boolean; edit: propEdit };
export type editMethod = {
  name: boolean;
  accessibility: boolean;
  arg: boolean;
  returnTs: boolean;
  text: boolean;
};

@Component({
  selector: 'prop',
  template: ` 

  <ng-container *ngIf="!isInterface">
    <accessibility [prop]=propView.data [isMEthod]=false ></accessibility>
  </ng-container>
  <b>{{ propView.data.name }} </b>
  <span>{{ propView.data.type }} </span>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class PropComponent {
  public propView: propView;
  @Input() isInterface: boolean;
  @Input() set prop(prop: prop) {
    this.propView = { data: prop, show: true, edit: this.createEditProp() };
  }

  get prop(): prop {
    return this.propView.data;
  }

  createEditProp(): propEdit {
    return { name: false, accessibility: false, type: false, value: false };
  }
}

@Component({
  selector: 'props',
  template: ` 
  <div *ngFor="let prop of props">
        <prop *ngIf="prop.accessibility===Eprop.Private" [prop]="prop"  [isInterface]=isInterface></prop>
      </div>

      <div *ngFor="let prop of props">
        <prop *ngIf="prop.accessibility===Eprop.Public" [prop]="prop"  [isInterface]=isInterface></prop>
      </div>

  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class PropsComponent {
  Eprop = Eprop;
  @Input() props: prop[];
  @Input() isInterface: boolean;
}
