import { View, TextInput } from 'react-native'
import React from 'react'
import { SearchIcon } from 'lucide-react-native'
import colors from 'tailwindcss/colors'

export function SearchInput() {
  return (
    <View className="flex flex-row items-end gap-x-1 p-4 bg-zinc-200 rounded-2xl">
      <SearchIcon size={18} color={colors.zinc[500]} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.zinc[500]}
        className="text-base"
      />
    </View>
  )
}