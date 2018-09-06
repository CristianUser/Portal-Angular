import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.css']
})
export class SeccionesComponent implements OnInit {

  secciones;
  mostrar=false;
  @Input() req;
  constructor(private dataService:DataService) {
    this.get();
  }
  get(){
    console.log("req= "+this.req);
    this.dataService.getSecciones(this.req).subscribe(res=> {
      console.log(res);
      this.secciones=res;
    })
  }
  ngOnInit() {
  }

}
