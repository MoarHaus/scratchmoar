/**
 * @fixme Running into issues getting CSS working with parcel so for now
 * doing it this way
 */
export default `
.menu-bar_menu-bar-item_scratchmoar {
  padding: 0 !important;
}

.menu-bar_menu-bar-item_scratchmoar > span {
  padding: 0 0.75rem;
  display: inline-block;
  line-height: 2.5rem;
}

.scratchmoarHidden {
  display: none;
}

.scratchmoarPopup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.scratchmoarPopup > .scratchmoarOverlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
}

.scratchmoarPopup > .scratchmoarPopupContent {
  position: absolute;
  cursor: initial;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--ui-tertiary, #fff);
  max-height: 80%;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 960px;
  max-width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
}
.scratchmoarPopupContent {
  color: #000;
}
[theme="dark"] .scratchmoarPopupContent {
  color: #fff;
}

.scratchmoarPopupContentBody {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.scratchmoarPopup button {
  padding: 1rem;
}

.scratchmoarPopupContentBody select {
  width: 100%;
  display: block;
}

.scratchmoarPopupContentBody table {
  width: 100%;
  text-align: left;
}

.scratchmoarPopupContentBody table td,
.scratchmoarPopupContentBody table th {
  padding: 1em;
  border: 1px solid #aaa;
}
.scratchmoarPopupContentBody table th {
  background: #999a;
}
.scratchmoarPopupContentBody table tr:hover {
  background: #eeea
}

.scratchmoarSelected {
  background: #0a04;
}
`