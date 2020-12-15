import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
@Injectable({providedIn : "root"})
export class MdService {
    url : string = "http://localhost:3000/wiki"
    constructor(private http : HttpClient){}

    get(file:string){
        return this.http.get("http://localhost:3000/wiki/" + file)
    }
}