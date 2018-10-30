import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  matricula=0;
  periodo;
  calificaciones;
  cart=[];
  

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
   addCart(subject){
    this.cart.push(subject);
    console.log(this.cart);
   }
   //Seleccion de materia
   //https://portal.ucateci.edu.do:446/api/HacerSeleccion?reque=INF001L&yr_cde=2019&id_num=20181532&crs_cde=INF%20%20001L107crs_title=INTRODUCCION%20A%20LA%20INFORMATICA%20%20%20%20%20%20&trm_cd=R1&loc=1&estado=P&horario=%20M%20%20%20%20%20%20%20%2012%20/%2014%20%20%20%20E201
   //Quitar materia
   //https://portal.ucateci.edu.do:446/api/HacerSeleccion?reque=INF001L&yr_cde=2019&id_num=20181532&crs_cde=INF%20%20001L%20106&crs_title=INTRODUCCION%20A%20LA%20INFORMATICA&trm_cd=R1&loc=1&estado=D&horario=%20%20%20J%20%20%20%20%20%2018%20/%2020%20%20%20%20E202
   postAsignatura(subject,estado){
    let subjectObj={
      yr_cde:this.periodo[1],
      id_num:this.matricula,
      trm_cd:this.periodo[0],
      loc:1,
      estado:estado,
      reque:subject.ADV_REQ_CDE,
      crs_cde:subject.CRS_CDE,
      crs_title:subject.CRS_TITLE,
      horario:subject.HORARIO
    };
    console.log(subject);
    return this.http.post("https://portal.ucateci.edu.do:446/api/HacerSeleccion?reque="+subjectObj.reque+
    "&yr_cde="+subjectObj.yr_cde+"&id_num="+subjectObj.id_num+"&crs_cde="+subjectObj.crs_cde+
    "&crs_title="+subjectObj.crs_title+"&trm_cd="+subjectObj.trm_cd+"&loc="+subjectObj.loc+
    "&estado="+subjectObj.estado+"&horario="+subjectObj.horario,this.calificaciones);
   }
   getMatricula(){
     return this.matricula;
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
    return this.http.get("https://portal.ucateci.edu.do:446/api/EstudianteHorario?id_num="+this.matricula+"&yr="+this.periodo[1]+"&trm="+this.periodo[0]);
   }
   getHorario2(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/Horario?id_num="+this.matricula+"&yr_cde="+this.periodo[1]+"&trm="+this.periodo[0]);
   }
   getAsignaturas(){
    return this.http.get("https://portal.ucateci.edu.do:446/api/AsignaturaPreSeleccion?id_num="+this.matricula+"&yr="+this.periodo[1]+"&trm="+this.periodo[0]+"&loc=1");
   }
   getSecciones(req){
    return this.http.get("https://portal.ucateci.edu.do:446/api/SeccionesPreseleccion?reque="+req+"%20%20&yr="+this.periodo[1]+"&trm="+this.periodo[0]+"&loc=1&id_num="+this.matricula);
   }

}
