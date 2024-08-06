import { provideLocalStorageDataClass } from '../../../utils/provideLocalStorageDataClass'
import { DataClassAttributes } from '../../types'

export function localStorageGdprDataClass(attributes: DataClassAttributes) {
  return provideLocalStorageDataClass('Gdpr', {
    attributes,
    prepareData: async (data) => ({
      active: data.active,
      _id: 'F9BB0AAA22C947BAE030A8C00C015B91',
      name: 'Contact by telephone',
      description: 'I agree to be contacted by telephone.',
    }),
    initialContent: [
      {
        _id: 'F9BB0AAA22C947BAE030A8C00C015B91',
        name: 'Contact by telephone',
        description: 'I agree to be contacted by telephone.',
        active: true,
      },
    ],
  })
}
