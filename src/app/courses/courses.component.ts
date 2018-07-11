import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor() { }

  cources = {
    title:"The complete angular cource",
    rating: 4.9745,
    students: 30123,
    price:190.95,
    releaseDate: new Date(2018,3,1)
  }
}
