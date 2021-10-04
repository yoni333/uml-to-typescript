import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropComponent } from './prop.component';
import { MethodComponent } from './method.component';
import { AccessibilityComponent } from './accessibility.component';
import { ClassComponent } from './class.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ClassComponent,
    MethodComponent,
    PropComponent,
    AccessibilityComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
