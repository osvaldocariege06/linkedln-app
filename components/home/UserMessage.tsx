import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import React from 'react'
import { Circle, CircleCheck } from 'lucide-react-native'
import colors from 'tailwindcss/colors'

export function UserMessage() {
  const [selectMessage, setSelectMessage] = React.useState(false)

  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        contentContainerStyle={{ paddingVertical: 10 }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={() => (
          <TouchableOpacity className="flex flex-row justify-between items-center gap-x-2">
            <View className="flex flex-row items-center gap-x-4">
              <Image
                source={{ uri: 'https://github.com/osvaldocariege06.png' }}
                width={60}
                height={60}
                className="rounded-full"
              />
              <View>
                <Text className="font-bold">Herlander Bento</Text>
                <View className="flex items-center flex-row gap-x-1">
                  <Text className="text-sm text-zinc-600">
                    Hey, how are you?
                  </Text>
                  <View className="w-[2px] h-[2px] bg-zinc-800 rounded-full" />
                  <Text className="text-sm text-zinc-600">9:40 AM</Text>
                </View>
              </View>
            </View>
            <Pressable onPress={() => setSelectMessage(!selectMessage)}>
              {selectMessage ? (
                <CircleCheck color={colors.zinc[400]} size={16} />
              ) : (
                <Circle color={colors.zinc[400]} size={16} />
              )}
            </Pressable>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}