import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { AfireService } from '../../services/afire.service';

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
  
  constructor(private dataService:DataService,private fireservice:AfireService)
  {
    this.getAsignaturas();
    this.getHorario();
    this.dataService.getCreditos().subscribe(res=> {
      //console.log(res);
      this.creditos=res;
    })
   }
  addCart(subject){
     subject['precio']=subject['CREDIT_HRS']*365;
    this.fireservice.addSubject(subject);
  }
  postAsignatura(subject,status){
    this.dataService.postAsignatura(subject,status).subscribe(res=> {
    this.getAsignaturas();
    console.log(res);
    })
  }
   getAsignaturas(){
    this.dataService.getAsignaturas().subscribe(res=> {
      //console.log(res);
      this.asignaturas=res;
    })
   }
   getHorario(){
     this.dataService.getHorario2().subscribe(res=> {
      //console.log(res);
      this.horario=res;})
   }
   

   prins(par){
    console.log(par)
    };
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
    this.fireservice.getShoppingCart();
  }

}
