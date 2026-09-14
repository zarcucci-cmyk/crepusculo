// ==============================
// SONIDO
// ==============================

const botonSonido = document.getElementById("botonSonido");
const audioAmbiente = document.getElementById("audioAmbiente");

let sonidoActivo = false;

if (botonSonido && audioAmbiente) {
    botonSonido.addEventListener("click", function () {

        if (!sonidoActivo) {
            audioAmbiente.volume = 0.35;

            audioAmbiente.play()
                .then(function () {
                    sonidoActivo = true;
                    botonSonido.textContent = "🔊 Sonido ON";
                    botonSonido.classList.add("activo");
                })
                .catch(function () {
                    alert("No se pudo reproducir el audio.");
                });

        } else {
            audioAmbiente.pause();

            sonidoActivo = false;

            botonSonido.textContent = "♫ Sonido";
            botonSonido.classList.remove("activo");
        }

    });
}


// ==============================
// MODAL DE PELÍCULAS Y LUGARES
// ==============================

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const cerrarModal = document.getElementById("cerrarModal");
const fondoModal = document.getElementById("fondoModal");


function abrirModal(titulo, texto) {

    if (!modal || !modalTitulo || !modalTexto) {
        return;
    }

    modalTitulo.textContent = titulo;
    modalTexto.textContent = texto;

    modal.classList.remove("oculto");
    document.body.classList.add("sin-scroll");
}


function cerrarVentanaModal() {

    if (!modal) {
        return;
    }

    modal.classList.add("oculto");
    document.body.classList.remove("sin-scroll");
}


const botonesPeliculas = document.querySelectorAll(".abrir-info");

botonesPeliculas.forEach(function (boton) {

    boton.addEventListener("click", function () {

        abrirModal(
            boton.getAttribute("data-titulo"),
            boton.getAttribute("data-texto")
        );

    });
});


const lugares = document.querySelectorAll(".lugar");

lugares.forEach(function (lugar) {

    lugar.addEventListener("click", function () {

        const nombreLugar = lugar.getAttribute("data-lugar");
        const descripcionLugar = lugar.getAttribute("data-descripcion");

        if (nombreLugar && descripcionLugar) {
            abrirModal(nombreLugar, descripcionLugar);
        }

    });
});


if (cerrarModal) {
    cerrarModal.addEventListener("click", cerrarVentanaModal);
}

if (fondoModal) {
    fondoModal.addEventListener("click", cerrarVentanaModal);
}


document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {
        cerrarVentanaModal();
    }

});


// ==============================
// CURIOSIDADES
// ==============================

const tarjetasCuriosidades = document.querySelectorAll(".curiosidad");

tarjetasCuriosidades.forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {

        tarjeta.classList.toggle("abierta");

    });

});


// ==============================
// PLAYLIST VISUAL
// ==============================

const canciones = document.querySelectorAll(".cancion");
const nombreCancion = document.getElementById("nombreCancion");
const reproductor = document.querySelector(".reproductor");


canciones.forEach(function (cancion) {

    cancion.addEventListener("click", function () {

        canciones.forEach(function (otraCancion) {
            otraCancion.classList.remove("activa");
        });

        cancion.classList.add("activa");

        if (nombreCancion) {
            nombreCancion.textContent =
                cancion.getAttribute("data-cancion");
        }

        if (reproductor) {
            reproductor.classList.add("play");
        }

    });

});


// ==============================
// CARRUSEL DE PERSONAJES
// ==============================

const tarjetasPersonajes =
    document.querySelectorAll("#personajesScroll .personaje");

const botonAnterior =
    document.getElementById("personajesAnterior");

const botonSiguiente =
    document.getElementById("personajesSiguiente");

let grupoPersonajes = 0;

const personajesPorGrupo = 4;

const totalGrupos =
    Math.ceil(
        tarjetasPersonajes.length /
        personajesPorGrupo
    );


function mostrarGrupoPersonajes() {

    const desde =
        grupoPersonajes * personajesPorGrupo;

    const hasta =
        desde + personajesPorGrupo;


    tarjetasPersonajes.forEach(function (tarjeta, indice) {

        if (
            indice >= desde &&
            indice < hasta
        ) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }

    });


    if (botonAnterior) {

        if (grupoPersonajes === 0) {
            botonAnterior.style.opacity = "0.3";
            botonAnterior.style.cursor = "default";
        } else {
            botonAnterior.style.opacity = "1";
            botonAnterior.style.cursor = "pointer";
        }

    }


    if (botonSiguiente) {

        if (grupoPersonajes === totalGrupos - 1) {
            botonSiguiente.style.opacity = "0.3";
            botonSiguiente.style.cursor = "default";
        } else {
            botonSiguiente.style.opacity = "1";
            botonSiguiente.style.cursor = "pointer";
        }

    }

}


