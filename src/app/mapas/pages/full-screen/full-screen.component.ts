import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  ngOnInit(): void {

      var map = new mapboxgl.Map({
        container: 'mapa',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.15661472331999, 4.594608408940209],
        zoom: 18
      });
  }

}
