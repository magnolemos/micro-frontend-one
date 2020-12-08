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
var EntryModule = /** @class */ (function () {
    function EntryModule() {
    }
    EntryModule.ɵmod = i0.ɵɵdefineNgModule({ type: EntryModule });
    EntryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EntryModule_Factory(t) { return new (t || EntryModule)(); }, imports: [[
                CommonModule,
                EntryRoutingModule
            ]] });
    return EntryModule;
}());
export { EntryModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50cnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtb25lLyIsInNvdXJjZXMiOlsiZW50cnkvZW50cnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFDbkQsc0ZBQXNGO0FBQ3RGLHNGQUFzRjtBQUN0Rix5RkFBeUY7QUFDekYsc0ZBQXNGO0FBQ3RGLDJHQUEyRztBQUczRztJQUFBO0tBZTRCO21EQUFmLFdBQVc7eUdBQVgsV0FBVyxrQkFOYjtnQkFDUCxZQUFZO2dCQUNaLGtCQUFrQjthQUNuQjtzQkF4Qkg7Q0EyQjRCLEFBZjVCLElBZTRCO1NBQWYsV0FBVzt3RkFBWCxXQUFXLG1CQWJwQixjQUFjLGFBUWQsWUFBWTtRQUNaLGtCQUFrQjtrREFJVCxXQUFXO2NBZnZCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osY0FBYztpQkFNZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEVudHJ5Um91dGluZ01vZHVsZSB9IGZyb20gJy4vZW50cnktcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRW50cnlDb21wb25lbnQgfSBmcm9tICcuL2VudHJ5LmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBBc3NldHNFeGFtcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9hc3NldHMtZXhhbXBsZS9hc3NldHMtZXhhbXBsZS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgU3R5bGVzRXhhbXBsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGVzLWV4YW1wbGUvc3R5bGVzLWV4YW1wbGUuY29tcG9uZW50Jztcbi8vIGltcG9ydCB7IEJ1dHRvbnNFeGFtcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b25zLWV4YW1wbGUvYnV0dG9ucy1leGFtcGxlLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBTaGFyZWRFeGFtcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9zaGFyZWQtZXhhbXBsZS9zaGFyZWQtZXhhbXBsZS5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgV2ViY29tcG9uZW50c0V4YW1wbGVDb21wb25lbnQgfSBmcm9tICcuL3dlYmNvbXBvbmVudHMtZXhhbXBsZS93ZWJjb21wb25lbnRzLWV4YW1wbGUuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFbnRyeUNvbXBvbmVudCxcbiAgICAvLyBTaGFyZWRFeGFtcGxlQ29tcG9uZW50LFxuICAgIC8vIEFzc2V0c0V4YW1wbGVDb21wb25lbnQsXG4gICAgLy8gU3R5bGVzRXhhbXBsZUNvbXBvbmVudCxcbiAgICAvLyBCdXR0b25zRXhhbXBsZUNvbXBvbmVudCxcbiAgICAvLyBXZWJjb21wb25lbnRzRXhhbXBsZUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBFbnRyeVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEVudHJ5TW9kdWxlIHsgfVxuIl19