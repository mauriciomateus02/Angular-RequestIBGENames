import { elementAt } from "rxjs";
import { PeriodoPageable } from "./periodoPageable.model";

export class ResponsePageable{

    name: string;
    sexo: string;
    localidade: string;
    decada: Array<PeriodoPageable>

    constructor(name: string, sexo: string, localidade: string, decada: Array<PeriodoPageable>){

        this.name = name;
        this.sexo = sexo;
        this.localidade = localidade;
        this.decada = decada;
    }

    static FromJson(Json: any)
    {
        return new ResponsePageable(
            Json['nome'],
            Json['sexo'],
            Json['localidade'],
            Json['res'].map((element: any)=> PeriodoPageable.FromJson(element)),
        )
    }
}