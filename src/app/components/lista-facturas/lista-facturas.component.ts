import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.scss'],
})
export class ListaFacturasComponent implements OnInit {
  facturas: Factura[] = [];

  constructor(private facturaService: FacturaService) {}

  ngOnInit() {
    this.cargarFacturas();
  }

  cargarFacturas() {
    this.facturaService.getFacturas().subscribe((data: Factura[]) => {
      this.facturas = data;
    });
  }
}
