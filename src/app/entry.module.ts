import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TextGroupByPatchResolver, TextPageGroupComponent} from "@solenopsys/ui-publications";
import {LeftMenuLayoutComponent} from "./left-menu-layout/left-menu-layout.component";
import {UINavigateModule} from "@solenopsys/ui-navigate";
import {NgClass} from "@angular/common";

let routes = RouterModule.forChild([{
    path: "",
    component: LeftMenuLayoutComponent, children: [{
        path: "**",
        component: TextPageGroupComponent, resolve: {
            groups: TextGroupByPatchResolver
        },
    }],
}]);

@NgModule({
    declarations: [
        LeftMenuLayoutComponent
    ],
    imports: [
        routes,
        UINavigateModule
    ],
    providers: [],
})
export class RemoteEntryModule {

    constructor() {

    }
}
