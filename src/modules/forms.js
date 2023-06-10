const forms = () => {
    const form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2'),
        form3 = document.getElementById('form3'),
        form1Name = document.getElementById('form1-name'),
        form1Email = document.getElementById('form1-email'),
        form1Phone = document.getElementById('form1-phone'),

        form2Name = document.getElementById('form2-name'),
        form2Message = document.getElementById('form2-message'),
        form2Email = document.getElementById('form2-email'),
        form2Phone = document.getElementById('form2-phone'),

        form3Name = document.getElementById('form3-name'),
        form3Email = document.getElementById('form3-email'),
        form3Phone = document.getElementById('form3-phone');
    let isError = false;
    //если создаю такие функции, а потом их применяю в формах, то  isError = true; не могу понять, почему. Всю ночь потратила на это
    /*  const validatePhoneDigits = input => {
         if (/^[\d()+-]+$/g.test(input.value) && input.value !== '') {
             console.log(isError);
         } else {
             isError = true;
             alert('вводите только цифры, дефис и круглые скобки');
             console.log(isError);
         }
     },
         validateEmailLatin = input => {
             if (/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(input.value) && input.value !== '') {
                 console.log(isError);
             } else {
                 isError = true;
                 alert('проверьте правильность ввода');
                 console.log(isError);
             }
         },
         validateTextCyrillic = input => {
             if (/^[А-Яа-яЁё\s-]+$/gi.test(input.value) && input.value !== '') {
                 alert('только кириллицf');
                 console.log(isError);
             } else {
                 isError = true;
                 alert('вводите только кириллицу');
                 console.log(isError);
                 console.log('тпру');
             }
         }; */


    form1.addEventListener('submit', e => {
        e.preventDefault();
        isError = false;
        //validateTextCyrillic(form1Name.value);
        if (/^[А-Яа-яЁё\s-]+$/gi.test(form1Name.value) && form1Name.value !== '') {
            console.log(isError);
        } else {
            isError = true;
            alert('вводите только кириллицу');
            console.log(isError);
            console.log('тпру');
        }
        // validateEmailLatin(form1Email.value);
        if (/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(form1Email.value) && form1Name.value !== '') {

            console.log(isError);
        } else {
            isError = true;
            alert('проверьте правильность ввода');
            console.log(isError);
        }
        //validatePhoneDigits(form1Phone.value);
        if (/^[\d()+-]+$/g.test(form1Phone.value) && form1Phone.value !== '') {

            console.log(isError);
        } else {
            isError = true;
            alert('вводите только цифры, дефис и круглые скобки');
            console.log(isError);
        }

        if (!isError) {
            alert('данные отправлены');
        }
    });
    form3.addEventListener('submit', e => {
        e.preventDefault();
        isError = false;
        if (/^[А-Яа-яЁё\s-]+$/gi.test(form3Name.value) && form3Name.value !== '') {
            console.log(isError);
        } else {
            isError = true;
            alert('вводите только кириллицу');
            console.log(isError);
            console.log('тпру');
        }
        if (/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(form3Email.value) && form3Name.value !== '') {
            console.log(isError);
        } else {
            isError = true;
            alert('проверьте правильность ввода');
            console.log(isError);
        }
        if (/^[\d()+-]+$/g.test(form3Phone.value) && form3Phone.value !== '') {
            console.log(isError);
        } else {
            isError = true;
            alert('вводите только цифры, дефис и круглые скобки');
            console.log(isError);
        }

        if (!isError) {
            alert('данные отправлены');
        }
    });
    form2.addEventListener('submit', e => {
        e.preventDefault();
        isError = false;
        if (/^[А-Яа-яЁё\s-]+$/gi.test(form2Message.value) && form2Message.value !== '') {
            console.log(isError);
        } else {
            isError = true;
            alert('вводите только кириллицу');
            console.log(isError);
            console.log('тпру');
        }
        if (/^[А-Яа-яЁё\s-]+$/gi.test(form2Name.value) && form2Name.value !== '') {
            console.log(isError);
        } else {
            isError = true;
            alert('вводите только кириллицу');
            console.log(isError);
            console.log('тпру');
        }
        if (/^[a-zA-Z0-9-_.!~*']+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi.test(form2Email.value) && form2Name.value !== '') {

            console.log(isError);
        } else {
            isError = true;
            alert('проверьте правильность ввода');
            console.log(isError);
        }
        if (/^[\d()+-]+$/g.test(form2Phone.value) && form2Phone.value !== '') {

            console.log(isError);
        } else {
            isError = true;
            alert('вводите только цифры, дефис и круглые скобки');
            console.log(isError);
        }

        if (!isError) {
            alert('данные отправлены');
        }
    });

    console.log("forms");
};

export default forms;

