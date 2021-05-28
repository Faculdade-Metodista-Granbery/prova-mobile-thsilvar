import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';
import firebase from './services/firebase';
import {useList} from 'react-firebase-hooks/database';
import {colors}  from './utils/colors';


export default function App() {

  const [cards,loading, erro] = useList(firebase.getAll());
  

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={"#c64242"}
      />
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote 
            key={item.val().id}
           task={item.val().task}
           profileImg={item.val().profile} />
        }
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});