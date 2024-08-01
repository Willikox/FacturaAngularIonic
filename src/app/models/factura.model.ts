export interface DetalleFactura {
  id?: number;
  descripcion: string;
  cantidad: number;
  precioUnitario: number;
  total?: number;
}

export interface Factura {
  id?: number;
  cliente: string;
  fecha: string;
  detalles: DetalleFactura[];
  total?: number;
}
