<?php
include_once("inc/conexion.php");
include_once("inc/cabecera.php");
include_once("carrito.php");
?>
<body>

<?php
include_once("inc/menuSuperior.php");
include_once("inc/navegacion.php");
?>
<div class="alert alert-success">
			<?php echo $mensaje;?>
			<a href="verCarrito.php" class="btn btn-danger btn-sm">Ver carrito</a>
		</div>
<div class="section">
        <!-- container -->
        <div class="container">
            <!-- row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h3 class="title">Productos Nuevos</h3>
                        
                    </div>
                        <div class="col-md-12" id="listaArticulos">
                            <div class="row">
                                <div class="products-tabs">
                            <!-- tab -->
                                    <div id="tab1" class="tab-pane active">
                                    <div class="products-slick" data-nav="#slick-nav-1">
                                            
                     
                                       <?php
                                        $sql2='SELECT `PK_idImagen`,PK_codigoProducto as id_producto, `nombreProducto` as producto,`tipoProducto` as tipo,`estadoProducto` as estado, `descripcion`,`precioProducto` as precio,`stock`, `nombreImagen` as imagen FROM `imagen` join producto on FK_idProducto= PK_codigoProducto';
                                        $resultado=$mbd->prepare($sql2);
			                            $resultado->execute();
			                            while($fila=$resultado->fetch(PDO::FETCH_ASSOC))
                                        {
                                        ?>      
                                        
                                            <div class="product">
                                               <div class = "product-img">
                                                       <img src="./img/<?php echo $fila['imagen'] ?>">
                                                       <div class="product-label">
                                                           <span class="sale"><?php echo $fila['tipo']?></span>
                                                           
                                                       </div>
                                                </div> 

                                                <div class="product-body" id="articulo">
                                                      <p class="product-category">
                                                      <?php
                                                          echo $fila['producto'];
                                                          ?>
                                                      </p>
                                                      <h4 class="product-price">
                                                      <?php
                                                          echo $fila['precio'];
                                                          ?>
                              
                                                      </h4>
    
                                                        <div class="product-btns">
                                                                       <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
                                                                       <button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
                                                                       <button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
                                                        </div>
                                                        
                                                              
                                                           
                                                           
                                                </div>
                                                <form action="" method="POST">
								                              <input type="hidden" name="id" id="id" value="<?php echo $fila['id_producto']?>">
								                              <input type="hidden" name="nombre" id="nombre" value="<?php echo $fila['producto']?>">
								                              <input type="hidden" name="precio" id="precio" value="<?php echo $fila['precio']?>">
								                              <input type="hidden" name="cantidad" id="cantidad" value="<?php echo 1?>">
                                                    
                                                                <div class="add-to-cart">
                                                                    <button class="add-to-cart-btn"
                                                                    name="btnaccion" 
                                                                    type="submit"
                                                                    valor="Agregar">
                                                                    <i class="fa fa-shopping-cart"></i> 
                                                                    add to cart
                                                                    </button>
                                                                    <script >console.log()</script> 
                                                                </div>
                                                </form>
                                                
                                               </div>
                                                <?php  
                                                
                                              }
                                            ?>
                                            </div>   
                                    </div>
                                    </div>    
                                </div>         
                            </div>  
                        </div>                
                </div>                                  
            </div>  
        </div>                                
</div>
<?php
include_once("inc/hotDealSection.php");
include_once("inc/footer.php");
?>
                
                    
                        