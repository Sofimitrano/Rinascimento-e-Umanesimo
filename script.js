
/* ==============================
   CAMBIAR COLOR DE FONDO
============================== */

function cambiarColor() {

    const colores = [
        "#f3ebdd",
        "#eee2cc",
        "#f8f0e1",
        "#e9dfcc",
        "#f5e9d7",
        "#e8dfd0"
    ];

    const colorActual = document.body.style.backgroundColor;

    let nuevoColor;

    do {
        nuevoColor = colores[
            Math.floor(Math.random() * colores.length)
        ];
    } while (
        nuevoColor === colorActual &&
        colores.length > 1
    );

    document.body.style.backgroundColor = nuevoColor;
}


/* ==============================
   CORREGIR QUIZ
============================== */

function corregirQuiz() {

    let puntos = 0;

    const pregunta1 = document.querySelector(
        'input[name="pregunta1"]:checked'
    );

    const pregunta2 = document.querySelector(
        'input[name="pregunta2"]:checked'
    );

    const pregunta3 = document.querySelector(
        'input[name="pregunta3"]:checked'
    );

    const resultado = document.getElementById("resultado");

    // Comprobar que todas estén respondidas

    if (!pregunta1 || !pregunta2 || !pregunta3) {

        resultado.textContent =
            "✧ Antes de continuar, respondé todas las preguntas.";

        return;
    }

    // Contar respuestas correctas

    if (pregunta1.value === "correcto") {
        puntos++;
    }

    if (pregunta2.value === "correcto") {
        puntos++;
    }

    if (pregunta3.value === "correcto") {
        puntos++;
    }

    // Mostrar resultado

    if (puntos === 3) {

        resultado.textContent =
            "✦ ¡Excelente! Has respondido correctamente las tres preguntas. ¡Tu conocimiento ha florecido!";

    } else if (puntos === 2) {

        resultado.textContent =
            "❦ ¡Muy bien! Has conseguido dos respuestas correctas. Seguí cultivando tu conocimiento.";

    } else if (puntos === 1) {

        resultado.textContent =
            "✧ Has conseguido una respuesta correcta. Te invitamos a repasar los conocimientos.";

    } else {

        resultado.textContent =
            "📜 Es momento de volver a estudiar. ¡El conocimiento se construye con paciencia!";
    }

}
