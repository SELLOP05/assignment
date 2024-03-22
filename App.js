import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Course from './Course';

const studentData = [
  { name: 'Java Programming', description: 'Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.', imageSource: require('./sa.png') },
  { name: 'Data Structures', description: 'Data structures are a specific way of organizing data in a specialized format on a computer so that the information can be organized, processed, stored, and retrieved quickly and effectively. They are a means of handling information, rendering the data for easy use', imageSource: require('./se.png') },
  { name: 'Software Engineering', description: 'Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications. Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users.', imageSource: require('./si.png') },
  { name: 'Database Management', description: 'A database management system (DBMS) is system software for creating and managing databases. A DBMS makes it possible for end users to create, protect, read, update and delete data in a database.', imageSource: require('./so.png') },
  { name: 'C++ Programming II', description: ' is used in fields such as system software, game development, embedded systems, scientific computing and high-performance applications.jcdcbcxchdshcdbchxdcbchcbdbc b hdjdxjjdnc jddjjjfhdcj djjffhdhdhcdhhdhd ndjjdjncjdhfgdjnxdjjf njffhhfhdhdhd nnddjjdjdhfhdjdjjhf jdjdjdjjdj jdjdjdjj', imageSource: require('./su.png') }
];

const Header = () => {
  return (
    <Text style={styles.header}>LIMKOKWING UNIVERSITY OF CREATIVE AND TECHNOLOGY PROSPECTUS</Text>
  );
};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      {studentData.map((data, index) => (
        <Course 
          key={index} 
          name={data.name} 
          description={data.description} 
          imageSource={data.imageSource} 
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#00A9FF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    
  },
});

export default App;
