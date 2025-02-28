
import { HeaderHome } from '@/components/home/header'
import {
  SafeAreaView, View
} from 'react-native'
import { SearchInput } from '@/components/home/SearchInput'
import { UsersActives } from '@/components/home/UsersActives'
import { UserMessage } from '@/components/home/UserMessage'


export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-4 gap-y-4">
        <HeaderHome />
        <SearchInput />
       <UsersActives />
       <UserMessage />
      </View>
    </SafeAreaView>
  )
}
