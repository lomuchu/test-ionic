import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { }

  moveTo(ruta: string) {
    this.ngZone.run(() => {
      this.router.navigate([ruta]);
    }) ;
  }
}