if (botonSiguiente) {

    botonSiguiente.addEventListener("click", function () {

        if (grupoPersonajes < totalGrupos - 1) {
            grupoPersonajes++;
            mostrarGrupoPersonajes();
        }

    });

}


if (botonAnterior) {

    botonAnterior.addEventListener("click", function () {

        if (grupoPersonajes > 0) {
            grupoPersonajes--;
            mostrarGrupoPersonajes();
        }

    });

}


mostrarGrupoPersonajes();
// ==============================
// QUIZ
// ==============================

const preguntasQuiz = [

    {
        pregunta:
            "Es de noche y escuchás algo moverse entre los árboles. ¿Qué hacés?",

        respuestas: [

            {
                texto:
                    "Me acerco. Necesito descubrir qué es.",
                vampiro: 2,
                lobo: 1,
                humano: 0
            },

            {
                texto:
                    "Confío en mi instinto y sigo el rastro.",
                vampiro: 0,
                lobo: 2,
                humano: 1
            },

            {
                texto:
                    "Me voy. No pienso morir por curiosa.",
                vampiro: 0,
                lobo: 0,
                humano: 2
            }

        ]
    },


    {
        pregunta:
            "¿Dónde pasarías una tarde lluviosa?",

        respuestas: [

            {
                texto:
                    "En una casa enorme perdida en el bosque.",
                vampiro: 2,
                lobo: 0,
                humano: 1
            },

            {
                texto:
                    "En La Push mirando el mar.",
                vampiro: 0,
                lobo: 2,
                humano: 1
            },

            {
                texto:
                    "En un café con mis amigos.",
                vampiro: 0,
                lobo: 0,
                humano: 2
            }

        ]
    },


    {
        pregunta:
            "¿Qué cualidad te representa mejor?",

        respuestas: [

            {
                texto: "Control.",
                vampiro: 2,
                lobo: 0,
                humano: 1
            },

            {
                texto: "Lealtad.",
                vampiro: 0,
                lobo: 2,
                humano: 1
            },

            {
                texto: "Curiosidad.",
                vampiro: 1,
                lobo: 0,
                humano: 2
            }

        ]
    },


    {
        pregunta:
            "Alguien que querés está en peligro. ¿Qué hacés?",

        respuestas: [

            {
                texto:
                    "Hago lo que sea necesario, aunque nadie lo entienda.",
                vampiro: 2,
                lobo: 1,
                humano: 0
            },

            {
                texto:
                    "Voy de frente. Primero protejo, después pienso.",
                vampiro: 0,
                lobo: 2,
                humano: 1
            },

            {
                texto:
                    "Busco ayuda y pienso una solución.",
                vampiro: 0,
                lobo: 0,
                humano: 2
            }

        ]
    },


    {
        pregunta:
            "¿Qué energía te atrae más?",

        respuestas: [

            {
                texto:
                    "Misteriosa, elegante y silenciosa.",
                vampiro: 2,
                lobo: 0,
                humano: 0
            },

            {
                texto:
                    "Intensa, cálida e impulsiva.",
                vampiro: 0,
                lobo: 2,
                humano: 0
            },

            {
                texto:
                    "Espontánea, cercana y simple.",
                vampiro: 0,
                lobo: 0,
                humano: 2
            }

        ]
    },


    {
        pregunta:
            "Elegí una frase.",

        respuestas: [

            {
                texto:
                    "Puedo esperar todo el tiempo que sea necesario.",
                vampiro: 2,
                lobo: 0,
                humano: 1
            },

            {
                texto:
                    "Mi gente siempre va primero.",
                vampiro: 0,
                lobo: 2,
                humano: 1
            },

            {
                texto:
                    "Prefiero vivirlo aunque pueda salir mal.",
                vampiro: 1,
                lobo: 0,
                humano: 2
            }

        ]
    }

];


// ==============================
// ELEMENTOS DEL QUIZ
// ==============================

const empezarQuiz =
    document.getElementById("empezarQuiz");

