import { Component, Input } from '@angular/core';
import { classUml, interfaceUml } from './class.type';

@Component({
  selector: 'interfaces',
  template: ` 

 
  <section  class="class-uml">
  <span>{{ interface.name }}</span>
  <span (click)="show= !show" class="open">&#123; + &#125;</span>
  <ng-container *ngIf="show">
    <hr />

    <props [props]=interface.props  [isInterface]=true></props>
    <hr />

    <div *ngFor="let method of interface.methods">
      <interface-method [method]="method"></interface-method>
    </div>

  </ng-container>
</section>
 
  `,
  styleUrls: ['./class.component.css'],
})
export class InterfacesComponent {
  @Input() interface: interfaceUml;
  show: boolean = true;
}
