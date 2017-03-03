import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

import { COLONISTS_URL, JOBS_URL}  from '../models/API';

import { ColonistAPIService } from '../apiService/colonists';
import { JobsAPIService } from '../apiService/jobs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})
export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;

  constructor(
    private colonistApiService: ColonistAPIService,
    private jobsApiService: JobsAPIService,
    private router: Router
    ) { 
    //TODO: call api, get jobs
    
    this.getMarsJobs();

    this.registerForm = new FormGroup ({ 
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      age: new FormControl('', [Validators.required, this.AcceptAge(18,50)]), 
      job_id: new FormControl('', [Validators.required]), 
    });

  }

  AcceptAge(min: number, max: number){
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value < min || control.value > max) {
        return { 'Sorry good luck' : { age: control.value }};
      }
    }
  }

  logColonist(){
    console.log(this.registerForm);
  }
    ngOnInit() {

    }

  getMarsJobs() {
    this.jobsApiService.getMarsJobs().subscribe((result) => {
      this.marsJobs = result;
    })
  }

  postNewColonist(event) {
    event.preventDefault();
    if(!this.registerForm.invalid){
      // the form is invalid...
    }else{
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist(name, age, job_id);

      this.colonistApiService.saveColonist({ colonist: newColonist }).subscribe((result) => {
        localStorage.setItem("colonist_id", JSON.stringify(result.id));
        this.router.navigate(['/encounters']);
        console.log('Colonist was saved:', result);
      });

      console.log('The colonist is ready for MARS:', newColonist);
    }

  }
}
