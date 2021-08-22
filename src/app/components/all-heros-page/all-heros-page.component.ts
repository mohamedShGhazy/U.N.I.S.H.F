import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import *as allHeros from  '../../APIS/allHeros'

@Component({
  selector: 'app-all-heros-page',
  templateUrl: './all-heros-page.component.html',
  styleUrls: ['./all-heros-page.component.css']
})
export class AllHerosPageComponent implements OnInit {
allHerosData = allHeros.AllHeros()
name:any
  constructor(private services :ServicesService) { }

  ngOnInit(): void {
    console.log(this.allHerosData)
  }
sort(){
  this.allHerosData.sort((a,b) => a.name.localeCompare(b.name));
}
}
