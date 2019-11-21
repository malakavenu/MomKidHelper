import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  message: string;

  constructor(private data: ShareService) { }

  ngOnInit() {
  }
  className(num) {
    this.data.changeMessage(num);
  }

}
