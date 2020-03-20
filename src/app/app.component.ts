import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public icones = [
    {
      "tagClass": "fas fa-allergies"
    },
    {
      "tagClass": "fas fa-ambulance",
    },
    {
      "tagClass": "fas fa-band-aid",
    },
    {
      "tagClass": "fas fa-biohazard",
    },
    {
      "tagClass": "fas fa-bone",
    },
    {
      "tagClass": "fas fa-bong",
    },
    {
      "tagClass": "fas fa-book-medical",
    },
    {
      "tagClass": "fas fa-brain",
    },
    {
      "tagClass": "fas fa-briefcase-medical",
    },
    {
      "tagClass": "fas fa-burn",
    },
    {
      "tagClass": "fas fa-cannabis",
    },
    {
      "tagClass": "fas fa-capsules",
    },
    {
      "tagClass": "fas fa-clinic-medical",
    },
    {
      "tagClass": "fas fa-comment-medical",
    },
    {
      "tagClass": "fas fa-crutch",
    },
    {
      "tagClass": "fas fa-diagnoses",
    },
    {
      "tagClass": "fas fa-dna",
    },
    {
      "tagClass": "fas fa-file-medical",
    },
    {
      "tagClass": "fas fa-file-medical-alt",
    },
    {
      "tagClass": "fas fa-file-prescription",
    },
    {
      "tagClass": "fas fa-first-aid",
    },
    {
      "tagClass": "fas fa-heart",
    },
    {
      "tagClass": "far fa-heart",
    },
    {
      "tagClass": "fas fa-heartbeat",
    },
    {
      "tagClass": "fas fa-hospital",
    },
    {
      "tagClass": "far fa-hospital",
    },
    {
      "tagClass": "fas fa-hospital-alt",
    },
    {
      "tagClass": "fas fa-hospital-symbol",
    },
    {
      "tagClass": "fas fa-id-card-alt",
    },
    {
      "tagClass": "fas fa-joint",
    },
    {
      "tagClass": "fas fa-laptop-medical",
    }, {
      "tagClass": "fas fa-allergies"
    },
    {
      "tagClass": "fas fa-ambulance",
    },
    {
      "tagClass": "fas fa-band-aid",
    },
    {
      "tagClass": "fas fa-biohazard",
    },
    {
      "tagClass": "fas fa-bone",
    },
    {
      "tagClass": "fas fa-bong",
    },
    {
      "tagClass": "fas fa-book-medical",
    },
    {
      "tagClass": "fas fa-brain",
    },
    {
      "tagClass": "fas fa-briefcase-medical",
    },
    {
      "tagClass": "fas fa-burn",
    },
    {
      "tagClass": "fas fa-cannabis",
    },
    {
      "tagClass": "fas fa-capsules",
    },
    {
      "tagClass": "fas fa-clinic-medical",
    },
    {
      "tagClass": "fas fa-comment-medical",
    },
    {
      "tagClass": "fas fa-crutch",
    },
    {
      "tagClass": "fas fa-diagnoses",
    },
    {
      "tagClass": "fas fa-dna",
    },
    {
      "tagClass": "fas fa-file-medical",
    },
    {
      "tagClass": "fas fa-file-medical-alt",
    },
    {
      "tagClass": "fas fa-file-prescription",
    },
    {
      "tagClass": "fas fa-first-aid",
    },
    {
      "tagClass": "fas fa-heart",
    },
    {
      "tagClass": "far fa-heart",
    },
    {
      "tagClass": "fas fa-heartbeat",
    },
    {
      "tagClass": "fas fa-hospital",
    },
    {
      "tagClass": "far fa-hospital",
    },
    {
      "tagClass": "fas fa-hospital-alt",
    },
    {
      "tagClass": "fas fa-hospital-symbol",
    },
    {
      "tagClass": "fas fa-id-card-alt",
    },
    {
      "tagClass": "fas fa-joint",
    },
    {
      "tagClass": "fas fa-laptop-medical",
    }, {
      "tagClass": "fas fa-allergies"
    },
    {
      "tagClass": "fas fa-ambulance",
    },
    {
      "tagClass": "fas fa-band-aid",
    },
    {
      "tagClass": "fas fa-biohazard",
    },
    {
      "tagClass": "fas fa-bone",
    },
    {
      "tagClass": "fas fa-bong",
    },
    {
      "tagClass": "fas fa-book-medical",
    },
    {
      "tagClass": "fas fa-brain",
    },
    {
      "tagClass": "fas fa-briefcase-medical",
    },
    {
      "tagClass": "fas fa-burn",
    },
    {
      "tagClass": "fas fa-cannabis",
    },
    {
      "tagClass": "fas fa-capsules",
    },
    {
      "tagClass": "fas fa-clinic-medical",
    },
    {
      "tagClass": "fas fa-comment-medical",
    },
    {
      "tagClass": "fas fa-crutch",
    },
    {
      "tagClass": "fas fa-diagnoses",
    },
    {
      "tagClass": "fas fa-dna",
    },
    {
      "tagClass": "fas fa-file-medical",
    },
    {
      "tagClass": "fas fa-file-medical-alt",
    },
    {
      "tagClass": "fas fa-file-prescription",
    },
    {
      "tagClass": "fas fa-first-aid",
    },
    {
      "tagClass": "fas fa-heart",
    },
    {
      "tagClass": "far fa-heart",
    },
    {
      "tagClass": "fas fa-heartbeat",
    },
    {
      "tagClass": "fas fa-hospital",
    },
    {
      "tagClass": "far fa-hospital",
    },
    {
      "tagClass": "fas fa-hospital-alt",
    },
    {
      "tagClass": "fas fa-hospital-symbol",
    },
    {
      "tagClass": "fas fa-id-card-alt",
    },
    {
      "tagClass": "fas fa-joint",
    },
    {
      "tagClass": "fas fa-laptop-medical",
    }, {
      "tagClass": "fas fa-allergies"
    },
    {
      "tagClass": "fas fa-ambulance",
    },
    {
      "tagClass": "fas fa-band-aid",
    },
    {
      "tagClass": "fas fa-biohazard",
    },
    {
      "tagClass": "fas fa-bone",
    },
    {
      "tagClass": "fas fa-bong",
    },
    {
      "tagClass": "fas fa-book-medical",
    },
    {
      "tagClass": "fas fa-brain",
    },
    {
      "tagClass": "fas fa-briefcase-medical",
    },
    {
      "tagClass": "fas fa-burn",
    },
    {
      "tagClass": "fas fa-cannabis",
    },
    {
      "tagClass": "fas fa-capsules",
    },
    {
      "tagClass": "fas fa-clinic-medical",
    },
    {
      "tagClass": "fas fa-comment-medical",
    },
    {
      "tagClass": "fas fa-crutch",
    },
    {
      "tagClass": "fas fa-diagnoses",
    },
    {
      "tagClass": "fas fa-dna",
    },
    {
      "tagClass": "fas fa-file-medical",
    }

  ]

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

  ngOnInit() { }

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

  checkIcon(value: string) {
    this.iconeClass = value;
  }

  addIcon(value) {
    const obj = {
      "tagClass": value
    }
    this.icones.unshift(obj)
    this.modalRef.hide();
  }

  openModalDelete(template, icone) {
    this.iconeAux = icone;
    this.modalRef = this.modalService.show(template);
  }

  deleteIcon() {
    this.icones.forEach((e, i) => e.tagClass == this.iconeAux ? this.icones.splice(i, 1) : null)
    this.modalRef.hide();
  }
}
