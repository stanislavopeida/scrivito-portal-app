import { provideLocalStorageDataClass } from '../../../utils/provideLocalStorageDataClass'
import { DataClassAttributes } from '../../types'

export function localStorageServiceObjectDocumentDataClass(
  attributes: DataClassAttributes,
) {
  return provideLocalStorageDataClass('ServiceObjectDocument', {
    attributes,
    initialContent: [
      {
        _id: '1',
        serviceObjectId: '7681FF616BF5460FAD90A6BB5BC386B4',
        documentId: '217C72335FBF0467E040A8C00F013355',
      },
    ],
  })
}
