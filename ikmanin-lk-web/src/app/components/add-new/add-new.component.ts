import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/data-models/Advertisement';
import {Location} from 'src/app/data-models/Location';




@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
userModel = new Advertisement();
locationModel = new Location();

 onSubmit(){
   console.log(this.userModel);
   console.log(this.locationModel);

 }
  constructor() { }

  ngOnInit(): void {
  }

}
