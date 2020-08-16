import { Goal } from '../shared/goal.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn : 'root'})
export class GoalsService{

    goalSub = new Subject<Goal[]>();

    constructor(private http: HttpClient){
        
    }

goals : Goal[]=[];

setGoals(g : Goal[]){
    this.goals = g;

    this.goalSub.next(this.goals);
}

getGoals(){
    return this.goals;
}

getGoal(id : number){
    return this.goals[id];
}


addGoal(g : Goal){

    this.goals.push(g);

    var newG = new Goal(g.zadatak,g.datum,g.obavljen);

    this.goalSub.next(this.goals);

  
    
}

updateGoal(id : number, goal : Goal){

    this.goals[id] = goal;

    this.goalSub.next(this.goals);
}

deleteGoal(id : number){
    this.goals.splice(id,1);

    this.goalSub.next(this.goals);
}


}