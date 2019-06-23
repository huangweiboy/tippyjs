import tippy from '../../src'
import '../../src/scss/index.scss'
import '../../src/scss/svgArrow.scss'
import '../../src/scss/themes/light.scss'
import '../../src/scss/themes/light-border.scss'
import '../../src/scss/themes/material.scss'
import '../../src/scss/themes/translucent.scss'

const container = document.querySelector('.container')

const themes = ['dark', 'light', 'light-border', 'material', 'translucent']
const placements = ['top', 'bottom', 'left', 'right']
const arrows = [false, true, 'round']

themes.forEach(theme => {
  const h1 = document.createElement('h1')
  h1.textContent = theme
  container.appendChild(h1)

  placements.forEach(placement => {
    arrows.forEach(arrow => {
      const button = document.createElement('button')
      button.textContent = 'Button'
      container.appendChild(button)

      tippy(button, {
        content: 'Tooltip',
        showOnCreate: true,
        theme,
        placement,
        arrow,
      })
    })
  })
})
