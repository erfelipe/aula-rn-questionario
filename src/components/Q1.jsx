import { Button, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AnswersContext } from '../../context/AnswersContext'
import { FlatList } from 'react-native-gesture-handler';


export default function Q1({ navigation }) {

  const [itemSelect1, setItemSelect1] = useState(-1);
  const { resp, defineResp } = useContext(AnswersContext);

  const OPTIONS = [
    {
      id: '1',
      title: "opção 1"
    },
    {
      id: '2',
      title: "opção 2"
    },
    {
      id: '3',
      title: "opção 3"
    },
  ]

  const Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

  useEffect(() => {
    console.log("useEffect sem parametro home", resp);
    setItemSelect1(resp[0]);
  }, []);

  useEffect(() => {
    console.log("dentro de home ", resp, itemSelect1);
  }, [resp, itemSelect1]);

  handleSelectionHome = (id) => {
    if (itemSelect1 === id) {
      setItemSelect1(null);
      defineResp(0, -1);
    }
    else {
      setItemSelect1(id);
      defineResp(0, id);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Array: {resp}</Text>

      <FlatList
        ListHeaderComponent={() =>
          <Text>Cabeçalho</Text>
        }
        data={OPTIONS}
        extraData={itemSelect1}

        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.key}
            onPress={() => handleSelectionHome(item.id)}
            style={item.id === itemSelect1 ? styles.selected : null}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <Item title={item.title} />
          </TouchableHighlight>
        )}

        keyExtractor={item => item.id}

      />

      <Button title='Avançar' onPress={() => navigation.navigate('Q2')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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