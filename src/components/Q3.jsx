import { Text, Button, TouchableHighlight, StyleSheet, View } from 'react-native'
import React, { useEffect, useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AnswersContext } from '../../context/AnswersContext'
import { FlatList } from 'react-native-gesture-handler';

export default function Q3({navigation}) {

  const [itemSelect3, setItemSelect3] = useState(-1);
  const { resp, defineResp } = useContext(AnswersContext);

  const OPTIONS = [
    {
      id: '7',
      title: "opção 7"
    },
    {
      id: '8',
      title: "opção 8"
    },
    {
      id: '9',
      title: "opção 9"
    },
  ]

  useEffect(() => {
    console.log("dentro de q3: ", resp, itemSelect3);
  }, [resp, itemSelect3])

  useEffect ( () => {
    console.log("useEffect sem parametro q3", resp);
    setItemSelect3(resp[2]);
  }, []);

  handleSelectionQ3 = (id) => {
    if (itemSelect3 === id){
      setItemSelect3(null);
      defineResp(2, -1);
    }
    else {
      setItemSelect3(id);
      defineResp(2, id);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Array: {resp}</Text>

      <FlatList style={styles.container}
        ListHeaderComponent={() => <Text>Cabeçalho</Text>}
        data={OPTIONS}
        extraData={itemSelect3}

        renderItem={({ item, index, separators }) => (
          <TouchableHighlight 
            key={item.key}
            onPress={() => handleSelectionQ3(item.id)}
            style={item.id === itemSelect3 ? styles.selected : null}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <View style={styles.item}>
              <Text style={styles.title}> {item.title} </Text>
            </View>
          </TouchableHighlight>
        )}

        keyExtractor={item => item.id}

      />

      <Button title='Avançar' onPress={() => navigation.navigate('Termino')} />

    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faa",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  selected: {
    backgroundColor: "#fff",
  }
});