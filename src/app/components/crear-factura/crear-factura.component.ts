import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleFactura, Factura } from 'src/app/models/factura.model';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.scss'],
})
export class CrearFacturaComponent {
  factura: Factura = {
    cliente: '',
    fecha: '',
    detalles: [],
  };

  detalle: DetalleFactura = {
    descripcion: '',
    cantidad: 1,
    precioUnitario: 0,
  };

  constructor(
    private facturaService: FacturaService,
    private router: Router,
  ) {}

  agregarDetalle() {
    this.factura.detalles.push({ ...this.detalle });
    this.detalle = { descripcion: '', cantidad: 1, precioUnitario: 0 };
  }

  eliminarDetalle(index: number) {
    this.factura.detalles.splice(index, 1);
  }

  crearFactura() {
    this.factura.fecha = new Date().toISOString();
    this.facturaService.createFactura(this.factura).subscribe(() => {
      this.router.navigate(['/facturas']);
    });
  }
}
