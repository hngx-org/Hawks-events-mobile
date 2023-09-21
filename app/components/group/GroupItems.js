import { View, Text, StyleSheet} from 'react-native'
import GroupComponent from '../shared/GroupComponent'

const GroupItems = () => {
    return(
        <View styles={styles.container}>
            <GroupComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:  {
        justifyContent: "center",
        flexDirection:'row'
    }
})

export default GroupItems