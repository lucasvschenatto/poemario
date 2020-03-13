import React from 'react'
import { View, FlatList, Text, StyleSheet, Image, Dimensions } from 'react-native'
import verses from './assets/verses'


type Verse = {
	text: string
	image: string
	key: number|string
}
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
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
		console.log(verses)
		return (
		<View
			style={styles.container}
			>
			
			<View style={styles.offset} />
			<View style={styles.listView}>
				<FlatList
					style={styles.list}
					data={verses} 
					renderItem={this.renderItem}
					keyExtractor={(item)=>item.key.toString()}
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
		height: screenHeight/3,
	},
	listView:{
		flexDirection: 'row',
		alignItems: 'flex-start',
		paddingHorizontal: 10
	},
	list:{
		height: screenHeight/3*2,
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