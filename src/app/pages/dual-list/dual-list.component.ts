import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Contexto } from './contexto.model';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.scss']
})
export class DualListComponent implements OnInit {

  form: FormGroup;

  agrupamento = []
  agrupamentoAdd = []
  listInstitutos = []
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

  getDataFilter() {
    this.contextos.map(e => {

      e.cards.map(c => {
        this.cards.push(c)

        c.politicas.map(p => {
          let addOn = true;

          this.politicas.map(o => o.id == p.id ? addOn = false : null);
          addOn ? this.politicas.push(p) : null;
        })

      })
    })

    this.contextos.map(e => {
      delete e.cards
      e.cards = []
    })

    this.cards.map(e => {
      delete e.politicas
      e.politicas = []
    });
  }

  getAgrupamentos() {
    this.http.get('http://localhost:9000/dual-list')
      .subscribe((data: any) => {
        this.agrupamento = data
      })

    this.http.get('http://localhost:9000/dual-list')
      .subscribe((data: any) => {
        this.contextos = data;
        this.getDataFilter();
      })
  }

  addItem(idCont: any, idCard?: any, idPol?: any) {

    if (idCont && !idCard && !idPol) {
      console.log(idCont)
    }

    if (idCont && idCard && !idPol) {
      console.log(idCont, idCard)
    }

    if (idCont && idCard && idPol) {
      console.log(idCont, idCard, idPol)
    }

  }


}



