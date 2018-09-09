import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  matricula=0;
  periodo;
  calificaciones;
  

  constructor(private http: HttpClient) {
    console.log('Service is working');
   }
   setMatricula(num){
     this.matricula=num;
     //console.log('Matricula seteada');
   }
   setPeriodoEst(periodo){
     this.periodo=[periodo.substring(0,2),periodo.substring(2,6)];;
     //console.log(this.periodo);
     //console.log("Periodo seteado");
   } 
  //Buscarlab?reque=CIM008&yr_cde=2018&trm_cde=R3
   buscarLab(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/Buscarlab?reque=CIM008&yr_cde=2018&trm_cde=R3");
   }

   getEstudiante(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/Estudiante?id_num="+this.matricula+"&yr_cde=2018&trm_cde=R3");
   }
   getBalance(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/BalanceCaja?id_num="+this.matricula);
   }
   getPeriodos(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/PeriodosCursados?id_num="+this.matricula);
   }
   getCalificaciones(per){
    return this.http.post("https://portal.ucateci.edu.do:446/api/HistorialCalificacion?id_num="+this.matricula+"&yr="+per[1]+"&trm="+per[0],this.calificaciones);
   }
   getCreditos(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/CreditoDisponible?id_num="+this.matricula+"&yr_cde="+this.periodo[1]+"&trm="+this.periodo[0]);
   }
   getHorarioPrematricula(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/HorarioPrematriculado?id_num="+this.matricula+"&yr="+this.periodo[1]+"&trm="+this.periodo[0]);
   }
   getHorario(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/Horario?id_num="+this.matricula+"&yr_cde="+this.periodo[1]+"&trm="+this.periodo[0]);
   }
   getAsignaturas(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/AsignaturaPreSeleccion?id_num="+this.matricula+"&yr="+this.periodo[1]+"&trm="+this.periodo[0]+"&loc=1");
   }
   getSecciones(req){
    return this.http.get("https://portal.ucateci.edu.do:446/api/SeccionesPreseleccion?reque="+req+"%20%20&yr="+this.periodo[1]+"&trm="+this.periodo[0]+"&loc=1&id_num="+this.matricula);
   }

}
