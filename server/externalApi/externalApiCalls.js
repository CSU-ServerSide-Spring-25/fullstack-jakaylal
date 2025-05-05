const axios = require('axios');
 const apiKey = '95f58702d02c4ab1ac0160935253004'
 
 module.exports = {
     forecastApi: async (location, days) => {
         return await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`)
             .then(function (response) {
                return response.data;
             })
             .catch(function (error) {
                 console.log(error);
                 return{ error: "Unable to fetch forecast information." }
             })
     },
     // add alert API call hint: change forecast.json to match api wanted 
     alertApi: async (location, days) => {
        return await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=yes`)
            .then(function (response) {
               return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return{ error: "Unable to fetch current information." }
            })
    },
     // add current API
     currentApi: async (location, days) => {
        return await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&days=${days}&aqi=no`)
            .then(function (response) {
               return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return{ error: "Unable to fetch current information." }
            })
    },
     // documentation https://www.weatherapi.com/docs/#intro-request
 }