const repetirQuiz =
    document.getElementById("repetirQuiz");

const inicioQuiz =
    document.getElementById("inicioQuiz");

const juegoQuiz =
    document.getElementById("juegoQuiz");

const resultadoQuiz =
    document.getElementById("resultadoQuiz");

const numeroPregunta =
    document.getElementById("numeroPregunta");

const barraProgreso =
    document.getElementById("barraProgreso");

const pregunta =
    document.getElementById("pregunta");

const respuestas =
    document.getElementById("respuestas");


let preguntaActual = 0;

let puntosVampiro = 0;
let puntosLobo = 0;
let puntosHumano = 0;


// ==============================
// INICIAR QUIZ
// ==============================

function iniciarQuiz() {

    preguntaActual = 0;

    puntosVampiro = 0;
    puntosLobo = 0;
    puntosHumano = 0;


    if (inicioQuiz) {
        inicioQuiz.classList.add("oculto");
    }

    if (resultadoQuiz) {
        resultadoQuiz.classList.add("oculto");
    }

    if (juegoQuiz) {
        juegoQuiz.classList.remove("oculto");
    }


    const barraVampiro =
        document.getElementById("vampiroBarra");

    const barraLobo =
        document.getElementById("loboBarra");

    const barraHumano =
        document.getElementById("humanoBarra");


    if (barraVampiro) {
        barraVampiro.style.width = "0%";
    }

    if (barraLobo) {
        barraLobo.style.width = "0%";
    }

    if (barraHumano) {
        barraHumano.style.width = "0%";
    }


    mostrarPregunta();

}


// ==============================
// MOSTRAR PREGUNTA
// ==============================

function mostrarPregunta() {

    const datos =
        preguntasQuiz[preguntaActual];


    if (!datos || !pregunta || !respuestas) {
        return;
    }


    if (numeroPregunta) {

        numeroPregunta.textContent =
            "Pregunta " +
            (preguntaActual + 1) +
            " de " +
            preguntasQuiz.length;

    }


    if (barraProgreso) {

        barraProgreso.style.width =
            ((preguntaActual / preguntasQuiz.length) * 100) +
            "%";

    }


    pregunta.textContent =
        datos.pregunta;


    respuestas.innerHTML =
        "";


    datos.respuestas.forEach(function (respuesta) {

        const boton =
            document.createElement("button");


        boton.className =
            "respuesta";


        boton.textContent =
            respuesta.texto;


        boton.addEventListener("click", function () {

            puntosVampiro +=
                respuesta.vampiro;

            puntosLobo +=
                respuesta.lobo;

            puntosHumano +=
                respuesta.humano;


            preguntaActual++;


            if (
                preguntaActual <
                preguntasQuiz.length
            ) {

                mostrarPregunta();

            } else {

                mostrarResultado();

            }

        });


        respuestas.appendChild(
            boton
        );

    });

}


// ==============================
// MOSTRAR RESULTADO
// ==============================

