import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien} from '../models'
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';

import { ALIENS_URL, ENCOUNTERS_URL}  from '../models/API';

import { AliensAPIService } from '../apiService/aliens';
import { EncounterAPIService } from '../apiService/encounters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncounterAPIService]
})
export class ReportComponent implements OnInit {
  marsAliens: Alien [];
  reportForm: FormGroup;
  clickedButton: boolean;

  constructor(
    private aliensApiService: AliensAPIService,
    private encounterApiService: EncounterAPIService,
    private router: Router
  ) { 


    this.getMarsAliens();

    this.clickedButton = false;

    this.reportForm = new FormGroup ({ 
      action: new FormControl('', [Validators.required]),
      atype: new FormControl('', [Validators.required])
    })
  }

logEncounter(){
  console.log(this.reportForm);
}

  ngOnInit() {
  }

  getMarsAliens() {
    this.aliensApiService.getMarsAliens().subscribe((result) => {
      this.marsAliens = result;
    })
  }



 private getDate(){
      const d  = new Date();
      return `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;
  }



  postNewEncounter(event) {
      event.preventDefault();
      console.log('button working?');
      this.clickedButton = true;
      if(this.reportForm.invalid){
        // the form is invalid...
      }else{
        const atype = this.reportForm.get('atype').value;
        const date = this.getDate();
        const action = this.reportForm.get('action').value;
        const colonist_id = localStorage.getItem("colonist_id");
        const newEncounter = new NewEncounter(atype, date, action, colonist_id);
        
        this.encounterApiService.saveEncounter({ encounter: newEncounter }).subscribe((result) => {
          this.router.navigate(['/encounters']);
          console.log('Encounter was saved:', result);
        });
      }
    }
}
