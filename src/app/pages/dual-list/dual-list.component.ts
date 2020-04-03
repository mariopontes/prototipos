import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dual-list',
  templateUrl: './dual-list.component.html',
  styleUrls: ['./dual-list.component.scss']
})
export class DualListComponent implements OnInit {

  obj = [
    {
      "id": "6e465e69-3713-431d-9ed0-23dcfdc0adf5",
      "titulo": "Contexto Teste",
      "descricao": "Descricao Teste",
      "indice": 0,
      "iconFont": "fas fa-briefcase-medical",
      "cards": [
        {
          "id": "f03cdec9-7494-4b68-b71a-2d9c1ced1c7a",
          "nome": "Card1",
          "descricao": "Card1",
          "indice": 0,
          "url": "http://localhost:4230/#/signin-oidc/Card1",
          "tipoUrl": "interna",
          "iconFont": "fas fa-comment-medical",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": true
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": true
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": false
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": false
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            }
          ],
          "isRemoved": false
        }
      ],
      "version": 3
    },
    {
      "id": "46e82848-ffb8-473d-bacc-619679ef1bb5",
      "titulo": "Portaria",
      "descricao": "Portaria",
      "indice": 0,
      "iconFont": "fas fa-briefcase-medical",
      "cards": [
        {
          "id": "2eb25b15-a3b2-4b0e-9405-333e0f1a5143",
          "nome": "Guarita",
          "descricao": "Guarita",
          "indice": 0,
          "url": "http://localhost:4220/#/signin-oidc/Guarita",
          "tipoUrl": "interna",
          "iconFont": "fas fa-brain",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": false
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": false
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": true
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": false
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            },
            {
              "id": "b1c4cfd0-53b2-4dfa-9446-4a44b30f0039",
              "nome": "Imprimir histórico de paciente",
              "habilitado": true
            }
          ],
          "isRemoved": false
        },
        {
          "id": "b548dc63-5481-4ab8-9ba8-038a24e970ff",
          "nome": "asdasd",
          "descricao": "asdasdasd",
          "indice": 0,
          "url": "asasasd",
          "tipoUrl": "interna",
          "iconFont": "fas fa-crutch",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": true
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": false
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": false
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": false
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            }
          ],
          "isRemoved": false
        },
        {
          "id": "2478f750-c6af-42d2-8ff1-7eb575c2f117",
          "nome": "asdasd",
          "descricao": "asdasd",
          "indice": 0,
          "url": "asdasd",
          "tipoUrl": "interna",
          "iconFont": "fas fa-crutch",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": false
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": false
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": false
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": true
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            }
          ],
          "isRemoved": false
        },
        {
          "id": "5febf1f0-4a99-499b-9d1a-6089e046a263",
          "nome": "liberação de entrada",
          "descricao": "liberação de entrada",
          "indice": 0,
          "url": "http://localhost:4220/#/signin-oidc/liberação-de-entrada",
          "tipoUrl": "interna",
          "iconFont": "fas fa-clinic-medical",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": false
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": false
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": true
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": false
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            },
            {
              "id": "b1c4cfd0-53b2-4dfa-9446-4a44b30f0039",
              "nome": "Imprimir histórico de paciente",
              "habilitado": true
            }
          ],
          "isRemoved": false
        }
      ],
      "version": 3
    },
    {
      "id": "3b217697-906c-45b7-9076-1683bfb70054",
      "titulo": "saasdasd",
      "descricao": "asdasdasd",
      "indice": 0,
      "iconFont": "fas fa-briefcase-medical",
      "cards": [
        {
          "id": "bf18dfe2-1a34-44c8-83b0-4120c8b014a0",
          "nome": "asdasdas",
          "descricao": "dasdasd",
          "indice": 0,
          "url": "asdasdasd",
          "tipoUrl": "interna",
          "iconFont": "fas fa-brain",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": false
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": false
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": true
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": true
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            }
          ],
          "isRemoved": false
        },
        {
          "id": "ae5beb65-6d51-4808-b858-5f2c1048ac96",
          "nome": "asdasdas",
          "descricao": "sadsad",
          "indice": 0,
          "url": "asdasdasd",
          "tipoUrl": "interna",
          "iconFont": "fas fa-book-medical",
          "politicas": [
            {
              "id": "74d386d8-51ce-4441-9c6c-a9ce47911bbc",
              "nome": "Criar",
              "habilitado": false
            },
            {
              "id": "ab824d0c-f9aa-4e43-9254-7b691e1f6837",
              "nome": "Editar",
              "habilitado": false
            },
            {
              "id": "0c8bfd0f-bf88-4150-839c-aa95dde58e5c",
              "nome": "Visualizar",
              "habilitado": true
            },
            {
              "id": "5a9661c0-1ea0-47fb-9ab3-5a1c3bba88e2",
              "nome": "Ativar",
              "habilitado": true
            },
            {
              "id": "9ebb3fdc-1418-4759-baa3-844609633228",
              "nome": "Inativar",
              "habilitado": false
            }
          ],
          "isRemoved": true
        }
      ],
      "version": 1
    }
  ]

  constructor() { }

  ngOnInit() {
    this.createForm();
    this.getInstitutos();
    this.getAgrupamentos();
  }

  createForm() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      instituto: null
    })
  }

  getInstitutos() {
    this.baseService.onGet(environment.url.baseApi + environment.url.instituto.usoIris)
      .subscribe((data: any) => {
        this.institutos = JSON.parse(data.body);
        console.log('Institutos :', this.institutos)
      });
  }

  addInstitutos() {
    this.listInstitutos.push(this.form.get('instituto').value)
  }

  deleteInstituto(instituto: any) {
    this.listInstitutos.forEach((e, i) => {
      if (e.Id == instituto.Id) {
        console.log('Caiu Aqui', e.Id, instituto.Id)
        this.listInstitutos.splice(i, 1)
      }
    })
  }

  getAgrupamentos() {
    this.http.get(environment.url.baseApi + environment.url.contexto.ativos)
      .subscribe((data: any) => {
        // this.context = data;
        // this.context.map(e => {

        //   e.cards.map(c => {
        //     this.card.push(c)

        //     c.politicas.map(p => {
        //       let addOn = true;

        //       this.politica.forEach(o => o.id == p.id ? addOn = false : null);
        //       addOn ? this.politica.push(p) : null;
        //     })

        //   })
        // })

        this.agrupamento = data

        console.log('Contextos :', this.agrupamento)
      });
  }

}
