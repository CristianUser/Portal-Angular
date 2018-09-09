import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  periodos;
  calificaciones=[];
  visible=false;
  constructor(private dataService:DataService) {
    this.getPeriodos();
   }
   
   getPeriodos(){
    this.dataService.getPeriodos().subscribe(res=> {
      console.log(res);
      this.periodos=res;
    })
   }
   sendPeriodo(val){
     let periodo=[val.substring(0,2),val.substring(3,7)];
     //console.log("Select");
     //console.log(periodo);
     this.getCalificaciones(periodo);
     return periodo;
   }
   getCalificaciones(per){
     this.visible=true;
     //console.log("Select");
     let calificaciones=[];
     this.dataService.getCalificaciones(per).subscribe(res=> {
      let obj;
      obj=res;
       for (let item of obj) {
         if(item.CRS_CDE.substring(8,9)=='L'){
            //laboratorios.push(item);
         }else{
           calificaciones.push(item);
         }
       }
      //console.log(res);
      this.calificaciones=calificaciones;
     })
   }
  ngOnInit() {
  }

}
