import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public icones = [];

  modalRef: BsModalRef;
  form: FormGroup
  iconeClass = ''
  searchTerm: string;
  iconeAux: any;

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      iconeModal: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  ngOnInit() {
    this.getIcones();
  }

  testePost() {
    const body = {
      email: 'mario123.canys@hotmail.com',
      firstName: 'Mário123',
      lastName: 'Pontes123'
    };

    this.http.post('http://localhost:3000/users', body)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  openModalCard(template: TemplateRef<any>) {
    this.form.get('iconeModal').setValue('');
    this.iconeClass = '';
    this.modalRef = this.modalService.show(template);
  }

  getIcones() {
    this.http.get('http://localhost:9000/icones').subscribe((data: any) => this.icones = data)
  }

  checkIcon() {
    this.iconeClass = this.form.get('iconeModal').value;
  }

  addIcon() {
    const tagIcon = this.form.get('iconeModal').value.trim();
    let letGo = true;


    this.icones.forEach(e => e.tagClass === tagIcon ? letGo = false : null)

    if (letGo) {
      const obj = { "tagClass": this.form.get('iconeModal').value.trim() };
      this.http.post('http://localhost:9000/icones', obj).subscribe(data => this.getIcones());
      this.modalRef.hide();
    } else {
      alert('Icone ja existente!')
    }

  }

  openModalDelete(template: Template, icone) {
    this.iconeAux = icone;
    this.modalRef = this.modalService.show(template);
  }

  deleteIcon() {
    this.http.delete(`http://localhost:9000/icones/${this.iconeAux.id}`).subscribe(data => this.getIcones());
    this.modalRef.hide();
  }

}
