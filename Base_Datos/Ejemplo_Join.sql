select usuarios.id, usuarios.nombre, usuarios.correo , ventas.precio_total, ventas.fecha, productos.nombre , productos.descripcion1, productos.descripcion2 from usuarios
inner JOIN ventas
ON ventas.usuarios_id = usuarios.id
inner JOIN productos
on productos.id = ventas.productos_id
where precio_total <800
order by id asc;