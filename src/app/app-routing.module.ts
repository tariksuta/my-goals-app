import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { GoalsDetailsComponent } from './goals/goals-details/goals-details.component';
import { GoalStartComponent } from './goals/goal-start/goal-start.component';
import { GoalsResolverService } from './goals/goals-resolver.service';

const routes: Routes = [
  {path:'', redirectTo:'/goals', pathMatch:'full'},
  { path:'goals', component:GoalsComponent, children : [
    {path :'', component:GoalStartComponent},
    {path :':id', component:GoalsDetailsComponent, resolve :[GoalsResolverService]}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
