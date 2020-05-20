import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/data-models/Advertisement';
import {Location} from 'src/app/data-models/Location';
import { AddnewService } from 'src/app/services/advertisement-services/addnew.service';




@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
userModel = new Advertisement();
locationModel = new Location();
category = ['Motorbikes and Scooters','Three Wheelers','Bicycles','Vans','Buses','Lorries','Cars'];
brand = ['Aprilia','Bajaj','BMW','Chapper','Demak','Haley Davison','Heero','Honda','Kinetic','KTM','Loncin','Mahindra','Ranamoto','Royal Enfield','Scooty','Suzuki','TVS','Vespa','Yamaha','*Other Brand'];


currentYear: number = new Date().getFullYear();

  constructor(private AddnewService: AddnewService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    return this.AddnewService.formsubmit(this.userModel);


    }

}
