import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message:string = this.messageSvc.message;

  constructor(private messageSvc: MessagesService) { }

  ngOnInit() {
  }

 



}
