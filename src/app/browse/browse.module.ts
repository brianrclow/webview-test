import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { BrowseRoutingModule } from "./browse-routing.module";
import { BrowseComponent } from "./browse.component";

import { AWebViewModule } from "@nativescript-community/ui-webview/angular";
// AWebViewModule;
@NgModule({
  imports: [NativeScriptCommonModule, BrowseRoutingModule, AWebViewModule],
  declarations: [BrowseComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BrowseModule {}
