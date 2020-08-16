
import { Injectable} from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import { Goal} from '../shared/goal.model';
import { DataStorageService} from '../shared/data-storage.service';
import { GoalsService } from './goals.service';

@Injectable({providedIn : 'root'})
export class GoalsResolverService implements Resolve<Goal[]>{

    constructor(private dataStorageService: DataStorageService,
        private goalsService : GoalsService){}

    resolve( route : ActivatedRouteSnapshot, state : RouterStateSnapshot){

        const goals = this.goalsService.getGoals();

        if(goals.length === 0){
            this.dataStorageService.fetchGoals();
        }else{
            return goals;
        }
    }

}