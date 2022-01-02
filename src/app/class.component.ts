import { Component, Input } from '@angular/core';
import { classUml, method, prop, Eprop } from './class.type';

@Component({
  selector: 'class',
  template: ` 
  <section  class="class-uml">
    <span>{{ class.name }}</span>
    <span (click)="show= !show" class="open">&#123; + &#125;</span>
    <ng-container *ngIf="show">
      <hr />

      <div *ngFor="let prop of class.props">
        <prop *ngIf="prop.accessibility===Eprop.Private" [prop]="prop"></prop>
      </div>

      <div *ngFor="let prop of class.props">
        <prop *ngIf="prop.accessibility===Eprop.Public" [prop]="prop"></prop>
      </div>

      <hr />

      <div *ngFor="let method of class.methods">
        <method [method]="method"></method>
      </div>
      
    </ng-container>
  </section>
  `,
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  Eprop = Eprop;
  @Input() class: classUml;
  show: boolean = true;
}
