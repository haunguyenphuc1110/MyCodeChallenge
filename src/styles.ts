import { StyleSheet, Dimensions, Platform } from 'react-native'
import { COLORS } from 'Constants'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: COLORS.primary
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  centeredAlign: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end'
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignSelf: 'flex-end'
  },
  scroll: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  subScroll: {
    backgroundColor: COLORS.transparent,
    width: '100%',
    height: Platform.OS === 'ios' ? height * 0.3 : height * 0.4
  },
  mainScroll: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    height: Platform.OS === 'ios' ? height * 0.75 : height * 1.25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  cardButton: {
    marginTop: -100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 25,
    borderRadius: 10
  },
  cardContainer: {
    marginTop: -20,
    width: width - 40,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    padding: 20
  },
  thruContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width / 2,
    marginTop: 16,
    marginBottom: 8
  },
  progressContainer: {
    backgroundColor: COLORS.light_green,
    height: 20,
    borderRadius: 10,
    marginTop: 12,
    overflow: 'hidden'
  },
  progress: {
    width: 0,
    height: 0,
    backgroundColor: COLORS.transparent,
    borderStyle: 'solid',
    borderRightColor: COLORS.transparent,
    borderTopColor: COLORS.secondary
  },
  subModal: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    marginTop: 36,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  title: {
    color: COLORS.white,
    fontWeight: '700'
  },
  description: {
    color: COLORS.light_gray,
    fontWeight: '500',
    fontSize: 12
  },
  normal: {
    color: COLORS.white,
    fontWeight: '500'
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  badge: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16
  },
  priceGroup: {
    backgroundColor: COLORS.light_green,
    paddingVertical: 12,
    width: (width - 40) / 3 - 10,
    alignItems: 'center',
    borderRadius: 8
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 20,
    width: width - 80,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    marginBottom: 20
  }
})

export default styles