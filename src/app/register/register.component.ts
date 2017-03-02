import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

import { COLONISTS_URL, JOBS_URL}  from '../models/API'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  marsJobs: Job[];
  registerForm: FormGroup;

  constructor() { 
    //TODO: call api, get jobs
    


    this.registerForm = new FormGroup ({ 
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      age: new FormControl('', [Validators.required, this.AcceptAge(18,50)]), 
      job_id: new FormControl('', [Validators.required]), 
    });

    this.getMarsJob();
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

getMarsJob() {
  console.log('Getting jobs...')

}

postNewColonist () {
  console.log('Posting colonist...')

}


}
