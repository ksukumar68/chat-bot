import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { MessageService } from './messages.service';
import { Message } from './message.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	providers: [MessageService]
})
export class HomeComponent implements OnInit{
	constructor(private messageService: MessageService){}
	p = 0;
	number = [];
	user_message = [];
	question = [
		'What is your name Sir?',
		'What is your age Sir?',
	];
	ngOnInit(){

	}
	@ViewChild('f') usermsg: NgForm;
		user = {
			usermsg: Message
		};
		file = null;
		submitted = false;
			onSubmit(form: NgForm){
				this.p = this.p+1;
			this.submitted = true;
			const message = new Message(form.value.user_msg);
			this.user.usermsg = form.value.user_msg;
			this.user_message.push(this.user.usermsg);
			this.messageService.addMessage(message)
			.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
	//		console.log(message);
			form.resetForm();
		}
		onSubmit1(form: NgForm){
				this.p = this.p+1;
			this.submitted = true;
			const message = new Message(form.value.user_msg);
			this.user.usermsg = form.value.user_msg;
//			console.log(message);
			this.messageService.addMessage(message)
			.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		
		seti(){
			if(this.p == 4){
				return true;
			}
			else{
				return false;
			}
		}
		seti1(){
			if(this.p == 3 || this.p == 4 || this.p == 5){
				return true;
			}
			else{
				return false;
			}
		}
		fileUpload(event){
			this.file = event.target.files[0].name;
			console.log(this.file);
			const message = new Message(this.file);
			this.messageService.addMessage(message)
			.subscribe(
					data => console.log(data),
					error => console.error(error)
				);
		}
		filename(){
			return this.file;
		}


}
}