<?php
include_once("inc/menuSuperior.php");
include_once("inc/cabecera.php");
include_once("carrito.php");
?>
<!DOCTYPE html>
<html>
<head>
	<title>..CARRO DE COMPRAS..</title>
</head>
<body>
	
	<?php
	if (!empty($_SESSION['CARRO'])) {
		?>
		<table class="table table-light table-border">
			<tbody>
				<tr>
					<th width="40%">Nombre</th>
					<th width="15%">Precio</th>
					<th width="20%">Cantidad</th>
					<th width="20%">Total</th>
					<th width="5%">--</th>
				</tr>
				<?php
				$total=0;
				foreach ($_SESSION['CARRO'] as $indice => $producto) {
					?>
					<tr>
						<td width="40%"><?php echo $producto['NOMBRE'] ?></td>
						<td width="15%"><?php echo $producto['PRECIO'] ?></td>
						<td width="20%"><?php echo $producto['CANTIDAD'] ?></td>
						<td width="20%"><?php echo number_format($producto['PRECIO']*$producto['CANTIDAD'],3) ?></td>
						<td width="5%">
							<form method="POST" action="">
								<input type="hidden" 
								name="id"
								id="id"
								value="<?php echo $producto['ID'] ?>">
								<button class="btn btn-danger"
								name="btnaccion" 
								type="submit"
								value="Eliminar"
								>Eliminar</button>
							</form>
						</td>
					</tr>
					<?php
					$total=$total+($producto['PRECIO']*$producto['CANTIDAD']);
				}
				?>
					<tr>
						<td colspan="3" align="right"><h3>Total a pagar:</h3></td>
						<td align="right"><h3><?php echo number_format($total,3); ?></h3></td>
					</tr>
			</tbody>
		</table>
		<?php
	}
	?>
</body>
</html>