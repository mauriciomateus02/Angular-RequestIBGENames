import { ResponsePageable } from "../model/responsePageable.model";
import { UrlApi } from "./url.server";

export class Repositorie{

    async getAll(request:string){
        try{
            /*const Uri = String(UrlApi) + names.map((element) => element+"|");
            const request = Uri.replaceAll(",","");*/
            const result = fetch(request);
            const data =  (await result).json();

            return ResponsePageable.FromJson(data);
        }
        catch(error){
            return error;
        }
    }
}