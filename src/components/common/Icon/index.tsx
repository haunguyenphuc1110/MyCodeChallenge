import React from 'react'
import { View, StyleSheet } from 'react-native'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesignIcons from 'react-native-vector-icons/AntDesign'

import { COLORS } from 'Constants'

interface IconProps {
  type?: string
  name: string
  style?: object
  color?: string
  size?: number
  hasBackground?: boolean
  onPress?: () => void
}

const mappingIcon = {
  fontawesome: FontAwesomeIcons,
  material: MaterialIcons,
  ion: Ionicons,
  antdesign: AntDesignIcons
} as any

const RNIcon: React.FC<IconProps> = ({
  type = 'fontawesome',
  name,
  style,
  color = COLORS.white,
  size = 12,
  hasBackground = false,
  onPress
}) => {
  const Icon = mappingIcon[type]

  if (hasBackground) {
    return (
      <View style={[styles.wrapper, style]}>
        <Icon
          name={name}
          color={color}
          size={size}
          onPress={onPress} />
      </View>
    )
  }

  return (
    <Icon
      name={name}
      style={style}
      color={color}
      size={size}
      onPress={onPress} />
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.transparent,
    padding: 5,
    borderRadius: 50
  }
})

export default RNIcon
