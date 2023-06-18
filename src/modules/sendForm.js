const sendForm = ({ idForm, someElem = [] }) => {
    const form = document.getElementById(idForm);
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const form3 = document.getElementById('form3');

    const statusBlock = document.createElement('div');
    const loadText = 'загрузка';
    const errorText = 'ошибка';
    const successText = 'отправлено';

    console.log(form1);

    const validate = list => {
        let success = true;
        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };
    const sendData = data => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    };
    const submitForm = form => {
        let formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            console.log(element);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        sendData(formBody).then(data => {
            statusBlock.textContent = successText;
            formElements.forEach(input => {
                input.value = '';
            });
        }).catch(error => {
            statusBlock.textContent = errorText;
        });
    };

    try {
        if (!form1) {
            throw new Error('верните, пожалуйста, форму');
        }
        form1.addEventListener('submit', e => {
            e.preventDefault();
            const formElements = form1.querySelectorAll('input');
            if (validate(formElements)) {
                submitForm(form1);
            } else {
                alert('Ошибка ввода');
            }
        });
    } catch (error) {
        console.log(error.message);
    }
    try {
        if (!form2) {
            throw new Error('верните, пожалуйста, форму');
        }
        form2.addEventListener('submit', e => {
            e.preventDefault();
            const formElements = form2.querySelectorAll('input');
            if (validate(formElements)) {
                submitForm(form2);
            } else {
                alert('Ошибка ввода');
            }
        });
    } catch (error) {
        console.log(error.message);
    }
    try {
        if (!form3) {
            throw new Error('верните, пожалуйста, форму');
        }
        form3.addEventListener('submit', e => {
            e.preventDefault();
            const formElements = form3.querySelectorAll('input');
            if (validate(formElements)) {
                submitForm(form3);
            } else {
                alert('Ошибка ввода');
            }
        });
    } catch (error) {
        console.log(error.message);
    }




};

export default sendForm;