<template>
<div ref="menu" class="menu-bar_menu-bar-item_scratchmoar menu-bar_hoverable_scratchmoar">
  <span>Scratchmoar</span>
  <div class="menu-bar_menu-bar-menu_scratchmoar">
    <ul class="menu_menu_scratchmoar menu_right_scratchmoar">
      <li class="menu_menu-item_scratchmoar menu_hoverable_scratchmoar menu_menu-section_scratchmoar">
        <span>New</span>
      </li>
      <li class="menu_menu-item_scratchmoar menu_hoverable_scratchmoar menu_menu-section_scratchmoar">Load from your computer
      </li>
      <li class="menu_menu-item_scratchmoar menu_hoverable_scratchmoar">
        <span>Save as...</span>
      </li>
      <li class="menu_menu-item_scratchmoar menu_hoverable_scratchmoar">
        <span>Save to separate file...</span>
      </li>
      <li class="menu_menu-item_scratchmoar menu_hoverable_scratchmoar menu_menu-section_scratchmoar">
        <span>Package project</span>
      </li>
      <li class="menu_menu-item_scratchmoar menu_hoverable_scratchmoar menu_menu-section_scratchmoar">
        <span>Load restore point</span>
      </li>
    </ul>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menu = ref(null)
onMounted(() => {
  // Add matching classes for styling purposes
  const $menuItem = document.querySelector('[class*="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]:not([class*="menu-bar_language-menu_"])')
  console.log(menu)
  $menuItem.classList.forEach(className => menu.value.classList.add(className))

  // Manually add styles
  const $styles = document.createElement('style')
  $styles.innerHTML = `
  .menu-bar_menu-bar-menu_scratchmoar {
    position: absolute;
    top: 48px;
    left: -100% !important;
    margin-left: 2.5em !important;
  }

  .menu-bar_menu-bar-menu_scratchmoar ul {
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: 999999;
    background: #aaa;
  }

  .menu-bar_menu-bar-menu_scratchmoar li {
    padding: 0 10px;
    line-height: 34px;
  }

  .menu-bar_menu-bar-menu_scratchmoar li:hover {
    opacity: 0.8
  }
  `
  document.querySelector('body').appendChild($styles)

  // Manually match list item styles
  let styles = getComputedStyle(document.querySelector('[class*="gui_page-wrapper_"] > [class*="menu-bar_menu-bar"]'))
  const $menuItems = document.querySelectorAll('.menu_menu-item_scratchmoar')
  $menuItems.forEach($menuItem => {
    $menuItem.style.backgroundColor = styles.backgroundColor
  })
})
</script>
