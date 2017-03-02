import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;

  constructor() { 
    //TODO: call api, get jobs
    this.marsJobs = [
      { name: "Alien Hunter", id: "1", description: "Hunting Aliens is life." },
      { name: "Wizard", id: "2", description: "Pew Pew" },
      { name: "Pet Store Owner", id: "3", description: "Dogs and Cats, mostly dogs" },
      { name: "Hooker", id: "4", description: "Fun times" },
    ];
    this.registerForm = new FormGroup ({ 
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      age: new FormControl('', [Validators.required, this.AcceptAge(18,50)]), 
      job_id: new FormControl('', [Validators.required]), 
    })
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

}
