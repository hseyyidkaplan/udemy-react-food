import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();
   
   console.log(results);

   return (
      <View>
         <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchApi}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <Text>Girdiğiniz kelime ile alakalı {results.length} adet sonuç listeleniyor</Text>
         <ResultsList title='Cebinizin Dostu!'/>
         <ResultsList title='Eccük Pahalı!'/>
         <ResultsList title='Akrep Cebinizde!'/>
      </View>
   );
};

const styles = StyleSheet.create({
});

export default SearchScreen;