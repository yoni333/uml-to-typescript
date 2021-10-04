import { Component, Input } from '@angular/core';
import { method } from './class.type';

type methodView = { data: method; show: boolean; edit: methodEdit };

export type methodEdit = {
  name: boolean;
  accessibility: boolean;
  arg: boolean;
  returnTs: boolean;
  text: boolean;
};

@Component({
  selector: 'method',
  template: ` 
  <b>
  <accessibility [prop]=methodView.data></accessibility>
    <span>{{ methodView.data.name }} </span>
    <span> ( {{ methodView.data.arg }} ) </span>
    <span>:{{ methodView.data.returnTs }} </span>
    <span (click)="methodView.edit.text= !methodView.edit.text" class="open">&#123; + &#125;</span>
  </b>
  <div *ngIf="methodView.edit.text">
    <div>&#123;</div>
    <code>{{ methodView.data.text }}</code>
    <div>&#125;</div>
  </div>
`,
  styles: [`h1 { font-family: Lato; }`],
})
export class MethodComponent {
  public methodView: methodView;
  @Input() set method(method: method) {
    this.methodView = {
      data: method,
      show: true,
      edit: this.createEditMethod(),
    };
  }

  get method(): method {
    return this.methodView.data;
  }

  createEditMethod(): methodEdit {
    return {
      name: false,
      accessibility: false,
      arg: false,
      returnTs: false,
      text: false,
    };
  }
}
