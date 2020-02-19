import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
type Verse = {
  text: string;
  image: string;
  key: string;
};

const verses:Array<Verse> = [
  {
    text:'A arte e a ciência',
    image:'001-pt.jpg',
    key:'001'
  },
  {
    text:'A ciência da arte',
    image:'002-pt.jpg',
    key:'002'
  },
  {
    text:'A arte da ciência',
    image:'003-pt.jpg',
    key:'003'
  },
  {
    text:'E teu amor com o meu',
    image:'004-pt.jpg',
    key:'004'
  }
]

function Item({text}:Verse) {
  return (
    // <TouchableOpacity
      // onPress={() => onSelect(id)}
      // style={[
      //   styles.item,
      //   { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      // ]}
    // >
      <Text style={styles.item}>{text}</Text>
    // </TouchableOpacity>
  );
}

export default function App() {
  const image = require("./assets/000-pt.jpg")
  const imageSources =  [
    {
      // source:image,
      // dimensions: { width:800,height:535 }
      url:"https://abrilviagemeturismo.files.wordpress.com/2016/10/thinkstockphotos-454987953.jpeg",
      dimensions: { width: 800, height: 535 }
    }
  ]
  return (
    <View style={styles.container}>
      {/* <Image
        style={{width:300,height:300}}
        source={image}/> */}
      
      <FlatList
        data={verses}
        renderItem={({item})=>{return <Item text={item.text} key={item.key} image={item.image}></Item>}}
        keyExtractor={(item)=>item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fba123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
