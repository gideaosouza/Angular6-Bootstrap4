import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-pessoa-view',
  templateUrl: './pessoa-view.component.html',
  styleUrls: ['./pessoa-view.component.css']
})
export class PessoaViewComponent implements OnInit {

  @Input() pessoa:Pessoa;
  @Output() respostaPessoa = new EventEmitter();

  constructor() { }

  Edita(event)
  {
    this.respostaPessoa.emit(this.pessoa);
  }

  ngOnInit() {
  }

}
