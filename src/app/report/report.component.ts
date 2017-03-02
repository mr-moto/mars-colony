import { Component, OnInit } from '@angular/core';
import { NewEncounter, Alien} from '../models'
import { FormGroup, FormControl, FormBuilder, Validators,ValidatorFn,  AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  marsAliens: Alien [];
  reportForm: FormGroup;

  constructor() { 

    this.marsAliens = [
      { id: '1', type: '123', description: '12', submitted_by: 'shit'},
      { id: '2', type: 'asdf', description: '99', submitted_by: 'asdf'}
    ];

    this.reportForm = new FormGroup ({ 
      type: new FormControl('', [Validators.required]),
      date: new FormControl('',[Validators.required]),
      colonist_id: new FormControl('',[Validators.required]),
      atype: new FormControl('',[Validators.required]),
      action: new FormControl('',[Validators.required]), 
    })
  }

logEncounter(){
  console.log(this.reportForm);
}

  ngOnInit() {
  }

}
