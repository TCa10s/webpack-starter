/* 
  Con esta importacion indicamos al archivo componets.js
  que requiere importar esta libreria.
*/
import '../css/components.css';

export const greet = (player) => {
  console.log('Creating tag h1');
  const h1 = document.createElement('h1');
  h1.innerText = `Hello, ${player}!`;

  document.body.append(h1);
};
