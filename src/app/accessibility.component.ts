import { Component, Input } from '@angular/core';
import { method, prop } from './class.type';

@Component({
  selector: 'accessibility',
  template: ` 
  <ng-container *ngIf="accessibility; else propEditType">
    <span  >
    <select [(ngModel)]="prop.accessibility" (mouseleave)="accessibility = !accessibility">
      <option value="{{prop.accessibility}}">{{prop.accessibility}}</option>
      <hr>
        <option value="private">private</option>
        <option value="public">public</option>
    </select>
    </span>
  </ng-container>
  <ng-template #propEditType >
  
      <span (click)="accessibility = !accessibility">{{ prop.accessibility }} </span>
  </ng-template>
  `,
  styles: [``],
})
export class AccessibilityComponent {
  @Input() prop: prop | method;
  accessibility: boolean = false;
}
