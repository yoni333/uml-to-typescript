import { Component, Input } from '@angular/core';
import { interfaceMethodUml, methodUml } from './class.type';

type wrapper = { show: boolean; edit: methodInterfaceEdit };
type methodInterfaceView = wrapper & { data: interfaceMethodUml };
type methodView = wrapper & { data: methodUml; edit: methodEdit };

export type methodInterfaceEdit = {
  name: boolean;
  arg: boolean;
  returnTs: boolean;
};
export type methodEdit = methodInterfaceEdit & {
  accessibility: boolean;
  text: boolean;
};

@Component({
  selector: 'interface-method',
  template: ` 

 
    <span>{{ methodView.data.name }} </span>
    <span> ( {{ methodView.data.arg }} ) </span>
    <span>:{{ methodView.data.returnTs }} </span>
  
 
`,
  styles: [`h1 { font-family: Lato; }`],
})
export class InterfaceMethodComponent {
  public methodView: methodInterfaceView;
  @Input() set method(method: interfaceMethodUml) {
    this.methodView = {
      data: method,
      show: true,
      edit: this.createEditMethod(),
    };
  }

  get method(): interfaceMethodUml {
    return this.methodView.data;
  }

  createEditMethod(): methodInterfaceEdit {
    return {
      name: false,
      arg: false,
      returnTs: false,
    };
  }
}

@Component({
  selector: 'method',
  template: ` 
  <b>
  <accessibility [prop]=methodView.data [isMEthod]=true></accessibility>
   <interface-method [method]="" ></interface-method>
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
  public interfaceMethod: interfaceMethodUml;
  @Input() set method(method: methodUml) {
    this.methodView = {
      data: method,
      show: true,
      edit: this.createEditMethod(),
    };
    this.interfaceMethod = {
      name: method.name,
      arg: method.arg,
      returnTs: method.returnTs,
    };
  }

  get method(): methodUml {
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
