import { Component, Input } from '@angular/core';
import { methodUml, prop } from './class.type';

@Component({
  selector: 'accessibility',
  template: ` 
  <ng-container *ngIf="accessibility; else propEditType">
    <span  >
    
    <select [(ngModel)]="prop.accessibility" (ngModelChange)="log($event)" (mouseleave)="accessibility = !accessibility">
      <option value="{{prop.accessibility}}">{{prop.accessibility}}</option>
      <hr>
        <option value="private">private</option>
        <option value="public">public</option>
        <ng-container *ngIf="!isMEthod">
          <option value="privateReadOnly">private ReadOnly</option>
          <option value="publicReadOnly">public ReadOnly</option>
        </ng-container>
    </select>
    </span>
  </ng-container>
  <ng-template #propEditType >
  
      <span (click)="accessibility = !accessibility" class="accessibility-color">{{ prop.accessibility }} </span>
  </ng-template>
  `,
  styles: [`.accessibility-color {color:blue}`],
})
export class AccessibilityComponent {
  @Input() prop: prop | methodUml;
  @Input() isMEthod: boolean;
  accessibility: boolean = false;
  log(e) {
    console.log(e, this.prop);
  }
}
