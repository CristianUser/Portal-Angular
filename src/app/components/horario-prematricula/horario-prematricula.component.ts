import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-horario-prematricula',
  templateUrl: './horario-prematricula.component.html',
  styleUrls: ['./horario-prematricula.component.css']
})
export class HorarioPrematriculaComponent implements OnInit {
  horario;
  hora=[];
  semana=['LUNES','MARTES','MIERCOLES','JUEVES','VIERES','SABADOS'];
  semana2=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  constructor(private dataService:DataService) {
   this.get();
   }
   
   get(){
    this.dataService.getHorarioPrematricula().subscribe(res=> {
      //console.log(res);
      let res2;
      res2=res;
      for (let i = 0; i < res2.length; i++) {
        for(let sem=0;sem<=6;sem++){
          //console.log(res2[i][this.semana[sem]]);
          if(res2[i][this.semana[sem]]!=null){
            res2[i]["hora"]=res2[i][this.semana[sem]];
            res2[i].dia=this.semana2[sem];
          }
        }
      }
      //console.log(res2);
      this.horario=res2;
    })
   }

  ngOnInit() {
  }

}
