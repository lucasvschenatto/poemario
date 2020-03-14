import React from 'react'
import { View, FlatList, Text, StyleSheet, Image, Dimensions } from 'react-native'
import verses from './assets/verses'
import { Verse } from './Verse'


const screenHeight = Dimensions.get('screen').height
function Item({text}:Verse) {
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
		return <Item {...item}></Item>
	}
	render(){
		return (
		<View
			style={styles.container}
			>
			
			<View style={styles.offset}>
			<Image
				source={require('./assets/images/reuben-eggar-KiKBr2vclZo-unsplash.jpg')}
				style={styles.absoluteFill}
			/>
			</View>

			<View style={styles.listView}>
				<FlatList
					style={styles.list}
					data={verses} 
					renderItem={this.renderItem}
					keyExtractor={(item)=>item.verseKey.toString()}
				/>
			</View>
		</View>)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000000',
	},
	absoluteFill:{
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