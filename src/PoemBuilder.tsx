import React from 'react'
import { View, FlatList, Text, StyleSheet, Image } from 'react-native'
import { createRequire } from 'module'

type Verse = {
    text: string
    image: string
    key: string
}
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
    },
]
function Item({text}:{text:string}) {
    return (
        <View
            style={styles.item}>
            <Text
                style={styles.itemText}
                >
                {text}
            </Text>
        </View>
    )
  }
class PoemBuilder extends React.Component{
    renderItem({item}:{item:Verse}){
        return <Item text={item.text}></Item>
    }
    render(){
        return (
        <View
            style={styles.container}
            >
            
            <View style={styles.offset} />
            <View style={styles.list}>
                <FlatList
                    data={verses} 
                    renderItem={this.renderItem}
                    keyExtractor={(item)=>item.key}
                />
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E2233',
    },
    backgroundImage:{
        ...StyleSheet.absoluteFillObject,
    },
    offset:{
        flex: 1,
    },
    list:{
        flex:2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10
    },
    item: {
        flex:1,
        margin:5,
    },
    itemText:{
        fontSize: 20,
        color: '#fafafc'
    },
  })

export default PoemBuilder