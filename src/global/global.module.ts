import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

const globalComponents: any = [

];

@NgModule({
  declarations: [
    ...globalComponents,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    ...globalComponents,
  ]
})
export class GlobalModule {

}
