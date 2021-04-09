import React from 'react'
import { View, Text, Modal, ActivityIndicator } from 'react-native'
import Spinner from 'react-native-spinkit'

import { COLORS } from 'Constants'
import styles from './styles'

enum Animation {
  NONE = 'none',
  SLIDE = 'slide',
  FADE = 'fade',
}

enum Size {
  SMALL = 'small',
  LARGE = 'large',
}

interface LoadingProps {
  color?: string
  animation?: Animation
  overlayColor?: string
  size?: Size
  textContent?: string
  textStyle?: object
  visible: boolean
  indicatorStyle?: {}
  customIndicator?: React.ReactNode
  children?: React.ReactNode
  spinnerKey?: string
}

const Loading = ({
  color = COLORS.white,
  animation = Animation.NONE,
  overlayColor = 'rgba(0, 0, 0, 0.6)',
  size = Size.LARGE,
  textContent = '',
  textStyle = {},
  visible = false,
  indicatorStyle = {},
  customIndicator = (
    <Spinner
      size={60}
      type={'ThreeBounce'}
      color={color} />
  ),
  children = null,
  spinnerKey = '',
}: LoadingProps) => {
  const renderDefaultContent = () => {
    return (
      <View style={styles.background}>
        {customIndicator ? (
          customIndicator
        ) : (
          <ActivityIndicator
            color={color}
            size={size}
            style={[styles.activityIndicator, { ...indicatorStyle }]}
          />
        )}
        <View style={[styles.textContainer, { ...indicatorStyle }]}>
          <Text style={[styles.textContent, textStyle]}>{textContent}</Text>
        </View>
      </View>
    )
  }

  const renderSpinner = () => {
    if (!visible) return null

    const spinner = (
      <View
        style={[styles.container, { backgroundColor: overlayColor }]}
        key={spinnerKey ? spinnerKey : `spinner_${Date.now()}`}>
        {children ? children : renderDefaultContent()}
      </View>
    )

    return (
      <Modal
        animationType={animation}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={visible}>
        {spinner}
      </Modal>
    )
  }

  return renderSpinner()
}

export default Loading
