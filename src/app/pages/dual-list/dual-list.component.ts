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
  contextos = []
  cards = []
  politicas = []


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
        this.agrupamento = data
        this.contextos = data;
        this.getDataFilter();
      })
  }

  addItem(contexto: any, card?: any, politica?: any) {

    if (contexto && !card && !politica) {

    }

    if (contexto && card && !politica) {

    }

    if (contexto && card && politica) {
      //
    }

  }

  getDataFilter() {
    this.contextos.map(e => {

      e.cards.map(c => {
        this.cards.push(c)

        c.politicas.map(p => {
          let addOn = true;

          this.politicas.forEach(o => o.id == p.id ? addOn = false : null);
          addOn ? this.politicas.push(p) : null;
        })

      })
    })

    console.log(this.contextos)
    console.log(this.cards)
    console.log(this.politicas)

  }

}



