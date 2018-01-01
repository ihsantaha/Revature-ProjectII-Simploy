import { Skill } from './Skill';
import { User } from './user';
export class Job {
   jobId: number;
   company: string;
   description: string;
   postDate: string;
   title: string;
   skills: Skill[];
   role: number;
   user: User;
}