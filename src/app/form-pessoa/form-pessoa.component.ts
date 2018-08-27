import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})



export class FormPessoaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  @ViewChild('cadastroSucesso') private cadastroSucesso: SwalComponent;
  submitted = false;

  listaPessoas: Array<Pessoa> = new Array<Pessoa> ();

  model = new Pessoa(1, 'None', 0);
  registerForm: FormGroup;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.model.nome = this.registerForm.controls.nome.value;
    this.model.idade = this.registerForm.controls.idade.value;

    this.listaPessoas.push(new Pessoa(1, this.model.nome,  this.model.idade));
    console.log(this.listaPessoas);
    this.cadastroSucesso.show();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required]
    });
  }

  reciverFeedback(respostaPessoa) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaPessoa);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  get f() { return this.registerForm.controls; }

}
