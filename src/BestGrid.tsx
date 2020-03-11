import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native'
import PhotoGrid from 'react-native-photo-grid';

class BestGrid extends React.Component<any,{items:Array<any>}> {

  constructor(props:any) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      // return { id: i, src: 'http://placehold.it/200x200?text='+(i+1) }
      return { id: i, src: 'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg' }
    });
    this.setState({ items });
  }

  render() {
    return(
      <PhotoGrid
        data = { this.state.items }
        itemsPerRow = { 3 }
        itemMargin = { 1 }
        renderHeader = { this.renderHeader }
        renderItem = { this.renderItem }
      />
    );
  }

  renderHeader() {
    return(
      <Text>I'm on top!</Text>
    );
  }

  renderItem({id,src}:{id:string,src:string}, itemSize:number) {
    return(
      <TouchableOpacity
        key = { id }
        style = {{ width: itemSize, height: itemSize }}
        onPress = { () => {
          // Do Something
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: src }}
        />
      </TouchableOpacity>
    )
  }

}

export default BestGrid;