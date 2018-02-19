import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MunchSearchComponent} from '../munch/munch-search/munch-search.component';
import 'rxjs/add/observable/of';

@Injectable()
export class EndQueryGuard implements CanDeactivate<MunchSearchComponent> {
  canDeactivate(
    component: MunchSearchComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Promise<boolean> | Observable<boolean> | boolean {
    return component.canDeactivate();
  } // TODO: put in user obj if they have query, if so, deactivate there too
}
