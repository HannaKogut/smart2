import { Component, OnInit } from '@angular/core';
import {TimelineLite, TweenLite} from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

	showDescription() {

		let logo = document.getElementById("logo");
TweenLite.to(logo, 2, {width:"200px", height:"550px"})
	}
}
