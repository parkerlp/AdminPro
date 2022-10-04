import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
//import { customInitFunctions } from '../../assets/js/custom.js'

//declare function customInitFunctions = ();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  constructor( private settingsService: SettingsService ) { }

  ngOnInit(): void { 
 //   customInitFunctions();
  }

}

