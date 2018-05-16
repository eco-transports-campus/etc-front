import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  searchroot(){

    console.log("Trouver un trajet !");
  }

  getInfo(){
    console.log("Afficher les détails du trajet !");
  }

  ngOnInit() {
  }

}
