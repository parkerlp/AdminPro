import { Component, OnDestroy} from '@angular/core';
import { interval, Observable, retry, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() { 

    //this.retornaObservable().pipe(retry(2) 
    //  ).subscribe(
    //  numero =>console.log('Subs', numero),
    //  error => console.log('Error en el Obs', error),
    //  ()=> console.log('El observador termino.')
    //  )
    this.intervalSubs = this.retornaIntervalo().subscribe(valor => console.log ('Subs', valor), );

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo () {   
    const intervalo$ = interval (500).pipe(
      map( valor => valor +1), 
      filter( valor => ( valor % 2 === 0) ? true: false),
      take(10),
      );
    return intervalo$;
  }

  retornaObservable(): Observable<number> {
    const obs$ = new Observable<number>( observer => {
      let i = -1;
      const intervalo = setInterval( () => {
        i++;
        observer.next(i);

        if (i === 4)  { 
          clearInterval( intervalo );
          observer.complete();
        }

        if (i === 2) {
          observer.error;
        }

      }, 1000 )
    });
    return obs$;
  }

}
