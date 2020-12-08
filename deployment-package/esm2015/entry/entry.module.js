import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import * as i0 from "@angular/core";
// import { AssetsExampleComponent } from './assets-example/assets-example.component';
// import { StylesExampleComponent } from './styles-example/styles-example.component';
// import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
// import { SharedExampleComponent } from './shared-example/shared-example.component';
// import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';
export class EntryModule {
}
EntryModule.ɵmod = i0.ɵɵdefineNgModule({ type: EntryModule });
EntryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EntryModule_Factory(t) { return new (t || EntryModule)(); }, imports: [[
            CommonModule,
            EntryRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EntryModule, { declarations: [EntryComponent], imports: [CommonModule,
        EntryRoutingModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntryModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    EntryComponent,
                ],
                imports: [
                    CommonModule,
                    EntryRoutingModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtb25lLyIsInNvdXJjZXMiOlsiZW50cnkvZW50cnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFDbkQsc0ZBQXNGO0FBQ3RGLHNGQUFzRjtBQUN0Rix5RkFBeUY7QUFDekYsc0ZBQXNGO0FBQ3RGLDJHQUEyRztBQWtCM0csTUFBTSxPQUFPLFdBQVc7OytDQUFYLFdBQVc7cUdBQVgsV0FBVyxrQkFOYjtZQUNQLFlBQVk7WUFDWixrQkFBa0I7U0FDbkI7d0ZBR1UsV0FBVyxtQkFicEIsY0FBYyxhQVFkLFlBQVk7UUFDWixrQkFBa0I7a0RBSVQsV0FBVztjQWZ2QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7aUJBTWY7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osa0JBQWtCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBFbnRyeVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2VudHJ5LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEVudHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9lbnRyeS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgQXNzZXRzRXhhbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vYXNzZXRzLWV4YW1wbGUvYXNzZXRzLWV4YW1wbGUuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFN0eWxlc0V4YW1wbGVDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlcy1leGFtcGxlL3N0eWxlcy1leGFtcGxlLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBCdXR0b25zRXhhbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vYnV0dG9ucy1leGFtcGxlL2J1dHRvbnMtZXhhbXBsZS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgU2hhcmVkRXhhbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkLWV4YW1wbGUvc2hhcmVkLWV4YW1wbGUuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IFdlYmNvbXBvbmVudHNFeGFtcGxlQ29tcG9uZW50IH0gZnJvbSAnLi93ZWJjb21wb25lbnRzLWV4YW1wbGUvd2ViY29tcG9uZW50cy1leGFtcGxlLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRW50cnlDb21wb25lbnQsXG4gICAgLy8gU2hhcmVkRXhhbXBsZUNvbXBvbmVudCxcbiAgICAvLyBBc3NldHNFeGFtcGxlQ29tcG9uZW50LFxuICAgIC8vIFN0eWxlc0V4YW1wbGVDb21wb25lbnQsXG4gICAgLy8gQnV0dG9uc0V4YW1wbGVDb21wb25lbnQsXG4gICAgLy8gV2ViY29tcG9uZW50c0V4YW1wbGVDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRW50cnlSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBFbnRyeU1vZHVsZSB7IH1cbiJdfQ==