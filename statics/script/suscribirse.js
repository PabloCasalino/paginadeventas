var headerContent = `
<header>

<div class="container-hero">
  <div class="container hero">

    <div class="customer-support">
      <i class="fa-solid fa-headset"></i> <!--Icono auriculares-->
      <div class="content-customer-support">
        <span class="text">Soporte al cliente</span>
        <span class="number">123-456-7890</span>
      </div>
    </div>

    <div class="container-logo">  
      <img src="statics/img/traced-logo_fondo_bco (1).ico" alt="" id="logo-img">
      <h1 class="logo"><a href="/">ComprasOnline.com</a></h1>
    </div>

    <div class="container-user">
      <i class="fa-solid fa-user"></i> <!--Icono usuario-->
      <i class="fa-solid fa-basket-shopping"></i> <!--Icono carrito de compras-->
      <div class="content-shopping-cart">
        <span class="text">Carrito</span>
        <span class="number">(0)</span>
      </div>
    </div>

  </div>
</div>

<div class="container-navbar">
  <nav class="navbar container">
    <i class="fa-solid fa-bars"></i> <!--Icono menú hamburguesa-->
    <ul class="menu">
      <li><a href="/">Inicio</a></li>
      <li><a href="#">Acerca de</a></li>
       <li><a href="./suscribirse.html">Registro</a></li>
      <li><a href="#">Más</a></li>
    </ul>

    <form class="search-form">
      <input type="search" placeholder="Buscar..." />
      <button class="btn-search">
        <i class="fa-solid fa-magnifying-glass"></i> <!--Icono busqueda-->
      </button>
    </form>
  </nav>
</div>

</header>
`
document.body.insertAdjacentHTML("afterbegin",headerContent);

var footerContent = `
<footer class="footer">
<div class="container container-footer">
  <div class="menu-footer">
    <div class="contact-info">
      <p class="title-footer">Información de Contacto</p>
      <ul>
        <li>
          Dirección: 81 Pennington Lane Vernon Rockville, CT
          06066
        </li>
        <li>Teléfono: 123-456-7890</li>
        <li>Fax: 55555300</li>
        <li>EmaiL: comprasOnline@support.com</li>
      </ul>
      <div class="social-icons">
        <span class="facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </span>
        <span class="twitter">
          <i class="fa-brands fa-twitter"></i>
        </span>
        <span class="youtube">
          <i class="fa-brands fa-youtube"></i>
        </span>
        <span class="pinterest">
          <i class="fa-brands fa-pinterest-p"></i>
        </span>
        <span class="instagram">
          <i class="fa-brands fa-instagram"></i>
        </span>
      </div>
    </div>

    <div class="information">
      <p class="title-footer">Información</p>
      <ul>
        <li><a href="#">Acerca de Nosotros</a></li>
        <li><a href="#">Información Envíos</a></li>
        <li><a href="#">Politicas de Privacidad</a></li>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="#">Contactános</a></li>
      </ul>
    </div>

    <div class="my-account">
      <p class="title-footer">Mi cuenta</p>

      <ul>
        <li><a href="#">Mi cuenta</a></li>
        <li><a href="#">Historial de ordenes</a></li>
        <li><a href="#">Lista de deseos</a></li>
        <li><a href="#">Boletín</a></li>
        <li><a href="#">Reembolsos</a></li>
      </ul>
    </div>
  </div>
  
  <div class="copyright">
    <p>
      ComprasOnline.com. Todos los derechos reservados &copy; 2024
    </p>

    <img src="statics/img/payment.png" alt="Pagos" id="pagos">
  </div>
</div>
</footer>
`
document.body.insertAdjacentHTML("afterend",footerContent);  