function mostrarResultado() {

    if (juegoQuiz) {
        juegoQuiz.classList.add("oculto");
    }

    if (resultadoQuiz) {
        resultadoQuiz.classList.remove("oculto");
    }


    const total =
        puntosVampiro +
        puntosLobo +
        puntosHumano;


    const porcentajeVampiro =
        Math.round(
            (puntosVampiro / total) * 100
        );


    const porcentajeLobo =
        Math.round(
            (puntosLobo / total) * 100
        );


    const porcentajeHumano =
        100 -
        porcentajeVampiro -
        porcentajeLobo;


    const vampiroNumero =
        document.getElementById("vampiroNumero");

    const loboNumero =
        document.getElementById("loboNumero");

    const humanoNumero =
        document.getElementById("humanoNumero");


    if (vampiroNumero) {
        vampiroNumero.textContent =
            porcentajeVampiro + "%";
    }

    if (loboNumero) {
        loboNumero.textContent =
            porcentajeLobo + "%";
    }

    if (humanoNumero) {
        humanoNumero.textContent =
            porcentajeHumano + "%";
    }


    setTimeout(function () {

        const vampiroBarra =
            document.getElementById("vampiroBarra");

        const loboBarra =
            document.getElementById("loboBarra");

        const humanoBarra =
            document.getElementById("humanoBarra");


        if (vampiroBarra) {
            vampiroBarra.style.width =
                porcentajeVampiro + "%";
        }

        if (loboBarra) {
            loboBarra.style.width =
                porcentajeLobo + "%";
        }

        if (humanoBarra) {
            humanoBarra.style.width =
                porcentajeHumano + "%";
        }

    }, 200);


    const tituloResultado =
        document.getElementById("tituloResultado");

    const textoResultado =
        document.getElementById("textoResultado");


    const mayor =
        Math.max(
            porcentajeVampiro,
            porcentajeLobo,
            porcentajeHumano
        );


    if (mayor === porcentajeVampiro) {

        if (tituloResultado) {
            tituloResultado.textContent =
                "Tu esencia es vampírica";
        }

        if (textoResultado) {
            textoResultado.textContent =
                "Sos intensa, observadora y selectiva. El misterio y el control forman parte de tu naturaleza.";
        }

    }


    else if (mayor === porcentajeLobo) {

        if (tituloResultado) {
            tituloResultado.textContent =
                "Tu lugar está en la manada";
        }

        if (textoResultado) {
            textoResultado.textContent =
                "Sos leal, protectora e impulsiva. Cuando querés a alguien, vas hasta el final.";
        }

    }


    else {

        if (tituloResultado) {
            tituloResultado.textContent =
                "Tu corazón sigue siendo humano";
        }

        if (textoResultado) {
            textoResultado.textContent =
                "Te mueve la curiosidad, las emociones y la posibilidad de elegir.";
        }

    }


    if (barraProgreso) {
        barraProgreso.style.width = "100%";
    }

}


// ==============================
// BOTONES DEL QUIZ
// ==============================

if (empezarQuiz) {
    empezarQuiz.addEventListener(
        "click",
        iniciarQuiz
    );
}


if (repetirQuiz) {
    repetirQuiz.addEventListener(
        "click",
        iniciarQuiz
    );
}
// =====================================================
// PÁGINA FORKS — EXPLORACIÓN INTERACTIVA
// Se agrega al JS original
// =====================================================

const botonesForks = document.querySelectorAll(".forks-descubrir");

const forksPanel = document.getElementById("forksPanel");
const cerrarForksPanel = document.getElementById("cerrarForksPanel");
const cerrarForksFondo = document.getElementById("cerrarForksFondo");

const forksPanelEtiqueta = document.getElementById("forksPanelEtiqueta");
const forksPanelTitulo = document.getElementById("forksPanelTitulo");
const forksPanelTexto = document.getElementById("forksPanelTexto");
const forksPanelExtra = document.getElementById("forksPanelExtra");

const lugaresDescubiertosTexto =
    document.getElementById("lugaresDescubiertos");

const progresoForks =
    document.getElementById("progresoForks");

const archivoSecreto =
    document.getElementById("archivoSecreto");


let lugaresDescubiertos = [];


// -----------------------------------------------------
// INFORMACIÓN DE CADA LUGAR
// -----------------------------------------------------

