import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, results, errorMessage] = useResults();

   const filterResultByPrice = (price) => {
      // price === '$' || '$$' || '$$$'
      // @?? bu asagi satirdaki syntax ne ifade ediyor?
      return results.filter(result => {
         return result.price === price;
      });
   }   

   return (
      <>
         <SearchBar 
            term={term}
            onTermChange={setTerm}
            // searchApi 'term' degiskeni ile beraber cagirilmazsa bu sefer deafult 'pasta' kelimesini aratip cikan sonucu yazdiriyor
            onTermSubmit={() => searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <ScrollView>
            <ResultsList 
               results={filterResultByPrice('$')} 
               title='Cebinizin Dostu!'
            />
            <ResultsList 
               results={filterResultByPrice('$$')} 
               title='Eccük Pahalı!'
            />
            <ResultsList 
               results={filterResultByPrice('$$$')} 
               title='Akrep Cebinizde!'
            />
         </ScrollView>
      </>
   );
};

const styles = StyleSheet.create({});

export default SearchScreen;