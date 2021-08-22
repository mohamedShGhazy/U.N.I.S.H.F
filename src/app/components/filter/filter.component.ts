import { Component, OnInit } from '@angular/core';
import * as allCountryies from '../../APIS/country';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  cuntories = allCountryies.countryies();
  allcountery: any;
  size = 5;
  name: any;
  phone: any;
  email: any;
  company: any;
  country: any;
  date: any;
  filterForm: any;

  constructor(private formBuilder: FormBuilder , private router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.formValidator() 
    this.allcountery = this.cuntories.slice(0, 5);
    console.log(this.route.snapshot.params)
    if(this.route.snapshot.params.user_name){
     this.filterForm.patchValue({
      name: this.route.snapshot.params.user_name,
      phone: this.route.snapshot.params.user_phone,
      country:this.route.snapshot.params.country,
      date:this.route.snapshot.params.date,
    });
    }
  }
  deCrease() {
    let sizeChange = (this.size -= 5);
    this.allcountery = this.cuntories.slice(0, sizeChange);
  }
  inCrease() {
    let sizeChange = (this.size += 5);
    this.allcountery = this.cuntories.slice(0, sizeChange);
  }
  formValidator() {
    this.filterForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required]],
      country: ['', Validators.required],
      date: ['', [Validators.required]],
    });
  }
  onSubmit() {
    let data={
     name:this.filterForm.value.name,
     phone:this.filterForm.value.phone,
     email:this.filterForm.value.email,
     country:this.filterForm.value.country,
     company:this.filterForm.value.company,
     date:this.filterForm.value.date,
    }
    console.log('data',data)
    let url= `/heroes?user_name=${data.name}&user_phone=${data.phone}&country=${data.country}&date=${data.date}`
    this.router.navigate(["/heroes",data.name,data.phone,data.country,data.date]);

  }
}
