import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Job } from "../domain/job.type";


@Injectable({
  providedIn: "root",
})
export class JobsService {

  private baseUrl = `${environment.endpoints.jobs}/jobs`

  constructor(private http: HttpClient) {}

  getJobs$() {
    return this.http.get<Array<Job>>(this.baseUrl);
  }
}