const informacionForks = {

    swan: {
        etiqueta: "1849 · FORKS",
        titulo: "Casa Swan",
        texto:
            "La casa de Charlie Swan se convierte en el hogar de Bella cuando regresa a Forks. Parece una casa común, pero termina siendo testigo de algunos de los momentos más importantes de su historia.",

        extra: `
<div class="forks-panel-imagen">
    <img src="img/cuarto-bella.jpg" alt="Cuarto de Bella Swan">
</div>
            <div class="forks-detalle">
                <span>ARCHIVO 01</span>
                <h3>El cuarto de Bella</h3>
                <p>
                    Un espacio sencillo, íntimo y completamente humano.
                    Desde esta habitación Bella observa Forks mientras
                    su vida comienza a mezclarse con el mundo de los Cullen.
                </p>
            </div>

            <div class="forks-pista">
                <span>✦ DETALLE ENCONTRADO</span>
                <p>
                    Mirá con atención las ventanas.
                    En Forks nunca sabés quién puede estar observando.
                </p>
            </div>
        `
    },


    instituto: {
        etiqueta: "FORKS HIGH SCHOOL",
        titulo: "El Instituto",
        texto:
            "Forks High School es donde Bella conoce a Edward Cullen. Entre pasillos, cafetería y clases de biología comienza una relación que ninguno de los dos puede ignorar.",

        extra: `
            <div class="forks-detalle">
                <span>ARCHIVO 02</span>
                <h3>Biología</h3>
                <p>
                    Bella se sienta junto a Edward por primera vez.
                    Su reacción es extraña: se aleja, evita respirar
                    y desaparece durante varios días.
                </p>
            </div>

            <button class="forks-secreto" id="secretoBiologia">
                Analizar evidencia →
            </button>

            <p class="forks-evidencia oculto" id="evidenciaBiologia">
                Temperatura corporal: anormalmente baja.<br>
                Color de ojos: variable.<br>
                Edad aparente: 17.<br>
                Edad real: información clasificada.
            </p>
        `
    },


    hospital: {
        etiqueta: "FORKS COMMUNITY HOSPITAL",
        titulo: "Hospital",
        texto:
            "Carlisle Cullen trabaja como médico en el hospital de Forks. Su capacidad para estar rodeado de sangre sin perder el control representa décadas de disciplina.",

        extra: `
            <div class="forks-detalle">
                <span>ARCHIVO 03</span>
                <h3>Dr. Carlisle Cullen</h3>
                <p>
                    Médico · Cullen · Vampiro
                </p>
            </div>

            <div class="forks-expediente">
                <div>
                    <span>PROFESIÓN</span>
                    <strong>Médico</strong>
                </div>

                <div>
                    <span>EDAD APARENTE</span>
                    <strong>23</strong>
                </div>

                <div>
                    <span>ALIMENTACIÓN</span>
                    <strong>Vegetariana</strong>
                </div>
            </div>
        `
    },


    bosque: {
        etiqueta: "RESTRICTED AREA",
        titulo: "El Bosque",
        texto:
            "Los bosques que rodean Forks esconden mucho más de lo que parece. Para un humano son árboles, lluvia y silencio. Para quienes conocen la verdad, son territorio compartido por criaturas que no deberían existir.",

        extra: `
            <div class="forks-bosque-alerta">
                <span>⚠ MOVIMIENTO DETECTADO</span>

                <p>
                    Algo acaba de moverse entre los árboles.
                </p>

                <button class="forks-secreto" id="seguirRastro">
                    Seguir el rastro
                </button>

                <div class="rastro-resultado oculto" id="rastroResultado">
                    <strong>...</strong>

                    <p>
                        No estás sola en el bosque.
                    </p>

                    <span class="ojos-bosque">
                        ● &nbsp;&nbsp;&nbsp; ●
                    </span>
                </div>
            </div>
        `
    }

};


// -----------------------------------------------------
// ABRIR LUGAR
// -----------------------------------------------------

function abrirLugarForks(nombreLugar) {

    const datos = informacionForks[nombreLugar];

    if (!datos || !forksPanel) {
        return;
    }


    forksPanelEtiqueta.textContent =
        datos.etiqueta;

    forksPanelTitulo.textContent =
        datos.titulo;

    forksPanelTexto.textContent =
        datos.texto;

    forksPanelExtra.innerHTML =
        datos.extra;


    forksPanel.classList.remove("oculto");

    document.body.classList.add("sin-scroll");


    descubrirLugar(nombreLugar);
    activarSecretosForks();
}


// -----------------------------------------------------
// MARCAR COMO DESCUBIERTO
// -----------------------------------------------------

function descubrirLugar(nombreLugar) {

    if (!lugaresDescubiertos.includes(nombreLugar)) {

        lugaresDescubiertos.push(nombreLugar);

        const tarjeta =
            document.querySelector(
                `.forks-lugar[data-lugar="${nombreLugar}"]`
            );

        if (tarjeta) {
            tarjeta.classList.add("descubierto");
        }

        actualizarProgresoForks();
    }

}


// -----------------------------------------------------
// ACTUALIZAR PROGRESO
// -----------------------------------------------------

function actualizarProgresoForks() {

    const cantidad =
        lugaresDescubiertos.length;

    if (lugaresDescubiertosTexto) {

        lugaresDescubiertosTexto.textContent =
            cantidad + " / 4";
    }


    if (progresoForks) {

        progresoForks.style.width =
            (cantidad / 4) * 100 + "%";
    }


    if (cantidad === 4) {

        desbloquearArchivoForks();
    }

}


// -----------------------------------------------------
// ARCHIVO SECRETO
// -----------------------------------------------------

