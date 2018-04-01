import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Message } from './message.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MessageService implements OnInit{
	private message: Message[] = [];
	constructor(private http: Http){}
	ngOnInit(){

	}

	addMessage(message: Message){
		this.message.push(message);
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/message', body, { headers: headers })
		.map((response: Response) => response.json())
		.catch((error: Response) => Observable.throw(error.json()));
	}
}