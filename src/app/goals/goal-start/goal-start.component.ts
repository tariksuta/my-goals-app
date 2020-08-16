import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoalsService } from '../goals.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-goal-start',
  templateUrl: './goal-start.component.html',
  styleUrls: ['./goal-start.component.css']
})
export class GoalStartComponent implements OnInit {

 

  constructor(private goalsService : GoalsService) { }

  preuzetiCiljevi : boolean = false;

  

  ngOnInit(): void {

      this.preuzetiCiljevi = this.goalsService.getGoals().length > 0 ? true : false;

   
  }

   
  
}
