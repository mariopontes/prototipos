import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.scss']
})
export class DualListComponent implements OnInit {

  form: FormGroup;

  agrupamento = []
  agrupamentoAdd = []
  listInstitutos: any;


  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.getAgrupamentos();
  }

  createForm() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      instituto: null
    })
  }

  getAgrupamentos() {
    this.http.get('http://localhost:9000/dual-list')
      .subscribe((data: any) => {
        debugger
        this.agrupamento = data
      })
  }

  addItem() {

  }

}