function desbloquearArchivoForks() {

    if (!archivoSecreto) {
        return;
    }


    archivoSecreto.classList.add(
        "desbloqueado"
    );


    archivoSecreto.innerHTML = `
        <span>🔓</span>

        <p>ARCHIVO DESBLOQUEADO</p>

        <small>
            CLEARANCE LEVEL · CULLEN
        </small>

        <div class="archivo-contenido-secreto">

            <span>
                FORKS · WASHINGTON
            </span>

            <h3>
                No todos los habitantes
                de Forks son humanos.
            </h3>

            <p>
                Algunos secretos llevan décadas
                escondidos entre la lluvia y los árboles.
            </p>

            <button
                class="forks-secreto"
                id="abrirArchivoFinal"
            >
                Abrir expediente →
            </button>

            <div
                class="expediente-final oculto"
                id="expedienteFinal"
            >

                <p class="codigo-expediente">
                    SUBJECT: CULLEN FAMILY
                </p>

                <p>
                    Estado:
                    <strong>ACTIVOS</strong>
                </p>

                <p>
                    Ubicación:
                    <strong>FORKS</strong>
                </p>

                <p>
                    Clasificación:
                    <strong>VAMPIROS</strong>
                </p>

                <p class="mensaje-final-forks">
                    You've discovered the truth.
                </p>

            </div>
        </div>
    `;


    const abrirArchivoFinal =
        document.getElementById(
            "abrirArchivoFinal"
        );

    const expedienteFinal =
        document.getElementById(
            "expedienteFinal"
        );


    if (
        abrirArchivoFinal &&
        expedienteFinal
    ) {

        abrirArchivoFinal.addEventListener(
            "click",
            function () {

                expedienteFinal.classList.toggle(
                    "oculto"
                );

                abrirArchivoFinal.textContent =
                    expedienteFinal.classList.contains(
                        "oculto"
                    )
                        ? "Abrir expediente →"
                        : "Cerrar expediente ↑";

            }
        );

    }
}


// -----------------------------------------------------
// SECRETOS DENTRO DE LOS LUGARES
// -----------------------------------------------------

function activarSecretosForks() {

    const secretoBiologia =
        document.getElementById(
            "secretoBiologia"
        );

    const evidenciaBiologia =
        document.getElementById(
            "evidenciaBiologia"
        );


    if (
        secretoBiologia &&
        evidenciaBiologia
    ) {

        secretoBiologia.addEventListener(
            "click",
            function () {

                evidenciaBiologia.classList.toggle(
                    "oculto"
                );

                secretoBiologia.textContent =
                    evidenciaBiologia.classList.contains(
                        "oculto"
                    )
                        ? "Analizar evidencia →"
                        : "Ocultar evidencia ↑";

            }
        );

    }


    const seguirRastro =
        document.getElementById(
            "seguirRastro"
        );

    const rastroResultado =
        document.getElementById(
            "rastroResultado"
        );


    if (
        seguirRastro &&
        rastroResultado
    ) {

        seguirRastro.addEventListener(
            "click",
            function () {

                rastroResultado.classList.remove(
                    "oculto"
                );

                seguirRastro.textContent =
                    "Rastro encontrado";

                seguirRastro.disabled =
                    true;

            }
        );

    }

}


// -----------------------------------------------------
// BOTONES DE LOS 4 LUGARES
// -----------------------------------------------------

botonesForks.forEach(function (boton) {

    boton.addEventListener(
        "click",
        function () {

            const lugar =
                boton.getAttribute(
                    "data-descubrir"
                );

            abrirLugarForks(lugar);
        }
    );

});


// -----------------------------------------------------
// CERRAR PANEL
// -----------------------------------------------------

function cerrarPanelForks() {

    if (!forksPanel) {
        return;
    }

    forksPanel.classList.add(
        "oculto"
    );

    document.body.classList.remove(
        "sin-scroll"
    );

}


if (cerrarForksPanel) {

    cerrarForksPanel.addEventListener(
        "click",
        cerrarPanelForks
    );

}


if (cerrarForksFondo) {

    cerrarForksFondo.addEventListener(
        "click",
        cerrarPanelForks
    );

}


// ESC

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape" &&
            forksPanel &&
            !forksPanel.classList.contains(
                "oculto"
            )
        ) {

            cerrarPanelForks();

        }

    }
);
// =====================================================
// PÁGINA LA PUSH — MOMENTO LOBO
// =====================================================

const activarLobo = document.getElementById("activarLobo");
const momentoLobo = document.getElementById("momentoLobo");
const cerrarLobo = document.getElementById("cerrarLobo");


