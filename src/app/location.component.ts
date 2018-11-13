import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MapService } from './map.service'
import { MouseEvent } from '@agm/core';
import { load } from '@angular/core/src/render3/instructions';

@Component({
    templateUrl: './location.component.html',
})
export class LocationComponent {
    zoom: number =8;
    lat: string;
    lng: string;
    markers;
    location: marker = {
        lat: +this.lat,
        lng: +this.lng,
        visible:true
    };
    displayedColumns: string[] = ['id', 'lat', 'lng', 'label', 'action'];
    constructor(private api: ApiService, private map: MapService) { }
    ngOnInit() {
        this.map.getCurrentLocation().subscribe(data => {
            console.log(data);
            this.lat = data.latitude;
            this.lng = data.longitude;
            this.location.lat=+this.lat;
            this.location.lng=+this.lng;
        });
        this.load();
    }
    mapClicked($event: MouseEvent) {
        this.location.lat = $event.coords.lat;
        this.location.lng = $event.coords.lng;
    }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
        this.location.lat = $event.coords.lat;
        this.location.lng = $event.coords.lng;
    } 
    load(){
        this.api.getLocation().subscribe(res => {
            this.markers = res;
            for(var marker of this.markers){
                marker.visible=true;
            }
            console.log(res);
        });
    }
    onRowClicked(row) {
        for(var marker of this.markers){
            if(marker.id==row.id){
                marker.visible=false;
            }
        }
        this.location=row;
        this.location.draggable=true;
    }
    image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    Post(location) {
        this.api.postLocation(location);
        this.load();

        //console.log(location);
    }
    Put(location) {
        this.api.putQuestion(location);
        this.load();

        //console.log(location);
    }


}
interface marker {
    id?: number;
    lat: number;
    lng: number;
    visible: boolean;
    label?: string;
    draggable?: boolean;
}
