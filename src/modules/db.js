const db = () => {
    const getData = url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('ошибочка вышла: ' + response.status);
                }
                return response.json();
            })
    }

    const sendData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('ошибочка вышла: ' + response.status);
                }
                return response.json();
            });
    };
    const getDataUrl = './db.json';
    const sendDataUrl = 'https://jsonplaceholder.typicode.com/posts';


    getData(getDataUrl)
        .then(data => {
            console.log('Полученные данные:', data);


            return sendData(sendDataUrl, data);
        })
        .then(response => {
            console.log('Ответ от сервера:', response);
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });

    console.log("fdb");
};

export default db;