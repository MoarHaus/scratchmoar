<template>
<div ref="menu" class="menu-bar_menu-bar-item_scratchmoar">
  <span @click="isVisible = !isVisible">Scratchmoar</span>

  <div :class="{scratchmoarHidden: !isVisible, scratchmoarPopup: true}">
    <div class="scratchmoarOverlay" @click="isVisible = false"></div>
    <div class="scratchmoarPopupContent">
      <div class="scratchmoarPopupContentHeader">
        <h2>Scratchmoar Settings</h2>
      </div>
      <div class="scratchmoarPopupContentBody"></div>
      <div class="scratchmoarPopupContentFooter">
        <button @click="isVisible = false">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menu = ref(null)
const isVisible = ref(false)

onMounted(() => {
  // Add matching classes for styling purposes
  const $menuItem = document.querySelector('[class*="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]:not([class*="menu-bar_language-menu_"])')
  $menuItem.classList.forEach(className => menu.value.classList.add(className))

  // Manually match list item styles
  let styles = getComputedStyle(document.querySelector('[class*="gui_page-wrapper_"] > [class*="menu-bar_menu-bar"]'))
  const $menuItems = document.querySelectorAll('.menu-bar_menu-bar-item_scratchmoar li')
  $menuItems.forEach($menuItem => {
    $menuItem.style.backgroundColor = styles.backgroundColor
  })
})
</script>