// ABRIR MOMENTO LOBO

if (activarLobo && momentoLobo) {

    activarLobo.addEventListener("click", function () {

        momentoLobo.classList.remove("oculto");
        document.body.classList.add("sin-scroll");

    });

}


// CERRAR MOMENTO LOBO

if (cerrarLobo && momentoLobo) {

    cerrarLobo.addEventListener("click", function () {

        momentoLobo.classList.add("oculto");

        document.body.classList.remove("sin-scroll");

    });

}


// CERRAR CON ESC

document.addEventListener("keydown", function (evento) {

    if (
        evento.key === "Escape" &&
        momentoLobo &&
        !momentoLobo.classList.contains("oculto")
    ) {

        momentoLobo.classList.add("oculto");

        document.body.classList.remove("sin-scroll");

    }

});
// ==========================================
// CARRUSEL FAMILIA CULLEN
// ==========================================

const cullenFamiliaGrid = document.getElementById("cullenFamiliaGrid");
const cullenAnterior = document.getElementById("cullenAnterior");
const cullenSiguiente = document.getElementById("cullenSiguiente");

if (cullenFamiliaGrid && cullenAnterior && cullenSiguiente) {

    cullenSiguiente.addEventListener("click", () => {
        cullenFamiliaGrid.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    });

    cullenAnterior.addEventListener("click", () => {
        cullenFamiliaGrid.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    });

}
/* ============================================= */
/* FOREVER — AUDIO BELLA → ALICE                 */
/* ============================================= */

const bellaAliceAudio = document.getElementById("bellaAliceAudio");
const bellaAliceBtn = document.getElementById("bellaAliceBtn");
const bellaAliceIcon = document.getElementById("bellaAliceIcon");

if (bellaAliceAudio && bellaAliceBtn && bellaAliceIcon) {

    bellaAliceBtn.addEventListener("click", function () {

        if (bellaAliceAudio.paused) {

            bellaAliceAudio.play();
            bellaAliceIcon.textContent = "Ⅱ";

        } else {

            bellaAliceAudio.pause();
            bellaAliceIcon.textContent = "▶";

        }

    });


    bellaAliceAudio.addEventListener("ended", function () {

        bellaAliceIcon.textContent = "▶";
        bellaAliceAudio.currentTime = 0;

    });

}


/* ============================================= */
/* FOREVER — BELLA'S LULLABY                     */
/* ============================================= */

const bellaLullabyAudio = document.getElementById("bellaLullabyAudio");
const bellaLullabyBtn = document.getElementById("bellaLullabyBtn");
const bellaLullabyIcon = document.getElementById("bellaLullabyIcon");

if (bellaLullabyAudio && bellaLullabyBtn && bellaLullabyIcon) {

    bellaLullabyBtn.addEventListener("click", function () {

        if (bellaLullabyAudio.paused) {

            bellaLullabyAudio.play();
            bellaLullabyIcon.textContent = "Ⅱ";

        } else {

            bellaLullabyAudio.pause();
            bellaLullabyIcon.textContent = "▶";

        }

    });

    bellaLullabyAudio.addEventListener("ended", function () {

        bellaLullabyIcon.textContent = "▶";
        bellaLullabyAudio.currentTime = 0;

    });

}
/* ============================================= */
/* GALERÍA — DETRÁS DE TWILIGHT                  */
/* ============================================= */

const fotosGaleria = Array.from(
    document.querySelectorAll(".foto-archivo")
);

const filtrosGaleria = document.querySelectorAll(".filtro-galeria");

const galeriaLightbox = document.getElementById("galeriaLightbox");
const lightboxImagen = document.getElementById("lightboxImagen");
const lightboxTitulo = document.getElementById("lightboxTitulo");
const lightboxDescripcion = document.getElementById("lightboxDescripcion");
const lightboxNumero = document.getElementById("lightboxNumero");

const lightboxCerrar = document.getElementById("lightboxCerrar");
const lightboxAnterior = document.getElementById("lightboxAnterior");
const lightboxSiguiente = document.getElementById("lightboxSiguiente");

let fotosVisibles = [...fotosGaleria];
let fotoActual = 0;


/* ============================================= */
/* FILTROS                                       */
/* ============================================= */

