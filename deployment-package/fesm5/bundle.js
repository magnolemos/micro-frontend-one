import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

var EntryComponent = /** @class */ (function () {
    function EntryComponent() {
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent.ɵfac = function EntryComponent_Factory(t) { return new (t || EntryComponent)(); };
    EntryComponent.ɵcmp = ɵɵdefineComponent({ type: EntryComponent, selectors: [["app-entry"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "content"], [1, "title"]], template: function EntryComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "div", 1);
            ɵɵelementStart(2, "p", 2);
            ɵɵtext(3, " This is entry component from microservice ALPHA ");
            ɵɵelementEnd();
            ɵɵelement(4, "br");
            ɵɵelement(5, "hr");
            ɵɵelement(6, "hr");
            ɵɵelement(7, "hr");
            ɵɵelement(8, "hr");
            ɵɵelement(9, "hr");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, styles: ["hr[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.container[_ngcontent-%COMP%]{margin:10px;border:1px dashed #bbb}.content[_ngcontent-%COMP%]{padding:10px}.title[_ngcontent-%COMP%]{font-size:1em;font-weight:600}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.row[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:5px}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column}"] });
    return EntryComponent;
}());

var routes = [
    { path: '', component: EntryComponent }
];
var EntryRoutingModule = /** @class */ (function () {
    function EntryRoutingModule() {
    }
    EntryRoutingModule.ɵmod = ɵɵdefineNgModule({ type: EntryRoutingModule });
    EntryRoutingModule.ɵinj = ɵɵdefineInjector({ factory: function EntryRoutingModule_Factory(t) { return new (t || EntryRoutingModule)(); }, imports: [[RouterModule.forChild(routes)], RouterModule] });
    return EntryRoutingModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EntryRoutingModule, { imports: [RouterModule], exports: [RouterModule] }); })();

// import { AssetsExampleComponent } from './assets-example/assets-example.component';
// import { StylesExampleComponent } from './styles-example/styles-example.component';
// import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
// import { SharedExampleComponent } from './shared-example/shared-example.component';
// import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';
var EntryModule = /** @class */ (function () {
    function EntryModule() {
    }
    EntryModule.ɵmod = ɵɵdefineNgModule({ type: EntryModule });
    EntryModule.ɵinj = ɵɵdefineInjector({ factory: function EntryModule_Factory(t) { return new (t || EntryModule)(); }, imports: [[
                CommonModule,
                EntryRoutingModule
            ]] });
    return EntryModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(EntryModule, { declarations: [EntryComponent], imports: [CommonModule,
        EntryRoutingModule] }); })();

export { EntryModule };
//# sourceMappingURL=bundle.js.map
