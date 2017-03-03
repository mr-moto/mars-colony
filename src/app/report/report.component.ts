import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien} from '../models'
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';

import { ALIENS_URL}  from '../models/API';

import { AliensAPIService } from '../apiService/aliens';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService]
})
export class ReportComponent implements OnInit {
  marsAliens: Alien [];
  reportForm: FormGroup;

  constructor(
    private aliensApiService: AliensAPIService,
  ) { 


    this.getMarsAliens();

    this.reportForm = new FormGroup ({ 
      textarea: new FormControl('', [Validators.required]),
      alientype: new FormControl('', [Validators.required])
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

}
