import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Patient modules
import { InitialFormComponent } from './initial-form/initial-form.component';

const routes: Routes = [{
		path: '',
		component: InitialFormComponent
	},
	{
		path: 'initial-form/:patientId',
		component: InitialFormComponent	
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
