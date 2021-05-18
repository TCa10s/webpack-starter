/* 
  Con esta importacion indicamos al archivo componets.js
  que requiere importar esta libreria.
*/
import '../css/components.css';

export const greet = (msg) => {
  const h2 = document.createElement('h2');
  h2.innerText = `${msg}`;
  document.body.append(h2);
}