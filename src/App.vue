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
        <table>
          <thead>
            <tr>
              <th>Snapshot ID</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="snapshot in snapshots" :key="snapshot.id">
              <td>{{ snapshot.id }}</td>
              <!-- Display date in YY-MM-DD HH:MM format -->
              <td>{{ new Date(snapshot.date).toLocaleString().slice(0, -2).replace(/:\d{2}\s/, ' ') }}</td>
            </tr>
          </tbody>
        </table>
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
import { liveQuery } from 'dexie'
import { useObservable } from '@vueuse/rxjs'

const menu = ref(null)
const isVisible = ref(true)
let selectedSnapshot = ref(null)
let snapshots = ref(useObservable(liveQuery(() => {
  return Snapshots.snapshots.toArray()
})))

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
