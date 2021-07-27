import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetails';


const ResultsList = ({ title, results, navigation }) => {
   if (!results.length) {
      return null;
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <FlatList
            horizontal  // hotizontal={true} ile ayni islevde
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id} // @?? resulttan ne kastettigimizi nasil anlayacak makine
            renderItem={({ item })  => {
               return (
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
                  >
                     <ResultsDetail result={item}/>
                  </TouchableOpacity>   
               );
            }}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
     marginBottom: 10 
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 15
   }
});

export default withNavigation(ResultsList);

