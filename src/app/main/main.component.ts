import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-main',
  	templateUrl: './main.component.html',
  	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	userSelect = null;
	choice = null;
	compChoice = null;
	winner = null;

	userScore = 0;
	compScore = 0;
	tieScore = 0;

	loading = false;

	randomChoices = ['rock', 'paper', 'scissors']; //array for computer's choices.

  	constructor(
  		library: FaIconLibrary,
    	private titleService: Title
  	) { 
  		library.addIconPacks(fas, far);
  	}

  	public setTitle() {
      this.titleService.setTitle( "Dashboard" );
    }

  	ngOnInit(): void {
    	this.setTitle();
  	}

  	selectOption(selection){
  		this.loading = true;
  		this.choice = selection;
  		this.compChoice = this.randomChoices[Math.floor(Math.random() * this.randomChoices.length)]; //get random pick from array for computer's choice.

  		//check winner based on user's selection and computer's pick.
  		switch (selection) {
		  	case "rock":
		  		this.loading = false;
		  		if(this.compChoice == 'rock'){
		  			this.winner = 'tie';
		  			this.tieScore++;
		  		}else if(this.compChoice == 'paper'){
		  			this.winner = 'computer';
		  			this.compScore++;
		  		}else{
		  			this.winner = 'user';
		  			this.userScore++;
		  		}
		    	break;
		  	case "paper":
		  		this.loading = false;
		    	if(this.compChoice == 'rock'){
		  			this.winner = 'user';
		  			this.userScore++;
		  		}else if(this.compChoice == 'paper'){
		  			this.winner = 'tie';
		  			this.tieScore++;
		  		}else{
		  			this.winner = 'computer';
		  			this.compScore++;
		  		}
		    	break;
		  	case "scissors":
		  		this.loading = false;
		    	if(this.compChoice == 'rock'){
		  			this.winner = 'computer';
		  			this.compScore++;
		  		}else if(this.compChoice == 'paper'){
		  			this.winner = 'user';
		  			this.userScore++;
		  		}else{
		  			this.winner = 'tie';
		  			this.tieScore++;
		  		}
		    	break;
		  	default:
		  		this.loading = false;
		    	console.log('fail');
		}
  	}
}
