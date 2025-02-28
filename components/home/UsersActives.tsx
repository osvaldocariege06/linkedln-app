import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { PlusIcon } from 'lucide-react-native'
import colors from 'tailwindcss/colors'

const ACTIVEUSERS = [
  {
    image: 'https://github.com/Ezedelio14.png',
    name: 'Ezedelio Garcia',
  },
  {
    image: 'https://github.com/Raul743.png',
    name: 'Raul Inácio',
  },
  {
    image: 'https://github.com/herlanderbento.png',
    name: 'Herlander Bento',
  },
  {
    image: 'https://github.com/joelmar2011140.png',
    name: 'Joel Marinho',
  },
  {
    image: 'https://github.com/Garcia-Sebastiao.png',
    name: 'Garcia Sebastião',
  },
  {
    image: 'https://github.com/osvaldocariege06.png',
    name: 'Edvaldo Cariege',
  },
]

export function UsersActives() {
  return (
    <View className="flex flex-row items-center gap-x-0">
      <TouchableOpacity className="flex flex-col gap-y-1 justify-center ml-3 items-center">
        <View className="w-[52px] h-[52px] bg-zinc-200 rounded-full items-center justify-center">
          <PlusIcon color={colors.zinc[800]} size={24} />
        </View>
        <Text className="text-zinc-400 text-xs text-center line-clamp-1">
          Your story
        </Text>
      </TouchableOpacity>
      <FlatList
        data={ACTIVEUSERS}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={key => key.name}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex flex-col gap-y-1 justify-center ml-3 items-center">
            <View className="w-[52px] h-[52px] bg-zinc-200 rounded-full items-center justify-center border border-zinc-100">
              <Image
                source={{ uri: item.image }}
                width={52}
                height={52}
                alt="h-[52px]"
                className="rounded-full w-[52px] relative"
              />
              <View className="bg-green-600 w-3 h-3 rounded-full border border-white absolute bottom-1 right-1" />
            </View>
            <Text className="text-zinc-400 text-xs text-center line-clamp-1">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}