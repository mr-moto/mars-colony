import { Component, OnInit } from '@angular/core';
import { NewEncounter, Encounter } from '../models';

import { ENCOUNTERS_URL}  from '../models/API';

import { EncounterAPIService } from '../apiService/encounters';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [EncounterAPIService]
})
export class EncountersComponent implements OnInit {

    marsEncounter: Encounter[];

    constructor(
          private encounterApiService: EncounterAPIService,
          private router: Router
    ) { 
      this.getMarsEncounters()
    }

    ngOnInit() {
    }

    getMarsEncounters() {
      this.encounterApiService.getMarsEncounters().subscribe((encounters) => {
        this.marsEncounter = encounters;
      })
    }

}
