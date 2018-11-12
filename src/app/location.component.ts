import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MapService } from './map.service'
import { MouseEvent } from '@agm/core';
import { markParentViewsForCheck } from '@angular/core/src/view/util';

@Component({
    templateUrl: './location.component.html',
})
export class LocationComponent {
    zoom: number = 8;
    lat: string;
    lng: string;
    location: marker = {
        id:0,
        lat: +this.lat,
        lng: +this.lng
    };
    markers;
    mapClicked($event: MouseEvent) {
        this.location.lat = $event.coords.lat;
        this.location.lng = $event.coords.lng;
        
      }
    
      markerDragEnd(m: marker, $event: MouseEvent) {
        this.location.lat = $event.coords.lat;
        this.location.lng = $event.coords.lng;
        //console.log('dragEnd', m, $event);
      }
    displayedColumns: string[] = ['id', 'lat', 'lng', 'label', 'action'];
    constructor(private api: ApiService, private map: MapService) { }
    ngOnInit() {
        this.map.getCurrentLocation().subscribe(data => {
            console.log(data);
            this.lat = data.latitude;
            this.lng = data.longitude;

        });
        this.api.getLocation().subscribe(res => {
            this.markers = res;
            console.log(res);
        });

    }
    onRowClicked(row) {
        console.log(row);
    }
    image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';


}
interface marker {
    id: number;
    lat: number;
    lng: number;
    label?: string;
    draggable?: boolean;
}
