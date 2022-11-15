<?php
session_start();
$mensaje="";
if(isset($_POST['btnaccion'])){
	switch ($_POST['btnaccion']) {
		case 'Agregar':
			if (is_numeric($_POST['id'])) {
				$ID=$_POST['id'];
				$mensaje.="OK... id numerico ".$ID."<br>";
			}else{
				$mensaje="UPS, dato erroneo";
			}
			if (is_string($_POST['nombre'])) {
				$NOMBRE=$_POST['nombre'];
				$mensaje.="OK... nombre en texto ".$NOMBRE."<br>";
			}else{
				$mensaje="UPS, dato erroneo";
			}
			if (is_numeric($_POST['precio'])) {
				$PRECIO=$_POST['precio'];
				$mensaje.="OK... precio en numeros ".$PRECIO."<br>";
			}else{
				$mensaje="UPS, dato erroneo";
			}
			if (is_numeric($_POST['cantidad'])) {
				$CANTIDAD=$_POST['cantidad'];
				$mensaje.="OK... cantidad en numeros ".$CANTIDAD."<br>";
			}else{
				$mensaje="UPS, dato erroneo";
			}
			if (!isset($_SESSION['CARRO'])) {
				$producto=array(
					'ID'=>$ID,
					'NOMBRE'=>$NOMBRE,
					'PRECIO'=>$PRECIO,
					'CANTIDAD'=>$CANTIDAD);
					$_SESSION['CARRO'][0]=$producto;
			}else{
				$numeroproductos=count($_SESSION['CARRO']);
				$producto=array(
					'ID'=>$ID,
					'NOMBRE'=>$NOMBRE,
					'PRECIO'=>$PRECIO,
					'CANTIDAD'=>$CANTIDAD);
				$_SESSION['CARRO'][$numeroproductos]=$producto;
			}
			$mensaje=print_r($_SESSION,true);
			break;
			case 'Eliminar':
				if (is_numeric($_POST['id'])) {
					$ID=$_POST['id'];
					foreach ($_SESSION['CARRO'] as $indice => $producto){
						if ($producto['ID']==$ID) {
							unset($_SESSION['CARRO'][$indice]);
							echo "<script>alert('Elemento eliminado del carrito...')</script>";
						}
					}
				}else{
					$mensaje="UPS, dato erroneo";
				}
				break;

	}
}
?>