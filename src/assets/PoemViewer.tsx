import React from 'react'
import { View, SectionList, Text, StyleSheet } from 'react-native'
import { Verse } from '../Verse'
import verses from './verses'

const poem: Verse[] = verses.slice(0,15)
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
class PoemViewer extends React.Component{
  renderItem(	{item}:{item:Verse}){
		return <Item {...item}></Item>
	}

  render(){
    return (
      <View style={styles.container}>
        <SectionList
          sections={[{data:poem}]}
          renderItem={(item)=>this.renderItem(item)}

          />
      </View>
    )
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
	listView:{
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
export default PoemViewer