if (filtrosGaleria.length && fotosGaleria.length) {

    filtrosGaleria.forEach(function (boton) {

        boton.addEventListener("click", function () {

            filtrosGaleria.forEach(function (filtro) {
                filtro.classList.remove("activo");
            });

            boton.classList.add("activo");

            const categoria = boton.dataset.filtro;

            fotosGaleria.forEach(function (foto) {

                if (
                    categoria === "todos" ||
                    foto.dataset.categoria === categoria
                ) {
                    foto.classList.remove("oculta");
                } else {
                    foto.classList.add("oculta");
                }

            });

            fotosVisibles = fotosGaleria.filter(function (foto) {
                return !foto.classList.contains("oculta");
            });

        });

    });

}


/* ============================================= */
/* ABRIR FOTO                                    */
/* ============================================= */

function mostrarFoto(indice) {

    if (!fotosVisibles.length || !galeriaLightbox) return;

    if (indice < 0) {
        indice = fotosVisibles.length - 1;
    }

    if (indice >= fotosVisibles.length) {
        indice = 0;
    }

    fotoActual = indice;

    const foto = fotosVisibles[fotoActual];

    lightboxImagen.src = foto.dataset.imagen;
    lightboxImagen.alt = foto.dataset.titulo;

    lightboxTitulo.textContent =
        foto.dataset.titulo;

    lightboxDescripcion.textContent =
        foto.dataset.descripcion;

    lightboxNumero.textContent =
        "ARCHIVO " +
        String(
            fotosGaleria.indexOf(foto) + 1
        ).padStart(2, "0");

}


if (fotosGaleria.length && galeriaLightbox) {

    fotosGaleria.forEach(function (foto) {

        foto.addEventListener("click", function () {

            fotosVisibles = fotosGaleria.filter(function (elemento) {
                return !elemento.classList.contains("oculta");
            });

            fotoActual = fotosVisibles.indexOf(foto);

            mostrarFoto(fotoActual);

            galeriaLightbox.classList.add("abierto");
            document.body.style.overflow = "hidden";

        });

    });

}


/* ============================================= */
/* ANTERIOR / SIGUIENTE                          */
/* ============================================= */

if (lightboxAnterior) {

    lightboxAnterior.addEventListener("click", function () {
        mostrarFoto(fotoActual - 1);
    });

}


if (lightboxSiguiente) {

    lightboxSiguiente.addEventListener("click", function () {
        mostrarFoto(fotoActual + 1);
    });

}


/* ============================================= */
/* CERRAR                                        */
/* ============================================= */

function cerrarGaleria() {

    if (!galeriaLightbox) return;

    galeriaLightbox.classList.remove("abierto");
    document.body.style.overflow = "";

}


if (lightboxCerrar) {

    lightboxCerrar.addEventListener("click", cerrarGaleria);

}


if (galeriaLightbox) {

    galeriaLightbox.addEventListener("click", function (evento) {

        if (evento.target === galeriaLightbox) {
            cerrarGaleria();
        }

    });

}


/* ============================================= */
/* TECLADO                                       */
/* ============================================= */

document.addEventListener("keydown", function (evento) {

    if (
        !galeriaLightbox ||
        !galeriaLightbox.classList.contains("abierto")
    ) {
        return;
    }

    if (evento.key === "Escape") {
        cerrarGaleria();
    }

    if (evento.key === "ArrowLeft") {
        mostrarFoto(fotoActual - 1);
    }

    if (evento.key === "ArrowRight") {
        mostrarFoto(fotoActual + 1);
    }

});
/* ============================================= */
/* CONTACTO                                      */
/* ============================================= */

const formularioContacto = document.getElementById("formularioContacto");
const contactoExito = document.getElementById("contactoExito");
const contactoOtroMensaje = document.getElementById("contactoOtroMensaje");
const contactoFormEncabezado = document.querySelector(".contacto-form-encabezado");

if (formularioContacto && contactoExito) {

    formularioContacto.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formularioContacto.checkValidity()) {
            formularioContacto.reportValidity();
            return;
        }

        formularioContacto.style.display = "none";

        if (contactoFormEncabezado) {
            contactoFormEncabezado.style.display = "none";
        }

        contactoExito.classList.add("visible");

    });
}


if (contactoOtroMensaje) {

    contactoOtroMensaje.addEventListener("click", function () {

        contactoExito.classList.remove("visible");

        formularioContacto.reset();
        formularioContacto.style.display = "";

        if (contactoFormEncabezado) {
            contactoFormEncabezado.style.display = "";
        }

    });
}