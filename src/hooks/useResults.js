import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');

   const searchApi = async () => {
      try {
      const response = await yelp.get('/search', {
         limit: 50,
         term,
         location: 'turkey'
      });
      setResults(response.data.businesses);
      } catch (error) {
         setErrorMessage('Bir şeylerde sıkıntı olmalı!');
      }
   };

   // Call searchApi when component is first rendered.BAD CODE!
   useEffect(() => {
      searchApi('pasta');
   }, []);

   return [searchApi, results, errorMessage];
};