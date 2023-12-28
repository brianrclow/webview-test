import { Component, OnInit } from "@angular/core";
import { registerElement } from "@nativescript/angular";

registerElement(
  "HTMLLabel",
  () => require("@nativescript-community/ui-label").Label
);

// registerElement(
//   "AWebView",
//   () => require("@nativescript-community/ui-webview").AWebView
// );

@Component({
  selector: "Browse",
  templateUrl: "./browse.component.html",
})
export class BrowseComponent implements OnInit {
  example_html: string;
  constructor() {
    // Use the component constructor to inject providers.
    this.example_html =
      "<h1>Angular</h1><p>This is hopefully an<em>example</em> of a <u>few things</u></p> <ul> <li>a bulleted</li> <li>list</li> <li>italicas</li> <li>and underline</li> </ul> <ol> <li>numbered list</li> </ol> <p>and <strong>boldness too</strong></p>";
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }
}
