(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('mf-one', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory(global['mf-one'] = {}, global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var EntryComponent = /** @class */ (function () {
        function EntryComponent() {
        }
        EntryComponent.prototype.ngOnInit = function () {
        };
        EntryComponent.ɵfac = function EntryComponent_Factory(t) { return new (t || EntryComponent)(); };
        EntryComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EntryComponent, selectors: [["app-entry"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "content"], [1, "title"]], template: function EntryComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "div", 1);
                core["ɵɵelementStart"](2, "p", 2);
                core["ɵɵtext"](3, " This is entry component from microservice ALPHA ");
                core["ɵɵelementEnd"]();
                core["ɵɵelement"](4, "br");
                core["ɵɵelement"](5, "hr");
                core["ɵɵelement"](6, "hr");
                core["ɵɵelement"](7, "hr");
                core["ɵɵelement"](8, "hr");
                core["ɵɵelement"](9, "hr");
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } }, styles: ["hr[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.container[_ngcontent-%COMP%]{margin:10px;border:1px dashed #bbb}.content[_ngcontent-%COMP%]{padding:10px}.title[_ngcontent-%COMP%]{font-size:1em;font-weight:600}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.row[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:5px}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column}"] });
        return EntryComponent;
    }());

    var routes = [
        { path: '', component: EntryComponent }
    ];
    var EntryRoutingModule = /** @class */ (function () {
        function EntryRoutingModule() {
        }
        EntryRoutingModule.ɵmod = core["ɵɵdefineNgModule"]({ type: EntryRoutingModule });
        EntryRoutingModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function EntryRoutingModule_Factory(t) { return new (t || EntryRoutingModule)(); }, imports: [[router.RouterModule.forChild(routes)], router.RouterModule] });
        return EntryRoutingModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](EntryRoutingModule, { imports: [router.RouterModule], exports: [router.RouterModule] }); })();

    // import { AssetsExampleComponent } from './assets-example/assets-example.component';
    // import { StylesExampleComponent } from './styles-example/styles-example.component';
    // import { ButtonsExampleComponent } from './buttons-example/buttons-example.component';
    // import { SharedExampleComponent } from './shared-example/shared-example.component';
    // import { WebcomponentsExampleComponent } from './webcomponents-example/webcomponents-example.component';
    var EntryModule = /** @class */ (function () {
        function EntryModule() {
        }
        EntryModule.ɵmod = core["ɵɵdefineNgModule"]({ type: EntryModule });
        EntryModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function EntryModule_Factory(t) { return new (t || EntryModule)(); }, imports: [[
                    common.CommonModule,
                    EntryRoutingModule
                ]] });
        return EntryModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](EntryModule, { declarations: [EntryComponent], imports: [common.CommonModule,
            EntryRoutingModule] }); })();

    exports.EntryModule = EntryModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bundle.umd.js.map
