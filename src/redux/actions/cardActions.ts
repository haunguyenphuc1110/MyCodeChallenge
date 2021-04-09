import { createAction } from '@reduxjs/toolkit'
import ACTION_TYPES from '../actionTypes'

export const getCardConfig = createAction(ACTION_TYPES.GET_CARD_CONFIG)

export const getCardInfo = createAction(ACTION_TYPES.GET_CARD_INFO)

export const updateCardConfig = createAction(ACTION_TYPES.UPDATE_CARD_CONFIG)