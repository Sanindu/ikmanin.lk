import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/data-models/Advertisement';
import {Location} from 'src/app/data-models/Location';
import { ViewChild } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement-services/advertisement.service';
import { Advertisement } from '../../data-models/Advertisement';




@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
userModel = new Advertisement();
locationModel = new Location();

 onSubmit(){
  constructor() { }
   console.log(this.locationModel);
   console.log(this.userModel);

  constructor(
    private advertisementService : AdvertisementService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.advertisement.userId="5e9854be3bc34b73581b272d"
    this.advertisement.status=true;
    this.advertisement.lastUpdatedTime = new Date().toISOString()
    console.log(this.advertisement)
    
  }

  handleLogin(){
    this.advertisement.userId="5e9b7f55b3519e708848aace"
    this.advertisement.status=true;
    this.advertisement.lastUpdatedTime = new Date().toISOString()
    console.log(this.advertisement)
    this.form.reset()
    this.advertisementService.postAnAdvertisement(this.advertisement,this.advertisement.userId).subscribe(
      response => console.log(response)
    )
    
  }

}
