import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title!:string;
  public titleSubs$!: Subscription

  constructor(private router:Router){

    this.getRouteParams()
  }
  
  
  
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe()
  }


  getRouteParams(){
    this.titleSubs$ = this.router.events
    .pipe(
      filter<any>( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
  
    )
    .subscribe( ({titulo}) =>  {
  
      this.title = titulo
      document.title = `RRHH - ${titulo}`
  
    })
  }



}
