import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Pegando os valores

  valorConta!: number ;
  gorjetaPercentual!: number ;
  numPessoas!: number ;

  gorjetaPorPessoa: number = 0;
  totalPorPessoa: number = 0;

  // Array de porcentagem dos botoes
  porcentagens = [5, 10, 15, 25, 50,];

  calcularGorjeta() {
    if (this.valorConta > 0 && this.numPessoas > 0) {
      const gorjetaTotal = (this.valorConta * this.gorjetaPercentual) / 100;
      this.gorjetaPorPessoa = gorjetaTotal / this.numPessoas;
      this.totalPorPessoa = (this.valorConta + gorjetaTotal) / this.numPessoas;

    } else {
      this.gorjetaPorPessoa = 0;
      this.totalPorPessoa = 0;
    }
  }

  selecionarPorcentagem(percent: number) {
    this.gorjetaPercentual = percent;
    this.calcularGorjeta();
  }

  // Botão que reseta os valores
  reset() {
    this.valorConta = 0;
    this.gorjetaPercentual = 0;
    this.numPessoas = 1;
    this.gorjetaPorPessoa = 0;
    this.totalPorPessoa = 0;
  }
}
