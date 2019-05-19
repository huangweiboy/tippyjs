import { Options, Props, Targets } from './types'
import { hasOwnProperty, includes } from './utils'

/**
 * Validates an object of options with the valid default props object
 */
export function validateOptions(
  options: Options = {},
  defaultProps: Props,
): void {
  Object.keys(options).forEach(option => {
    if (!hasOwnProperty(defaultProps, option)) {
      if (option === 'target') {
        console.warn(
          '[tippy.js WARNING] The `target` option was removed in v5 and ' +
            'replaced by the `delegate()` method. Read more here: ' +
            'https//atomiks.github.io/tippyjs/event-delegation/',
        )
      } else {
        console.warn(
          '[tippy.js WARNING] `' +
            option +
            '` is not a valid option. You ' +
            'may have spelled it incorrectly. View all of the valid options ' +
            'here: https://atomiks.github.io/tippyjs/all-options/',
        )
      }
    } else {
      if (option === 'theme') {
        if (
          includes(
            ['dark', 'light', 'light-border', 'translucent', 'google'],
            options[option],
          )
        ) {
          console.warn(
            '[tippy.js WARNING] The default theme `' +
              options[option] +
              '` in v5 must include the prefix `__NAMESPACE_PREFIX__`, i.e. ' +
              '"tippy-' +
              options[option] +
              '" instead of "' +
              options[option] +
              '".',
          )
        }

        if (options[option] === 'google') {
          console.warn(
            '[tippy.js WARNING] The default theme `google` was renamed to ' +
              '`tippy-material` in v5.',
          )
        }
      }
    }
  })
}

/**
 * Validates an object of options with the valid default props object
 */
export function validateTargets(targets: Targets): void {
  if (!targets) {
    console.warn(
      '[tippy.js WARNING] `tippy()` was passed ' +
        targets +
        ' (an invalid falsy argument) as its targets argument. Valid types ' +
        'are: String (CSS selector), Element, Element[], or NodeList.',
    )
  }

  if (
    Object.prototype.toString.call(targets) === '[object Object]' &&
    !(targets as any).addEventListener
  ) {
    console.warn(
      '[tippy.js WARNING] `tippy()` was passed a plain object (virtual ' +
        'reference element) which is no longer supported. Instead, pass a ' +
        'placeholder element like `document.createElement("div")',
    )
  }
}
