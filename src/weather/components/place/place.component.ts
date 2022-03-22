import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-place',
  templateUrl: 'place.component.html',
  styleUrls: ['place.component.scss']
})
export class PlaceComponent {

  @Input()
  placeName: string = '';

  constructor() {
  }
}
