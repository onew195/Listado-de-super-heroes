import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['hulk', 'Saitama', 'Superman', 'thor', 'goku'];
  borrado: string="";

  borrarElemento(): void{
    this.borrado = this.heroes.pop();
  }
  mostrar():string{
    if(this.borrado!="")
      return this.borrado+" eliminado";
  }
}
