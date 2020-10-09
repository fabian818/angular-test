import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Commit } from '../commit';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    commits: Commit;

    constructor(private mainService: MainService) { }

    ngOnInit(): void {
        this.mainService.getCommits()
            .subscribe((data: any) => this.commits = data.map(obj => {
                console.log(obj);
                return {
                    message: obj.commit.message,
                    date: obj.commit.committer.date,
                    commiter: obj.commit.committer.name
                }
            }));
    }

}
