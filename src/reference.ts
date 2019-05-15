import { Props, ReferenceElement } from './types'
import { defaultProps } from './props'

const keys = Object.keys(defaultProps)

/**
 * Returns an object of optional props from data-tippy-* attributes
 */
export function getDataAttributeOptions(reference: ReferenceElement): Props {
  return keys.reduce((acc: any, key) => {
    const valueAsString = (
      reference.getAttribute(`data-tippy-${key}`) || ''
    ).trim()

    if (!valueAsString) {
      return acc
    }

    if (key === 'content') {
      acc[key] = valueAsString
    } else {
      try {
        acc[key] = JSON.parse(valueAsString)
      } catch (e) {
        acc[key] = valueAsString
      }
    }

    return acc
  }, {})
}
