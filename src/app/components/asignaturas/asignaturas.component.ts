import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {SeccionesComponent} from './secciones/secciones.component';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
  
})
export class AsignaturasComponent implements OnInit {
  
  asignaturas;
  secciones;
  creditos;
  constructor(private dataService:DataService)//, private secciones:SeccionesComponent) 
  {
    this.get();
    this.dataService.getCreditos().subscribe(res=> {
      console.log(res);
      this.creditos=res;
    })
   }
   get(){
    this.dataService.getAsignaturas().subscribe(res=> {
      //console.log(res);
      this.asignaturas=res;
    })
   }
   req;
   setReq(val){
     this.req=val;
     this.getSecciones();
   }

   getSecciones(){
    //console.log("req= "+this.req);
    this.dataService.getSecciones(this.req).subscribe(res=> {
      console.log(res);
      this.secciones=res;
    })
  }

  ngOnInit() {
  }

}
