import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {console.log(usuarios)});

  //  const promesa = new Promise ( (resolve, reject) => {
  //    if (false) { 
  //      resolve('Resuelta');      
  //    } else {
  //      reject('Error');
  //    }
  //  })
  //  promesa.then( (mensaje) => {
  //    console.log(mensaje);
  //  })
  //  .catch (error => console.log('Error en mi promesa', error));
  }

  getUsuarios() {

    const promesa = new Promise ( resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json() )
        .then(body => console.log( body.data ))         
    });
    return promesa; 
  } 

}
