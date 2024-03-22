import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const Course = ({ name, description, imageSource }) => {
  const [rating, setRating] = useState(0);

  const increaseRating = () => {
    if (rating < 6) {
      setRating(rating + 1);
    }
  }

  return (
    <View style={styles.courseContainer}>
      <Image
        source={imageSource} 
        style={styles.image}
      />
      <Text style={styles.name}>{name}</Text>
      <Text>{description}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: {rating}</Text>
        <Button title="Rate" onPress={increaseRating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    marginBottom: 20,
    alignItems:'baseline',
    borderWidth:5,
    borderColor:'black',
    borderRadius:5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  rating: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default Course;
