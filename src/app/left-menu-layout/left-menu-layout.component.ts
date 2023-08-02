import {Component, ViewEncapsulation} from "@angular/core";

import {GroupService} from "@solenopsys/ui-publications";
import {ActivatedRoute} from "@angular/router";
import {MenuItemData} from "@solenopsys/ui-navigate";
import {BehaviorSubject} from "rxjs";
import {DataLoadRequest, MenuLoaderProvider, MenuLoaderService} from "@solenopsys/ui-templates";
import {Store} from "@ngxs/store";
import {IpfsMenuLoadProvider} from "../menu-load.provider";

@Component({
    selector: "sc-left-menu-layout",
    templateUrl: "./left-menu-layout.component.html",
    styleUrls: ["./left-menu-layout.component.scss"],
    encapsulation: ViewEncapsulation.Emulated
})
export class LeftMenuLayoutComponent {
    mobileMenu = false;


    constructor(private store: Store, private ar: ActivatedRoute, private groupService: GroupService, private mls: MenuLoaderService) {
        const dataKey = this.ar.snapshot.data['ipfs'];
        this.mls.addProvider("content_provider", new IpfsMenuLoadProvider(this.groupService));
        this.mls.addMapping(dataKey, "content_provider");
        this.store.dispatch(new DataLoadRequest("left_menu", dataKey));
    }


}
