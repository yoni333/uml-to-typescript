import { Component, Input } from '@angular/core';
import { EInhert, InhertUml } from './class.type';

@Component({
  selector: 'inhert',
  template: ` 
    <span *ngIf='inhert.type===EInhert.None ; else inhert'
        (click)="editInhert= !editInhert" 
        class="open"
        >&#123; + &#125;</span>
    <span ></span>
    <span #inhert>inhert</span>

  `,
  styles: [],
})
export class InhertComponent {
  EInhert = EInhert;
  @Input() inhert: InhertUml;
  show: boolean = true;
  editInhert: boolean = false;
}
