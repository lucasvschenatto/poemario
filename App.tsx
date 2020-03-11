import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Gallery from 'react-native-image-gallery'
import PhotoGrid from 'react-native-thumbnail-grid'
import BestGrid from './src/BestGrid'

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
  const galleryImages = [
    {source:image,dimensions:{width:300,height:300}},
    { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
    { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
    { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
    { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } },
  ]
  const imageSources =  [
    {
      // source:image,
      // dimensions: { width:800,height:535 }
      url:"https://abrilviagemeturismo.files.wordpress.com/2016/10/thinkstockphotos-454987953.jpeg",
      dimensions: { width: 800, height: 535 }
    }
  ]
  const images = [
    "https://abrilviagemeturismo.files.wordpress.com/2016/10/thinkstockphotos-454987953.jpeg",
    'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    image,
    "https://abrilviagemeturismo.files.wordpress.com/2016/10/thinkstockphotos-454987953.jpeg",
    'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
    image,
  ]
  return (
    //   <Image
    //     style={{width:300,height:300}}
    //     source={image}
    //     />
      
    
    //   <FlatList
    //     data={verses}
    //     renderItem={({item})=>{return <Item text={item.text} key={item.key} image={item.image}></Item>}}
    //     keyExtractor={(item)=>item.key}
    //   />
    <View>
      <PhotoGrid source={images} onPressImage={uri => this.showImage(uri)} />
      <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={galleryImages}
      />
      <BestGrid/>
    </View>
  )
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
