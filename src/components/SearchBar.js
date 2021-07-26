import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
   return (
      <View style={styles.backgroundStyle}>
         {/* burada aldigim hatanin sebebi style yerine size yazmamdi, dikkat!! */}
         <Feather name='search' style={styles.iconStyle}/>
         <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            placeholder='Ara' // arama kisminda silik olarak gozuken kisim
            style={styles.inputStyle}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   backgroundStyle: {
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row'
   },
   iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15

   },
   inputStyle: {
      flex: 1,
      fontSize: 18
   }
   
});

export default SearchBar;