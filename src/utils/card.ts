export const formatCardNumber = (cardNumber: string) => ((cardNumber || '').replace(/\s/g, '').match(/.{1,4}/g) || []).join('    ')

export const maskCardNumber = (cardNumber: string) => `••••    ••••    ••••    ${(cardNumber || '').slice(cardNumber.length - 4)}`