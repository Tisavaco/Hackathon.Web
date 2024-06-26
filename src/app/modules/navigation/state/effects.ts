import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import * as actions from './actions';

@Injectable()
export class RoutingEffects {

    constructor(private actions$: Actions,
        private router: Router,
        private location: Location) { }

    navigate$ = createEffect(() => this.actions$.pipe(
        ofType(actions.go),
        tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
    ), { dispatch: false });

    skipNavigate$ = createEffect(() => this.actions$.pipe(
        ofType(actions.skipNavigation),
        tap((reason) => console.log('Navigation was skipped', reason))
    ), { dispatch: false });

    navigateBack$ = createEffect(() => this.actions$.pipe(
        ofType(actions.back),
        tap(() => this.location.back())
    ), { dispatch: false });

    navigateForward$ = createEffect(() => this.actions$.pipe(
        ofType(actions.forward),
        tap(() => this.location.forward())
    ), { dispatch: false });
}
