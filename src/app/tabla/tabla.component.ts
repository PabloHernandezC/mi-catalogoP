import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AUTOMOVILES } from '../data';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

}
