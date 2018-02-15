import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MunchSearchComponent} from '../munch/munch-search/munch-search.component';

@Injectable()
export class EndQueryGuard implements CanDeactivate<MunchSearchComponent> {
  canDeactivate(
    component: MunchSearchComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | Observable<boolean> | boolean {
      component.deactivateQuery();
      return true;
  }
}
