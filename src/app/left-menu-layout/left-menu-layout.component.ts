import {Component, Inject, OnInit, ViewEncapsulation} from "@angular/core";

import {GroupService} from "@solenopsys/ui-publications";
import {ActivatedRoute} from "@angular/router";
import {DataLoadRequest, MenuLoaderService} from "@solenopsys/ui-templates";
import {Store} from "@ngxs/store";
import {IpfsMenuLoadProvider} from "../menu-load.provider";
import {timeout} from "rxjs";

@Component({
    selector: "sc-left-menu-layout",
    templateUrl: "./left-menu-layout.component.html",
    styleUrls: ["./left-menu-layout.component.scss"],
    encapsulation: ViewEncapsulation.Emulated
})
export class LeftMenuLayoutComponent implements OnInit{
    mobileMenu = false;


    constructor(private store: Store, private ar: ActivatedRoute, private groupService: GroupService, private mls: MenuLoaderService) {

        console.log("GROUP_SERVICE", this.groupService)
        // todo add mapping to config

    }

    ngOnInit(): void {
        const dataKey = this.ar.snapshot.data['ipfs'];
        this.mls.addProvider("content_provider", new IpfsMenuLoadProvider(this.groupService));
        this.mls.addMapping(dataKey, "content_provider");

        setTimeout(
            () => {
                this.store.dispatch(new DataLoadRequest("left_menu", dataKey));
            }, 0
        )
    }





}
