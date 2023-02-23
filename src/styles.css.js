/**
 * @fixme Running into issues getting CSS working with parcel so for now
 * doing it this way
 */
export default `
.menu-bar_menu-bar-menu_scratchmoar {
  position: absolute;
  top: 48px;
  left: -100% !important;
  margin-left: 2em !important;
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

.scratchmoarHidden {
  display: none;
}`