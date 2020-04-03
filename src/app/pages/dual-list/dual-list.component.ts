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

  addItem(contexto: any, card?: any, politica?: any) {

    if (contexto && !card && !politica) {
      contexto.selected = true;
      this.agrupamentoAdd.push(contexto)
    }


    if (contexto && card && !politica) {
      contexto.selected = true;
      card.selected = true;

      this.agrupamentoAdd.push(contexto)

      this.agrupamentoAdd.forEach(e => {
        e.cards.forEach((x, i) => {
          if (!x.selected) {
            e.cards.splice(i, 1)
          }
        })
      })

    }

    if (contexto && card && politica) {
    }

  }

  getDataFilter(value: Contexto[]) {
    this.contextoFilter = value;
    this.contextoFilter.map(e => {

      e.cards.map(c => {
        this.cardFilter.push(c)

        c.politicas.map(p => {
          let addOn = true;

          this.politicasFilter.forEach(o => o.id == p.id ? addOn = false : null);
          addOn ? this.politicasFilter.push(p) : null;
        })

      })
    })

    this.createForm();
  }

}



