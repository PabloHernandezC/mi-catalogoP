import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AutosService } from '../autos.service';
import { MensajeEliminarComponent } from '../mensaje-eliminar/mensaje-eliminar.component';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { Automovil } from '../models';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  autos: Automovil[];
  page = 1;
  pageSize = 10;
  coleccion: number;
  autoC : Automovil = {} as Automovil;

  constructor(private autoService: AutosService, private modalService: NgbModal) {

  }

  contar(autosA: Automovil[]){
    var numero = 0;
    for(var i = 0; i < autosA.length; i++){
      numero++
    }
    console.log(numero)
    return numero;
  }


  ngOnInit(): void {

    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data

      this.autos.sort();

      this.coleccion = Number(Object.keys(response.data).length)

      console.log(this.coleccion)
    });
  }

  openModalEdit(auto:Automovil){
    const modalRef = this.modalService.open(ModalEditComponent, { centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto)=>{
        this.autoService.updateAuto(auto).subscribe(response => {
          console.log(response)
        });
      },
      (reason) =>{
        console.log(reason)
      }
    )
  }

  openModalCreate(){
    const modalRef = this.modalService.open(ModalEditComponent, { centered: true});
    modalRef.componentInstance.accion = 'Crear';
    modalRef.componentInstance.auto = this.autoC;

    modalRef.result.then(
      (auto)=>{
        this.autoService.createAuto(auto).subscribe(response => {
          console.log(response)
        });
      },
      (reason) =>{
        console.log(reason)
      }
    )

  }

  openModalDelete(auto:Automovil){
    const modalRef = this.modalService.open(MensajeEliminarComponent, { centered: true});
    modalRef.componentInstance.auto = auto;

    modalRef.result.then(
      (auto)=>{
        this.autoService.deleteAuto(auto).subscribe(response => {
          console.log(response)
        });
      },
      (reason) =>{
        console.log(reason)
      }
    )
  }

}
