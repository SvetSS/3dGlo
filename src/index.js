import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';
import db from './modules/db';
import sendForm from './modules/sendForm';


timer('22 june 2023');
menu();
modal();
calc(100);
forms();
tabs();
slider();
db();
sendForm({
    idForm: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});

