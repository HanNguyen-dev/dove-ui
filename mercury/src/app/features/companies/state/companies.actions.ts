import { createActionGroup, props } from "@ngrx/store";
import { Company } from "../domain/company.type";

export const CompaniesActions = createActionGroup({
  source: 'Companies',
  events: {
    'Retrieve Companies List': props<{ none?: undefined }>(),
    'Retrieve Companies List Successful': props<{ companies: ReadonlyArray<Company> }>(),
    'Retrieve Companies List Failure': props<{ none?: undefined }>(),
  },
});