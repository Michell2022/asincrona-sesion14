import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  
  verificador = true;

  // VARIABLE QUE ENVIARA MI OBJETO AL COMPONENTE HIJO
  subtitulo!:string;

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('[a-zA-Z ]*')
        ]
      ],
      dni: ['',
        [
          Validators.required,
        ]
      ],
      estado_civil: ['',
        [
          Validators.required,
        ]
      ]
    })
  }

  send(): any {
    this.subtitulo = (this.formLogin.value);
    this.verificador = true;
  }

}
