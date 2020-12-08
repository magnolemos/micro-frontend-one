import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
// import { AssetsExampleComponent } from './assets-example/assets-example.component';
// import { StylesExampleComponent } from './styles-example/styles-example.component';
// import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
// import { SharedExampleComponent } from './shared-example/shared-example.component';
// import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';


@NgModule({
  declarations: [
    EntryComponent,
    // SharedExampleComponent,
    // AssetsExampleComponent,
    // StylesExampleComponent,
    // ButtonsExampleComponent,
    // WebcomponentsExampleComponent,
  ],
  imports: [
    CommonModule,
    EntryRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntryModule { }
