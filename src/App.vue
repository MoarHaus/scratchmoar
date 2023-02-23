<template>
<div ref="menu" class="menu-bar_menu-bar-item_scratchmoar" @click="isVisible = !isVisible">
  <span>Scratchmoar</span>
  <div class="menu-bar_menu-bar-menu_scratchmoar">
    <ul :class='{scratchmoarHidden: !isVisible}'>
      <li>Take snapshot (CTRL + S)</li>
      <li>Load snapshot</li>
    </ul>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import $STYLES from './styles.css.js'

const menu = ref(null)
const isVisible = ref(false)

onMounted(() => {
  // Add matching classes for styling purposes
  const $menuItem = document.querySelector('[class*="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]:not([class*="menu-bar_language-menu_"])')
  $menuItem.classList.forEach(className => menu.value.classList.add(className))

  // Manually add styles
  const $styles = document.createElement('style')
  $styles.innerHTML = $STYLES
  document.querySelector('body').appendChild($styles)

  // Manually match list item styles
  let styles = getComputedStyle(document.querySelector('[class*="gui_page-wrapper_"] > [class*="menu-bar_menu-bar"]'))
  const $menuItems = document.querySelectorAll('.menu-bar_menu-bar-item_scratchmoar li')
  $menuItems.forEach($menuItem => {
    $menuItem.style.backgroundColor = styles.backgroundColor
  })
})
</script>
