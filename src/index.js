import './styles.css';
import { greet } from './js/components';

const player = 'we start? ';

setTimeout(() => {
    greet(player);
}, 2000);
