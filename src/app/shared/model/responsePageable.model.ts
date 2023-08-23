import { elementAt } from "rxjs";
import { PeriodoPageable } from "./periodoPageable.model";
import { inject } from "@angular/core";


export interface ResponsePageable {

    nome: string;
    sexo: string;
    localidade: string;
    res: Array<PeriodoPageable>;
   
}