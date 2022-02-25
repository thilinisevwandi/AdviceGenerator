import { Injectable } from "@angular/core";
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import {map,catchError} from 'rxjs/operators';
import { throwError } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AppService{
    constructor(private http:HttpClient){

    }

    getNextAdvice(){
        return this.http.get<AdviceResponse>('https://api.adviceslip.com/advice')
        .pipe(
            map((response:AdviceResponse)=>{
                return response.slip
            }),
            catchError(this.handleError)
        )
    }

    private handleError(error:HttpErrorResponse){
        alert('An Error Occured, Please check your internet connection.')
        return throwError(error.message);
    }
}

export interface Advice{
    id:number;
    advice:string;
}

interface AdviceResponse{
    slip:Advice
} 