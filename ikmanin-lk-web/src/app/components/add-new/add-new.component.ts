import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/data-models/Advertisement';
import {Location} from 'src/app/data-models/Location';
import {AddNewService } from 'src/app/services/advertisement-services/add-new.service';





@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
userModel = new Advertisement();
locationModel = new Location();

 onSubmit(){
   this.addnewservice.submitForm1(this.userModel).subscribe (
     data => console.log('Sucess !' , data),
     error => console.error('Error', error)
 );

   this.addnewservice.submitFormlocation(this.locationModel).subscribe (
  data => console.log('Sucess !' , data),
  error => console.error('Error', error)
);

 }
  constructor( private addnewservice: AddNewService) { }

  ngOnInit(): void {
  }

}
