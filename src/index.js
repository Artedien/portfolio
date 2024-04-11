import './index.scss';
import slider from './js/components/slider'
import heroBg from './js/components/heroBg'
import scroll from  './js/components/scroll'
import burger from './js/components/burger';


window.addEventListener('DOMContentLoaded', () => {
    try {
        slider();
    } catch {}
    try {
        heroBg();
    } catch {}
    try {
        scroll();
    } catch {}
    try {
        burger();
    } catch {}
});
