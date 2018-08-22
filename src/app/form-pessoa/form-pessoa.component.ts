import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css']
})



export class FormPessoaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  submitted = false;

  model = new Pessoa(1, 'None', '0 Anos');
  registerForm: FormGroup;

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required]
    });
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  get f() { return this.registerForm.controls; }

}
