window.addEventListener('DOMContentLoaded', () => {

    const productos = document.querySelectorAll('.producto');
    const modal = document.getElementById('modalCompra');
    const cerrar = document.querySelector('.close-button');
    const metodoPago = document.getElementById('modal-metodo-pago');
    const btnComprar = document.getElementById('btn-comprar');
    const modalMensaje = document.getElementById('modalMensaje');
    const cerrarMensaje = document.getElementById('cerrarMensaje');
    const textoMensaje = document.getElementById('textoMensaje');
    const formEfectivo = document.getElementById('form-efectivo');
    const formTarjeta = document.getElementById('form-tarjeta');

    productos.forEach(p => {
        p.querySelector('.boton-ver').addEventListener('click', (e) => {
            e.preventDefault();
            const img = p.querySelector('img').src;
            const nombre = p.querySelector('h3').textContent;
            const precio = (Math.random() * 100 + 100).toFixed(2);
            const stock = Math.floor(Math.random() * 50 + 1);

            document.getElementById('modal-img').src = img;
            document.getElementById('modal-nombre').textContent = nombre;
            document.getElementById('modal-precio').textContent = precio;
            document.getElementById('modal-stock').textContent = stock;

            modal.classList.remove('hidden');
        });
    });
    btnComprar.addEventListener('click', () => {
        let mensaje = '';
        if (metodoPago.value === 'efectivo') {
            mensaje = 'La cotización será enviada a tu correo para que vayas a pagar a tienda.';
        } else if (metodoPago.value === 'tarjeta') {
            mensaje = 'Tu pedido está siendo procesado.';
        }

        textoMensaje.textContent = mensaje;
        modalMensaje.classList.remove('hidden');
    });
    cerrarMensaje.addEventListener('click', () => {
        modalMensaje.classList.add('hidden');
    });
    cerrar.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    metodoPago.addEventListener('change', () => {
        formEfectivo.classList.add('hidden');
        formTarjeta.classList.add('hidden');
        if (metodoPago.value === 'efectivo') {
            formEfectivo.classList.remove('hidden');
        } else {
            formTarjeta.classList.remove('hidden');
        }
    });
    const modoOscuroGuardado = localStorage.getItem('modoOscuro');
    const inputMOB = document.getElementById('inputMOB');

    if (modoOscuroGuardado === 'true') {
        document.body.classList.add('darkMODEDK');
        if (inputMOB) inputMOB.checked = true;
    }

    if (inputMOB) {
        inputMOB.addEventListener('change', () => {
            document.body.classList.toggle('darkMODEDK');
            localStorage.setItem('modoOscuro', document.body.classList.contains('darkMODEDK'));
        });
    }

    const logo = document.getElementById("logoImagenRefresh");
    if (logo) {
        logo.addEventListener("click", () => {
            window.location.href = "../MenuSesionIniciada.html";
        });
    }

    document.getElementById('btn-carrito').addEventListener('click', function () {
        // Obtener el contador dentro del icono del carrito
        const contador = document.getElementById('contador-carrito');

        // Convertir texto a número, sumarle 1 y actualizar
        let cantidad = parseInt(contador.textContent) || 0;
        cantidad++;
        contador.textContent = cantidad;

        // Opcional: animar el icono para que destaque cuando agregas un producto
        const carritoIcono = document.querySelector('.carritobuy');
        carritoIcono.classList.add('animar');
        setTimeout(() => carritoIcono.classList.remove('animar'), 500);
    });
    function agregarAlCarrito(producto) {
        // Obtener el carrito actual o un array vacío
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar nuevo producto
        carrito.push(producto);

        // Guardar carrito actualizado
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    document.querySelector('.btn-comprar').addEventListener('click', () => {
        document.getElementById('modalCompra').style.display = 'flex';
    });

    // Cerrar modal
    function cerrarModal() {
        document.getElementById('modalCompra').style.display = 'none';
    }

    // Cerrar con clic fuera del modal
    window.onclick = function (event) {
        const modal = document.getElementById('modalCompra');
        if (event.target === modal) {
            cerrarModal();
        }
    }
    const modalPago = document.getElementById('modalPagoCarrito');
    const cerrarBtn = document.getElementById('cerrarModalPago');
    const metodoSelect = document.getElementById('pago-metodo');
    const formEfectivo2 = document.getElementById('form-efectivo');
    const formTarjeta2 = document.getElementById('form-tarjeta');
    const btnCancelar = document.getElementById('btn-cancelar');

    // Cambiar formulario según método
    metodoSelect.addEventListener('change', () => {
        if (metodoSelect.value === 'efectivo') {
            formEfectivo2.classList.remove('hidden');
            formTarjeta2.classList.add('hidden');
        } else {
            formEfectivo2.classList.add('hidden');
            formTarjeta2.classList.remove('hidden');
        }
    });

    // Cerrar modal con X
    cerrarBtn.addEventListener('click', () => {
        modalPago.classList.add('hidden');
    });

    // Cancelar botón
    btnCancelar.addEventListener('click', () => {
        modalPago.classList.add('hidden');
    });

    // Cerrar modal si clic fuera contenido
    modalPago.addEventListener('click', e => {
        if (e.target === modalPago) {
            modalPago.classList.add('hidden');
        }
    });

});