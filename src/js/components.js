/* 
  Con esta importacion indicamos al archivo componets.js
  que requiere importar esta libreria.
*/
import '../css/components.css';

export const greet = (player) => {
  const h2 = document.createElement('h2');
  h2.innerText = `${player}`;
  document.body.append(h2);