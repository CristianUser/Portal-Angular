import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  periodos;
  calificaciones;
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
     console.log("Select");
     console.log(periodo);
     this.getCalificaciones(periodo);
     return periodo;
   }
   getCalificaciones(per){
     //console.log("Select");
     this.dataService.getCalificaciones(per).subscribe(res=> {
      console.log(res);
      this.calificaciones=res;
     })
   }
  ngOnInit() {
  }

}
