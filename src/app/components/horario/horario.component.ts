import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  horario;
  hora=[];
  semana2=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  constructor(private dataService:DataService) {
   this.get();
   }
   
   get(){
    this.dataService.getHorario().subscribe(res=> {
      //console.log(res);
      let res2;
      res2=res;
      //console.log(res2);
      this.horario=res2;
    })
   }

  ngOnInit() {
  }

}
