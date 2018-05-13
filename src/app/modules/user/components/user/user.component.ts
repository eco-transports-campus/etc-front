import { Component, OnInit } from '@angular/core';

const User = {
	firstName : "Clément",
	lastName : "Garin",
	contact : {
		phone : "6666666666",
		secondaryMail : "clement.garin@clement.com",
		universityMail : "clement.garin@uni.com",
	},
	dailyCarTrips : {
		trips: [ 
			{start:"PARIS AUSTERLITZ", end:"ORSAY" },
			{start:"START", end:"END", id:1}
		],
		firstName : "Clément",
		lastName : "Garin"
	},
	notificationPreference : [
		"Demande quotidiennes sur vos trajets",
		"Trajet Trouvé"
	],
	transport : [
		"Train",
		"RER",
		"A Pied",
		"Tram",
		"Métro",
		"Voiture",
		"Camion",
		"Moto"
	]
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

	public user; 
	
  constructor() { }

  fetchKeys(obj) {
  	return Object.keys(obj)
  }

  ngOnInit() {
  	this.user = User;
  }

}
