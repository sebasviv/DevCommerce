import React from 'react'
import './Producto.css'

function Product(){
    return(
      <div className="azul-transparent">
      
      <div className="container p-5 banner-text d-none d-sm-block animate-box" >
          <h2>Nuestro Producto <br/> Desarrollo del <b className="text-warning">e-commerce</b> de tu negocio</h2>
          <div>
          Debido a las tendencias de la nueva era digital y las condiciones de pandemia que 
          se han presentado, la empresa decide crear tiendas de e-commerce personalizado para 
          las empresas, compañías u organizaciones que busquen expandir su público objetivo 
          en el ambiente electrónico, intrascendente del producto o servicio que se comercialice.
          <br/><br/>
          
            {/*<a href="#!" className="btn btn-banner">CHECK OUR PRICES</a>*/}
          </div>
      </div>
  
  </div>
    );
}

export default Product;