import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { MessageService } from './messages.service';
import { Message } from './message.model';

@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	providers: [MessageService]
})
export class MessagesComponent implements OnInit{
	@Input() message: Message;
	constructor(private messageService: MessageService){}
	
	ngOnInit(){
		
	}
}