import { Component, OnInit } from '@angular/core';
import { DataSelectService, Person } from 'src/app/services/data-select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  people: Person[] = [];
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  selectedSimpleItem = 'Two';
  simpleItems = [];
  selectedCars = [3];

  constructor(private dataService: DataSelectService) { }

  ngOnInit() {
    this.dataService.getPeople().subscribe(items => this.people = items);
    this.simpleItems = [true, 'Two', 3];
  }

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  toggleDisabled() {
    const car: any = this.cars[1];
    car.disabled = !car.disabled;
  }
}
