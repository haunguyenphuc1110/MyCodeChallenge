import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Switch,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'

import Icon from 'components/common/Icon'

import { getCardConfig, getCardInfo, updateCardConfig } from 'Actions/cardActions'
import { COLORS } from 'Constants'
import { IMAGES } from 'Assets'
import { format } from 'utils/formatCurrency'
import { formatCardNumber, maskCardNumber } from 'utils/card'
import I18n from 'I18n/I18n'
import styles from './styles'

const { width } = Dimensions.get('window')

const DebitCard = () => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isShowCard, setShowCard] = useState(false)
  const [spendingLimitSate, setSpendingLimit] = useState('')

  const card = useSelector((state: any) => state.card)
  const cardInfo = card?.info
  const spendingLimit = (card?.config?.spending_limit_weekly || '').toString()
  const currentSpending = (card?.config?.current_spending_limit || '').toString()
  const spendingLimitActive = card?.config?.spending_limit_active
  const availableBalance = (card?.info?.available_balance || '').toString()
  const percentage = currentSpending / parseInt(spendingLimitSate)

  useEffect(() => {
    dispatch(getCardConfig())
    dispatch(getCardInfo())
  }, [dispatch])

  useEffect(() => {
    setIsEnabled(spendingLimitActive)
  }, [spendingLimitActive])

  useEffect(() => {
    setSpendingLimit(spendingLimit)
  }, [spendingLimit])

  const renderInfo = () => (
    <View style={styles.container}>
      <View style={styles.spaceBetween}>
        <Text style={[styles.title, { fontSize: 26 }]}>{I18n.t('debit_card')}</Text>
        <FastImage
          style={styles.image}
          source={IMAGES.ICON}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      <Text style={[styles.title, { marginTop: 16, fontWeight: '400' }]}>{I18n.t('available_balance')}</Text>

      <View style={styles.badgeContainer}>
        <View style={styles.badge}>
          <Text style={styles.title}>S$</Text>
        </View>
        <Text style={[styles.title, { fontSize: 26, marginLeft: 8 }]}>{format(availableBalance)}</Text>
      </View>
    </View>
  )

  const renderCard = () => (
    <>
      <TouchableWithoutFeedback onPress={showCard}>
        <View style={styles.cardButton}>
          <Icon type={'material'} name={isShowCard ? 'visibility-off' : 'visibility'} size={20} color={COLORS.secondary} />
          <Text style={[styles.normal, { color: COLORS.secondary, marginLeft: 5, fontSize: 12 }]}>{isShowCard ? I18n.t('hide_card') : I18n.t('show_card')}</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.cardContainer}>
        <View style={styles.flexEnd}>
          <FastImage
            style={styles.icon}
            source={IMAGES.ICON}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={[styles.title, { marginLeft: 4 }]}>{I18n.t('aspire')}</Text>
        </View>
        <Text style={[styles.title, { fontSize: 24, marginVertical: 24 }]}>{cardInfo?.customer_name}</Text>
        <Text style={[styles.normal, { letterSpacing: 2 }]}>{isShowCard ? formatCardNumber(cardInfo?.card_number || '') : maskCardNumber(cardInfo?.card_number || '')}</Text>
        <View style={styles.thruContainer}>
          <Text style={styles.normal}>
            {I18n.t('thru')}: {cardInfo?.thru}
          </Text>
          <Text style={styles.normal}>
            {I18n.t('cvv')}: {isShowCard ? cardInfo?.cvv : '***'}
          </Text>
        </View>
        <Icon type={'fontawesome'} name={'cc-visa'} size={40} color={COLORS.white} style={{ alignSelf: 'flex-end' }} />
      </View>
    </>
  )

  const renderLimitProgress = () => (
    <View style={{ marginTop: 32 }}>
      <View style={styles.spaceBetween}>
        <Text style={[styles.normal, { color: COLORS.black }]}>{I18n.t('debit_spending_limit')}</Text>
        <Text style={styles.description}><Text style={[styles.title, { color: COLORS.secondary }]}>${format(currentSpending)}</Text> | ${format(spendingLimitSate)}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={[
          percentage === 1 ?
            {
              height: 20,
              width: width - 40,
              backgroundColor: COLORS.secondary
            }
            : {
              ...styles.progress,
              borderRightWidth: (width - 40) * percentage,
              borderTopWidth: width
            }
        ]} />
      </View>
    </View>
  )

  const renderUtilitySection = ({ iconKey, titleKey, descriptionKey }: { iconKey: string, titleKey: string, descriptionKey: string }) => (
    <View style={[styles.centeredAlign, { marginTop: 32 }]}>
      <Icon type={'material'} name={iconKey} size={30} color={COLORS.white} hasBackground={true} style={{ backgroundColor: COLORS.light_blue }} />
      <View style={{ marginLeft: 8 }}>
        <Text style={[styles.title, { color: COLORS.blue }]}>{I18n.t(titleKey)}</Text>
        <Text style={styles.description}>{I18n.t(descriptionKey)}</Text>
      </View>
    </View>
  )

  const renderModalBody = () => (
    <>
      <SafeAreaView style={styles.root} />
      <SafeAreaView style={styles.main}>
        <View style={[styles.container, { paddingHorizontal: 0 }]}>
          <View style={[styles.spaceBetween, { paddingHorizontal: 20 }]}>
            <Icon type={'material'} name={'arrow-back-ios'} size={30} color={COLORS.white} onPress={setModal(false)} />
            <FastImage
              style={styles.image}
              source={IMAGES.ICON}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text style={[styles.title, { fontSize: 26, marginHorizontal: 20 }]}>{I18n.t('spending_limit')}</Text>
          <View style={styles.subModal}>
            <View style={styles.centeredAlign}>
              <Icon type={'material'} name={'speed'} size={30} color={COLORS.black} />
              <Text style={[styles.normal, { color: COLORS.black, marginLeft: 5 }]}>{I18n.t('spending_limit_description')}</Text>
            </View>
            <View style={[styles.centeredAlign, { marginTop: 20, marginBottom: 12 }]}>
              <View style={styles.badge}>
                <Text style={styles.title}>S$</Text>
              </View>
              <Text style={[styles.title, { fontSize: 26, marginLeft: 8, color: COLORS.black }]}>{format(spendingLimitSate)}</Text>
            </View>
            <View style={{ height: 1, backgroundColor: COLORS.light_gray }} />
            <Text style={[styles.description, { marginTop: 16 }]}>{I18n.t('spending_limit_explanation')}</Text>
            <View style={[styles.spaceBetween, { flexWrap: 'wrap', marginTop: 32 }]}>
              <TouchableOpacity style={styles.priceGroup} onPress={() => setSpendingLimit('5000')}>
                <Text style={[styles.title, { color: COLORS.secondary }]}>S${format('5000')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.priceGroup} onPress={() => setSpendingLimit('10000')}>
                <Text style={[styles.title, { color: COLORS.secondary }]}>S${format('10000')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.priceGroup} onPress={() => setSpendingLimit('20000')}>
                <Text style={[styles.title, { color: COLORS.secondary }]}>S${format('20000')}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.button, { bottom: 70, backgroundColor: COLORS.primary }]} onPress={onSaveWithoutActive}>
              <Text style={[styles.title, { fontSize: 16 }]}>{I18n.t('save_without_active')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onSave}>
              <Text style={[styles.title, { fontSize: 16 }]}>{I18n.t('save')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )

  const toggleSwitch = () => {
    if (!isEnabled) {
      setModalVisible(true)
      return
    }
    setIsEnabled(false)
  }

  const setModal = (visible: boolean) => () => setModalVisible(visible)

  const showCard = () => setShowCard(previousState => !previousState)

  const onSave = () => {
    setModalVisible(false)
    dispatch(updateCardConfig())
    setIsEnabled(true)
  }

  const onSaveWithoutActive = () => {
    setModalVisible(false)
    dispatch(updateCardConfig())
    setIsEnabled(false)
  }

  return (
    <>
      <SafeAreaView style={styles.root} />
      <SafeAreaView style={styles.main}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null as any}
          style={{ flex: 1 }}
        >
          <StatusBar barStyle={'light-content'} />
          {renderInfo()}

          <ScrollView bounces={false} style={styles.scroll} showsVerticalScrollIndicator={false}>
            <View style={styles.subScroll} />

            <View style={styles.mainScroll}>
              {renderCard()}

              {isEnabled && renderLimitProgress()}

              {renderUtilitySection({ iconKey: 'upgrade', titleKey: 'topup_account', descriptionKey: 'topup_account_description' })}

              <TouchableOpacity style={[styles.spaceBetween, { marginTop: 32 }]} onPress={toggleSwitch}>
                <View style={styles.centeredAlign}>
                  <Icon type={'material'} name={'speed'} size={30} color={COLORS.white} hasBackground={true} style={{ backgroundColor: COLORS.light_blue }} />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={[styles.title, { color: COLORS.blue }]}>{I18n.t('weekly_spending_limit')}</Text>
                    <Text style={styles.description}>{isEnabled
                      ? I18n.t('weekly_spending_limit_price', { price: format(spendingLimit) })
                      : I18n.t('weekly_spending_limit_description')}
                    </Text>
                  </View>
                </View>
                <Switch
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.spaceBetween, { marginTop: 32 }]}>
                <View style={styles.centeredAlign}>
                  <Icon type={'material'} name={'ac-unit'} size={30} color={COLORS.white} hasBackground={true} style={{ backgroundColor: COLORS.light_blue }} />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={[styles.title, { color: COLORS.blue }]}>{I18n.t('freeze_card')}</Text>
                    <Text style={styles.description}>{I18n.t('freeze_card_description')}</Text>
                  </View>
                </View>
                <Switch
                  value={false}
                />
              </TouchableOpacity>

              {renderUtilitySection({ iconKey: 'create-new-folder', titleKey: 'get_new_card', descriptionKey: 'get_new_card_description' })}
              {renderUtilitySection({ iconKey: 'public-off', titleKey: 'deactivated_cards', descriptionKey: 'deactivated_cards_description' })}

            </View>
          </ScrollView>
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={setModal(false)}
          >
            {renderModalBody()}
          </Modal>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
}

export default DebitCard
