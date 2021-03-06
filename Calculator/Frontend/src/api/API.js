const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://ec2-18-191-137-127.us-east-2.compute.amazonaws.com:3001'

const headers = {
    'Accept': 'application/json'
};


export const getResult = () =>
    fetch(`${api}/calculate`)
        .then(res => res.json())
        .catch(error => {
            console.log("This is error.");
            return error;
        });

export const performCalc = (payload) =>

    fetch(`${api}/calculate`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json()

    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
