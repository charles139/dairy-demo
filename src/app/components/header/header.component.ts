import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  animations: [
    trigger('openClose', [
      state('open', style({
        top: '0px',
        backgroundColor: '#ffffff'
      })),
      state('closed', style({
        top: '-60px',
        backgroundColor: 'rgba(255,255,255,0)'
      })),
      transition('open => closed', 
        animate(5000)
      ),
      transition('closed => open', 
        animate(5000)
      ),
    ]),
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  subMenuIsOpen:boolean ;
  subHeaderIsOpen:boolean ;

  constructor() {
    this.subMenuIsOpen = false;
    this.subHeaderIsOpen = false;
  }

  ngOnInit() {
  }

  showSubMenu() {
    this.subMenuIsOpen = !this.subMenuIsOpen;
  }

  showSubHeader() {
    this.subHeaderIsOpen = !this.subHeaderIsOpen;
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    let subHeader = document.getElementById('sub-header');
    const verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(verticalOffset);
    if(verticalOffset > 39) {
      console.log("greater than 39");
      this.subHeaderIsOpen = true;
    } else {
      this.subHeaderIsOpen = false;
    }
  } 

}
