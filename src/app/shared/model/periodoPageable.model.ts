
export class PeriodoPageable{

    periodo: string;
    decada: number;

    constructor(periodo: string,decada: number){
        this.periodo = periodo;
        this.decada = decada;
    }

    static FromJson(Json: any){
        return new PeriodoPageable(
            Json['periodo'],
            Json['frequencia:']
            );
    }
}