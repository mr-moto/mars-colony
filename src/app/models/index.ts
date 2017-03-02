export interface Job {
    name: string;
    id: string;
    description: string;
}

export class NewColonist{
    name: string;
    age: string;
    job_id: string;
    constructor(name: string, age: string, job_id: string){
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export class NewEncounter {
    atype: string;
    date: string;
    action: string;
    colonist_id: string;
}

export interface Colonist {
    name: string;
    id: string;
    age: string;
    job: Job;
}

export interface Alien {
    id: string;
    type: string;
    description: string;
    submitted_by: string;   
}

export interface Encounter {
    id: string;
    date: string;
    colonist_id: string;
    atype: string;
    action: string;
}
