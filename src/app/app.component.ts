import { Component, OnInit } from '@angular/core';
import { TimelineLite, TweenLite, Elastic} from 'gsap';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
showDescription() {
    let logo = document.getElementById('logo');
    TweenLite.to(logo, 0.3, { opacity: 0.1 });
    let mainDescription = document.getElementById('mainDescription');
    TweenLite.to(mainDescription, 1, {opacity: 1, ease: Elastic.easeOut})
    let dialogSVG = document.getElementsByClassName('dialogSVG');
    TweenLite.fromTo(dialogSVG, 1, {y: -150,}, {y: 0, opacity: 1, ease: Elastic.easeOut})
  }
}