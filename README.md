# Number-Guesser-cy
Adivinar un numero entre el computador y el humano (Building Interactive Websites)

## Objetivos 

1. En este proyecto, escribirás funciones de JavaScript para ejecutar un pequeño juego de adivinanzas. Tu código se ejecutará en el navegador

2. Crea una función compareGuesses(). 
    
    Esta función: Tiene tres parámetros que representan la suposición del usuario (humano), una suposición de la computadora y el número objetivo secreto que se debe adivinar.

    Determina qué jugador (humano o computadora) gana según la suposición más cercana al objetivo. Si ambos jugadores empatan, el usuario humano debería ganar.

    Devuelve true si el jugador humano gana y false si el jugador computadora gana.

    El propósito de esta función es llamarla en cada ronda para determinar qué suposición está más cerca del número objetivo.

3. Crea una función updateScore(). Esta función:

    Tiene un único parámetro. Este parámetro será una cadena que representa al ganador.

    Aumenta la variable de puntuación (humanScore o computerScore) en 1, dependiendo del ganador pasado a updateScore. La cadena pasada será 'human'o 'computer'.

    No es necesario devolver ningún valor.
    
    El propósito de esta función es utilizarse para aumentar correctamente la puntuación del ganador después de cada ronda.

4. Crea una función advanceRound(). Esta función debe incrementar el valor de currentRoundNumber en 1.

    El propósito de esta función es utilizarse para actualizar el número de ronda después de cada ronda.

    Tras completarlo advanceRound(), tu juego "Adivinador de Números" debería estar completamente operativo. Podrás adivinar, ver cómo tu puntuación o la de la computadora aumenta correctamente, pasar a la siguiente ronda y ver la ronda correcta.

5. Comprueba que tu código funciona correctamente invocando las funciones recién escritas en script.js con entradas de ejemplo. 
    
    Puedes eliminar este código una vez que estés seguro de que todo funciona correctamente.

6. Si quieres ampliar tu proyecto por tu cuenta, puedes considerar lo siguiente:

    Probablemente calculaste la distancia desde la estimación de la computadora hasta el objetivo y desde la estimación humana hasta el objetivo. 
    
    Mueve esto a una función getAbsoluteDistance() independiente que tome dos números y devuelva la distancia, y luego úsala dentro de tu función compareGuesses().

    Anada una función para comprobar si la suposición del usuario está entre 0 y 9 y alert() si su número está fuera de rango. No es posible establecer un número fuera de este rango con los botones + y -, pero los usuarios pueden hacerlo escribiendo directamente en el campo de entrada.
