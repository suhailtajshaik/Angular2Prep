import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isActive=true;
  email="hello@domain.com";
  
  onSave(){
    console.log(this.email);
  }
}
