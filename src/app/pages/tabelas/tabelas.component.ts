import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent implements OnInit {

  dtOptions: any = {
    responsive: true
  };

  constructor() { }

  ngOnInit() {
  }

}
