export class Job {

    constructor(
        public jobid: number, 
        public userid: number,
        public skillid: number,
        public title: string,
        public location: string,
        public company: string,
        public website: string,
        public postdate: string,
        public description: string
    ) {}
}