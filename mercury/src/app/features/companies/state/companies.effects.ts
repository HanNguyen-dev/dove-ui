import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CompaniesService } from "../companies.service";
import { CompaniesActions } from "./companies.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class CompaniesEffects {

  loading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompaniesActions.retrieveCompaniesList.type),
      exhaustMap(() => this.companiesSvc.getCompanies$()
        .pipe(
          map(companies => CompaniesActions.retrieveCompaniesListSuccessful({ companies })),
        )
      )
    )
  )


  constructor(
    private actions$: Actions,
    private companiesSvc: CompaniesService
  ) { }
}