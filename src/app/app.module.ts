import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropComponent, PropsComponent } from './prop.component';
import { InterfaceMethodComponent, MethodComponent } from './method.component';
import { AccessibilityComponent } from './accessibility.component';
import { ClassComponent } from './class.component';
import { InterfacesComponent } from './interfaces.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ClassComponent,
    InterfacesComponent,
    MethodComponent,
    InterfaceMethodComponent,
    PropsComponent,
    PropComponent,
    AccessibilityComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
