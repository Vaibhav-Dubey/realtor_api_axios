const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://realtor.p.rapidapi.com/locations/v2/auto-complete',
        params: {
          input: 'new york',
          limit: '10'
        },
        headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': process.env.API_HOST
        }
      };
    axios.request(options)

    
.then((response) => {
    console.log(response);
    res.send(response.data);
}
).catch((error) => {
    console.log(error);
}
);

});
//     const url = 'https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';
//     const options = {
//         method: 'GET',
       
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }


app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
