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
  constructor(private dataService:DataService) {
   this.get();
   }
   
   get(){
    this.dataService.getHorario().subscribe(res=> {
      console.log(res);
      let res2;
      res2=res;
      for (let i = 0; i < res2.length; i++) {
        for(let sem=0;sem<=6;sem++){
          console.log(res2[i][this.semana[sem]]);
          if(res2[i][this.semana[sem]]!=null){
            res2[i]["hora"]=res2[i][this.semana[sem]];
            res2[i].dia=this.semana[sem];
          }
        }
      }
      // for(let item of res2){
      //   for(let sem of this.semana){
      //     if(item[sem]!=null){
      //       res[0].hora=item[sem];
      //     }
      //   }

      // }
      console.log(res2);
      this.horario=res2;
    })
   }

  ngOnInit() {
  }

}
