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
              <th width="40px">ID</th>
              <th width="100px">Title</th>
              <th width="100px">Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="snapshot in snapshots" :key="snapshot.id" :class="{scratchmoarSelected: lastSnapshotID?.value === snapshot.id}">
              <td>{{ snapshot.id }}</td>
              <!-- Display date in YY-MM-DD HH:MM format -->
              <td>{{ snapshot.title }}</td>
              <td>{{ new Date(snapshot.date).toLocaleString().slice(0, -2).replace(/:\d{2}\s/, ' ') }}</td>
              <td>
                <button @click="deleteSnapshot(snapshot.id)" style="margin-right: 2rem">Delete</button>
                <button @click="loadSnapshot(snapshot.id)" style="float: right">Load</button>
                <button @click="updateSnapshot(snapshot.id)" style="float: right; margin-right: .5rem;">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="scratchmoarPopupContentFooter">
        <button @click="clearSnapshots()" >Delete all snapshots</button>
        <button @click="saveSnapshots()" style="float: right">Save new snapshot</button>
        <button @click="downloadSnapshots()" style="float: right; margin-right: .5rem">Download snapshots file...</button>
        <button @click="loadSnapshots()" style="float: right; margin-right: .5rem">Load snapshots file...</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
import Snapshots from './store/snapshots.js'
import { liveQuery } from 'dexie'
import { useObservable } from '@vueuse/rxjs'

const vm = getCurrentInstance()
const menu = ref(null)
const isVisible = ref(false)
const forceRenderer = ref(false) // For forcing a re-render
let snapshots = ref(useObservable(liveQuery(() => {
  return Snapshots.snapshots.toArray()
})))

/**
 * Observe settings
 * Also sets lastSnapshotID
 */
let lastSnapshotID = ref(null)
let settings = ref(useObservable(liveQuery(async () => {
  const data = await Snapshots.settings.toArray()
  
  // Find first {key: 'lastSnapshotID'} and set lastSnapshotID
  if (data && data.length) {
    lastSnapshotID = data.find(setting => {
      if (setting.key === 'lastSnapshotID') {
        vm.proxy.$forceUpdate()
        return setting.value
      }
    })
  }

  return data
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

  // Listeners
  document.addEventListener('scratchmoarLoadedProject', () => isVisible.value = false)
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
  isVisible.value = false
}

/**
 * Trigger a load snapshot event
 */
function loadSnapshot (id) {
  document.dispatchEvent(new CustomEvent('scratchmoarLoadSnapshot', { detail: id }))
}

/**
 * Trigger a delete snapshot event
 */
function deleteSnapshot (id) {
  document.dispatchEvent(new CustomEvent('scratchmoarDeleteSnapshot', { detail: id }))
}

/**
 * Trigger an update snapshot event
 */
function updateSnapshot (id) {
  document.dispatchEvent(new CustomEvent('scratchmoarUpdateSnapshot', { detail: id }))
  isVisible.value = false
}

/**
 * Trigger a download snapshots event
 */
function downloadSnapshots () {
  document.dispatchEvent(new CustomEvent('scratchmoarDownloadSnapshots'))
}

/**
 * Trigger a load snapshots event
 */
function loadSnapshots () {
  document.dispatchEvent(new CustomEvent('scratchmoarLoadSnapshots'))
  // isVisible.value = false
}
</script>
