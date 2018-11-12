import { Component } from '@angular/core';
import { MapService } from './map.service';
import { MouseEvent } from '@agm/core';
import { ApiService } from './api.service';
@Component({
  templateUrl: './map.component.html',
})
export class MapComponent {
  constructor(private map: MapService, private api: ApiService) { }

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: string;
  lng: string;
  location:marker = {
    lat:+this.lat,
    lng:+this.lng
  };

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  ngOnInit() {
    this.map.getCurrentLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;

    });

  }
  Post(location) {
    this.api.postLocation(location);
    //console.log(location);
  }

  mapClicked($event: MouseEvent) {
    this.location.lat = $event.coords.lat;
    this.location.lng = $event.coords.lng;
    
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    this.location.lat = $event.coords.lat;
    this.location.lng = $event.coords.lng;
    //console.log('dragEnd', m, $event);
  }

}
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}
