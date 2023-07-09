import { View, Text, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import supabase from '../supabase'

const Welcome = () =>  {
  return (
    <SafeAreaView>
      {/* <View>
        <Image />
      </View> */}
      <View>
        <Text>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}

export default Welcome
