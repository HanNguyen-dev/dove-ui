import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Company } from "./domain/company.type";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  baseUrl = `${environment.endpoints.jobs}/companies`

  constructor(private http: HttpClient) { }

  getCompanies$() {
    return this.http.get<Company[]>(this.baseUrl);
  }
}