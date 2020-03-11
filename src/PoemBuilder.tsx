import React from 'react'
import { View, FlatList, Text } from 'react-native'

type Verse = {
    text: string;
    image: string;
    key: string;
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
    }
]
function Item({text}:{text:string}) {
    return (
        <Text>{text}</Text>
    );
  }
class PoemBuilder extends React.Component{
    renderItem({item}:{item:Verse}){
        return <Item text={item.text}></Item>
    }
    render(){
        return (<View>
            <FlatList
                data={verses} 
                renderItem={this.renderItem}
                keyExtractor={(item)=>item.key}
            />
        </View>)
    }
}

export default PoemBuilder