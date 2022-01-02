import { Component, Input } from '@angular/core';
import { classUml } from './class.type';

@Component({
  selector: 'class',
  template: ` 
  <section  class="class-uml">
    <span>{{ class.name }}</span>
    <span (click)="show= !show" class="open">&#123; + &#125;</span>
    <ng-container *ngIf="show">
      <hr />

      <props [props]=class.props></props>
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
 
  @Input() class: classUml;
  show: boolean = true;
}
