import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { EditSvg } from '@/assets/svgs/EditSvg'
import { CameraSvg } from '@/assets/svgs/CameraSvg'

export function HeaderHome() {
  return (
    <View className="flex flex-row items-center justify-between">
      <View className="flex flex-row items-center gap-x-3">
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          className="w-10 h-10 rounded-full bg-blue-500 border border-blue-200"
        />
        <Text className="text-[30px] font-bold">Chats</Text>
      </View>

      <View className="flex flex-row items-center gap-x-3">
        <TouchableOpacity className="p-2 rounded-full bg-gray-200">
          <CameraSvg />
        </TouchableOpacity>
        <TouchableOpacity className="p-2 rounded-full bg-gray-200">
          <EditSvg />
        </TouchableOpacity>
      </View>
    </View>
  )
}