import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  page = 1;
  pageSize = 10;

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit(): void {

    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })

  }

}
