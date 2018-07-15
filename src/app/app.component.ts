import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // <-- do not forget to import
import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Galle porfolio';
  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }


}
