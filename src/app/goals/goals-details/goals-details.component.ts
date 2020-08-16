import { Component, OnInit, Input } from '@angular/core';
import { Goal } from 'src/app/shared/goal.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-goals-details',
  templateUrl: './goals-details.component.html',
  styleUrls: ['./goals-details.component.css']
})
export class GoalsDetailsComponent implements OnInit {

   goal : Goal;
  id:number;
  constructor(private route : ActivatedRoute, private goalsService : GoalsService,
    private router : Router) { }

  ngOnInit(): void {

    this.route.params.subscribe( 
      (params : Params) => {
        this.id = +params['id'];

        this.goal = this.goalsService.getGoal(this.id);
      }
    );
  }

  zavrsi(){

    var g = new Goal(this.goal.zadatak,this.goal.datum,true);

    if(this.goal.obavljen == false){
      this.goal.obavljen = true;
    }else{
      g.obavljen = false;
      this.goal.obavljen = false;
    }
  

    this.goalsService.updateGoal(this.id,g);


    

  }

  obrisi(){

    this.goalsService.deleteGoal(this.id);

    this.router.navigate(['../'], { relativeTo : this.route});
  }

  zatvori(){

    this.router.navigate(['../'], { relativeTo : this.route});
  }

}
