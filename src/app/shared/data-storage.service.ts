import { HttpClient } from '@angular/common/http';
import { GoalsService } from '../goals/goals.service';
import {tap, map} from 'rxjs/operators';
import { Goal } from './goal.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class DataStorageService{

    constructor(private http: HttpClient, private goalsServcie : GoalsService){}

    fetchGoals() {

        return this.http.get<Goal[]>('https://goals-d138d.firebaseio.com/goals.json')
         .subscribe(

            goals => {
                this.goalsServcie.setGoals(goals);
            }
         );
    }

   
    saveGoals(){
        var goals = this.goalsServcie.getGoals();

        this.http.put('https://goals-d138d.firebaseio.com/goals.json', goals).subscribe();
    }

    

}