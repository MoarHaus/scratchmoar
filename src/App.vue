<template>
<div ref="menu" class="menu-bar_menu-bar-item_scratchmoar">
  <span @click="isVisible = !isVisible">Scratchmoar</span>

  <div :class="{scratchmoarHidden: !isVisible, scratchmoarPopup: true}">
    <div class="scratchmoarOverlay" @click="isVisible = false"></div>
    <div class="scratchmoarPopupContent">
      <div class="scratchmoarPopupContentHeader">
        <h2>Scratchmoar Settings</h2>
      </div>
      <div class="scratchmoarPopupContentBody">
        <select size="10"></select>
      </div>
      <div class="scratchmoarPopupContentFooter">
        <button @click="isVisible = false">Close</button>
        <button @click="clearSnapshots()">Clear data</button>
        <button @click="saveSnapshots()" style="float: right">Save snapshot</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Snapshots from './store/snapshots.js'
import {liveQuery} from 'dexie'
import { useObservable } from '@vueuse/rxjs'

const menu = ref(null)
const isVisible = ref(true)
let snapshots = ref([])

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

  // Create a livequery for the snapshots
  snapshots = useObservable(liveQuery(async () => {
    const snaps = await Snapshots.toArray()
    console.log('snapshots', snaps)
    return snaps
  }))
})

/**
 * Trigger a clear data event
 */
function clearSnapshots () {
  document.dispatchEvent(new CustomEvent('scratchmoarResetDB'))
}

/**
 * Trigger a save snapshot event
 */
function saveSnapshots () {
  document.dispatchEvent(new CustomEvent('scratchmoarSaveSnapshot'))
}
</script>
