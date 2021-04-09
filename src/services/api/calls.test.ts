import ApiServices from './calls'

describe('api resolver', () => {
  test('getCardConfigs', async () => {
    const response = await ApiServices.getCardConfigs()
    const result = {
      active: true,
      current_spending_limit: 345,
      spending_limit_active: true,
      spending_limit_weekly: 5000
    }
    expect(response.data).toEqual(result)
  })
  test('getCardInfo', async () => {
    const response = await ApiServices.getCardInfo()
    const result = {
      available_balance: 3000,
      card_number: '1234567812345678',
      customer_name: 'Nguyen Phuc Hau',
      cvv: '123',
      thru: '09/25'
    }
    expect(response.data).toEqual(result)
  })
  test('updateCardConfigs', async () => {
    const response = await ApiServices.updateCardConfigs()
    const result = {
      active: 'true',
      current_spending_limit: 345,
      spending_limit_active: true,
      spending_limit_weekly: 5000
    }
    expect(response.data).toEqual(result)
  })
})
