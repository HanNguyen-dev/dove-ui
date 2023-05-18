import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { JobsService } from "../services/jobs.service";
import { JobsActions } from "./jobs.actions";

@Injectable()
export class JobsEffect {

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobsActions.retrieveJobList.type),
      exhaustMap(() => this.jobsService.getJobs$()
        .pipe(map(jobs => JobsActions.retrieveJobListSuccessful({ jobs })))
      )
    )
  );

  constructor(
    private jobsService: JobsService,
    private actions$: Actions
  ) { }

}
