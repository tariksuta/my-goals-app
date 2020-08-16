import { Component, OnInit, OnDestroy } from '@angular/core';

import {Goal} from '../shared/goal.model';
import { GoalsService } from './goals.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit , OnDestroy {

  goals : Goal[]=[];

  subsrciptionGoal : Subscription;

  izabran: Goal;

  zadatak:string="";
  datum : Date;
  constructor(private goalsService : GoalsService,private dataStorage : DataStorageService) { }

  ngOnInit(): void {

    this.subsrciptionGoal =  this.goalsService.goalSub.subscribe(

      (data : any[]) =>{
        this.goals = data as Goal[] ;


        

        console.log(this.goals);
      }
     );
  }

  onAdd(){
    var g = new Goal(this.zadatak,this.datum,false);

    this.goalsService.addGoal(g);
  }

  prikazi( g : Goal){
    this.izabran = g;
  }

  preuzmiSve(){
    this.dataStorage.fetchGoals();
  }
  spasiSve(){
    this.dataStorage.saveGoals();
  }
  ngOnDestroy(){
    this.subsrciptionGoal.unsubscribe();
  }

}
