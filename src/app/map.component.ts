import { Component } from '@angular/core';
import { MapService } from './map.service';
import { MouseEvent } from '@agm/core';
@Component({
    templateUrl: './map.component.html',
})
export class MapComponent {
    constructor(private map: MapService) { }

  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: string ;
  lng: string ;
  lat1: number ;
  lng1: number ;
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  ngOnInit() {
    this.map.getCurrentLocation().subscribe( data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;

    });
    
  }
  
  mapClicked($event: MouseEvent) {
    this.lat1=$event.coords.lat;
    this.lng1=$event.coords.lat;
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    this.lat1=$event.coords.lat;
    this.lng1=$event.coords.lat;

  }
  marker1:any;
  markers: marker[] = []
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
