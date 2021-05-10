import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';

@Component({
  selector: 'app-mensaje-eliminar',
  templateUrl: './mensaje-eliminar.component.html',
  styleUrls: ['./mensaje-eliminar.component.css']
})
export class MensajeEliminarComponent {

  auto : Automovil;

  constructor(public activeModal:NgbActiveModal) { }

}
