import { Text, Button, TouchableHighlight, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useContext } from 'react'
import { AnswersContext } from '../../context/AnswersContext'
import { FlatList } from 'react-native-gesture-handler';

export default function Q2({navigation}) {

  const [itemSelect2, setItemSelect2] = useState(-1);
  const { resp, defineResp } = useContext(AnswersContext);

  const OPTIONS = [
    {
      id: '4',
      title: "opção 4"
    },
    {
      id: '5',
      title: "opção 5"
    },
    {
      id: '6',
      title: "opção 6"
    },
  ]

  useEffect(() => {
    console.log("dentro de detail: ", resp, itemSelect2);
  }, [resp, itemSelect2])

  useEffect ( () => {
    console.log("useEffect sem parametro detail", resp);
    setItemSelect2(resp[1]);
  }, []);

  handleSelectionDetail = (id) => {
    if (itemSelect2 === id){
      setItemSelect2(null);
      defineResp(1, -1);
    }
    else {
      setItemSelect2(id);
      defineResp(1, id);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Array: {resp}</Text>

      <FlatList style={styles.container}
        ListHeaderComponent={() => <Text>Cabeçalho</Text>}
        data={OPTIONS}
        extraData={itemSelect2}

        renderItem={({ item, index, separators }) => (
          <TouchableHighlight 
            key={item.key}
            onPress={() => handleSelectionDetail(item.id)}
            style={item.id === itemSelect2 ? styles.selected : null}
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

      <Button title='Avançar' onPress={() => navigation.navigate('Q3')} />

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