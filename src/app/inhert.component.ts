import { Component, Input, OnChanges } from "@angular/core";
import { EInhert, InhertUml } from "./class.type";

@Component({
  selector: "inhert",
  template: `
    {{ inhert.type }}
    <ng-container *ngIf="inhert.type === EInhert.None; else inhert">
      <span (click)="editInhert = !editInhert" class="open"
        >&#123; + &#125;</span
      >
    </ng-container>

    <ng-template #inhert>
      {{ inhert }}
      <span>{{
        inhert.type === EInhert.Implements ? "Implements" : "Extend"
      }}</span>
    </ng-template>
  `,
  styles: []
})
export class InhertComponent implements OnChanges {
  EInhert = EInhert;
  @Input() inhert: InhertUml;
  show: boolean = true;
  editInhert: boolean = false;

  ngOnChanges(e) {
    console.log(e);
  }
}
