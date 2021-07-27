import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ResultsDetail = ({ result }) => {
   return (
      <View style={styles.container}>
         <Image style={styles.image} source={{ uri: result.image_url }} />
         <Text style={styles.name}>{result.name}</Text>
         <Text>{result.rating} Yıldız, {result.review_count} Görüntülenme</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginLeft: 15
   },
   image: {
      height: 120,
      width: 250,
      borderRadius: 4,
      marginBottom: 5
   },
   name: {
      fontWeight: 'bold'
   },
   rating: {

   }
});

export default ResultsDetail;