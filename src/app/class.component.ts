import { Component, Input } from '@angular/core';
import { classUml, EInhert } from './class.type';

@Component({
  selector: 'class',
  template: ` 
  <section  class="class-uml">
    <span (click)="show= !show">{{ class.name }}</span>
   <!-- <span *ngIf="class.inhert.type===EInhert.None"></span>
    <span (click)="editInhert= !editInhert" class="open">&#123; + &#125;</span>
    <span #inhert>inhert</span>

    -->
    <inhert [inhert]=class.inhert ></inhert>
    <ng-container *ngIf="show">
      <hr />

      <props [props]=class.props [isInterface]=false></props>
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
  EInhert = EInhert;
  @Input() class: classUml;
  show: boolean = true;
  editInhert: boolean = false;
}
