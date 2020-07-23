import { Component, OnInit } from '@angular/core';
import { Shelter } from './shelter';
import { ShelterService } from '../shelter.service';
import { Observable } from 'rxjs';

 
@Component({
  selector: 'app-shelter-list',
  templateUrl: './shelterListComponent.html'
  //styleUrls: ['./shelterListComponent.css']
})
export class ShelterListComponent implements OnInit {
 
  shelters: Shelter[];
 
  constructor(private shelterService: ShelterService) {
  }
 
  ngOnInit() {
    this.shelterService.findAll().subscribe(data => {
      this.shelters = data;
    });
  }
}
