import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
  
})
export class AsignaturasComponent implements OnInit {
  
  asignaturas;
  secciones=[];
  laboratorios=[];
  creditos;
  horario;
  constructor(private dataService:DataService)
  {
    this.getAsignaturas();
    this.getHorario();
    this.dataService.getCreditos().subscribe(res=> {
      //console.log(res);
      this.creditos=res;
    })
   }
   getAsignaturas(){
    this.dataService.getAsignaturas().subscribe(res=> {
      //console.log(res);
      this.asignaturas=res;
    })
   }
   getHorario(){
     this.dataService.getHorario().subscribe(res=> {
      //console.log(res);
      this.horario=res;})
   }
   req;
   setReq(val){
     this.req=val;
     this.getSecciones();
   }

   getSecciones(){
     let laboratorios=[],secciones=[];
    this.dataService.getSecciones(this.req).subscribe(res=> {
      let obj;
      obj=res;
       for (let item of obj) {
         if(item.CRS_CDE.substring(8,9)=='L'){
            laboratorios.push(item);
         }else{
           secciones.push(item);
         }
       }
       this.secciones=secciones;
       this.laboratorios=laboratorios;
    })
  }

  ngOnInit() {
  }

}
