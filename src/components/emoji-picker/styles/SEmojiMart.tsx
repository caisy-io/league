import { createGlobalStyle } from 'styled-components'
import { CSSProgressiveBody03 } from '../../..'

export const GlobalStyle = createGlobalStyle`
.emoji-mart,
.emoji-mart * {
  box-sizing: border-box;
  line-height: 1.15;
}

.emoji-mart {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  font-size: 16px;
  display: inline-block;
  color: #222427;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #fff;
}

.emoji-mart .emoji-mart-emoji {
  padding: 6px;
}

.emoji-mart-bar {
  border: 0 solid #d9d9d9;
  display: none;
}
.emoji-mart-bar:first-child {
  border-bottom-width: 1px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.emoji-mart-anchors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 6px;
  line-height: 0;
}

.emoji-mart-anchor {
  position: relative;
  display: block;
  flex: 1 1 auto;
  color: #858585;
  text-align: center;
  padding: 12px 4px;
  overflow: hidden;
  transition: color .1s ease-out;
  margin: 0;
  box-shadow: none;
  background: none;
  border: none;
}
.emoji-mart-anchor:focus { outline: 0 }
.emoji-mart-anchor:hover,
.emoji-mart-anchor:focus,
.emoji-mart-anchor-selected {
  color: #464646;
}

.emoji-mart-anchor-selected .emoji-mart-anchor-bar {
  bottom: 0;
}

.emoji-mart-anchor-bar {
  position: absolute;
  bottom: -3px; left: 0;
  width: 100%; height: 3px;
  background-color: #464646;
}

.emoji-mart-anchors i {
  display: inline-block;
  width: 100%;
  max-width: 22px;
}

.emoji-mart-anchors svg,
.emoji-mart-anchors img {
  fill: currentColor;
  height: 18px;
  width: 18px;
}

.emoji-mart-scroll {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 200px;
  padding: 0 0 6px 6px;
  will-change: transform; /* avoids "repaints on scroll" in mobile Chrome */
  ::-webkit-scrollbar {
    background-color: #FFFF;
    border-right: 1px solid #E8EFF3;
    border-left: 1px solid #E8EFF3;
    width: 0.75rem;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar-thumb  {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    -webkit-border-radius: 49px;
    background-color: var(--interactional-secondary-08);
    width: 4px;
    height: 2rem;
   }
}

.emoji-mart-search {
  position: relative;
}

.emoji-mart-search input {
  display: block;
  width: 100%;
  padding: 12px 25px 12px 10px;
  border: none;
  border-bottom: 1px solid var(--ui-03);
  outline: 0;
  padding-left: 35px;
}

.emoji-mart-search input ::placeholder {
    color: var(--text-03);
    ${CSSProgressiveBody03}
}

.emoji-mart-search input,
.emoji-mart-search input::-webkit-search-decoration,
.emoji-mart-search input::-webkit-search-cancel-button,
.emoji-mart-search input::-webkit-search-results-button,
.emoji-mart-search input::-webkit-search-results-decoration {
  /* remove webkit/blink styles for <input type="search">
   * via https://stackoverflow.com/a/9422689 */
  -webkit-appearance: none;
}

.emoji-mart-search-icon {
  position: absolute;
  top: 10px;
  left: 11px;
  z-index: 2;
  padding: 2px 5px 1px;
  border: none;
  background: none;
  svg path {
    fill: var(--text-03);  
  }
 
}

.emoji-mart-category .emoji-mart-emoji span {
  z-index: 1;
  position: relative;
  text-align: center;
  cursor: default;
}

.emoji-mart-category .emoji-mart-emoji:hover:before {
  z-index: 0;
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: #f4f4f4;
  border-radius: 100%;
}

.emoji-mart-category-label {
  z-index: 2;
  position: relative;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: none;
}

.emoji-mart-category-label span {
  display: block;
  width: 100%;
  font-weight: 500;
  padding: 5px 6px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, .95);
}

.emoji-mart-category-list {
  margin: 0;
  padding: 0;
}

.emoji-mart-category-list li {
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-block;
}

.emoji-mart-emoji {
  position: relative;
  display: inline-block;
  font-size: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
}

.emoji-mart-emoji-native {
  font-family: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji";
}

.emoji-mart-no-results {
  font-size: 14px;
  text-align: center;
  padding-top: 70px;
  color: #858585;
}
.emoji-mart-no-results-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.emoji-mart-no-results .emoji-mart-category-label {
  display: none;
}
.emoji-mart-no-results .emoji-mart-no-results-label {
  margin-top: .2em;
}
.emoji-mart-no-results .emoji-mart-emoji:hover:before {
  content: none;
}

.emoji-mart-preview {
  position: relative;
  height: 70px;
  display: none;
}

.emoji-mart-preview-emoji,
.emoji-mart-preview-data,
.emoji-mart-preview-skins {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

// PREVIEW EMOJI -> DISABLED
.emoji-mart-preview-emoji {
  left: 12px;
  display: none;
}

// PREVIEW NAME OF EMOJI -> DISABLED
.emoji-mart-preview-data {
  left: 68px; right: 12px;
  word-break: break-all;
  display: none;
}

// SKIN COLOUR PICKER
.emoji-mart-preview-skins {
  right: 30px;
  text-align: right;
  display: none;
}

.emoji-mart-preview-skins.custom {
  right: 10px;
  text-align: right;
}

.emoji-mart-preview-name {
  font-size: 14px;
}

.emoji-mart-preview-shortname {
  font-size: 12px;
  color: #888;
}
.emoji-mart-preview-shortname + .emoji-mart-preview-shortname,
.emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,
.emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {
  margin-left: .5em;
}

.emoji-mart-preview-emoticon {
  font-size: 11px;
  color: #bbb;
}

.emoji-mart-title span {
  display: inline-block;
  vertical-align: middle;
}

.emoji-mart-title .emoji-mart-emoji {
  padding: 0;
}

.emoji-mart-title-label {
  color: #999A9C;
  font-size: 26px;
  font-weight: 300;
}

.emoji-mart-skin-swatches {
  font-size: 0;
  padding: 2px 0;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  background-color: #fff;
}

.emoji-mart-skin-swatches.custom {
  font-size: 0;
  border: none;
  background-color: #fff;
}

.emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch {
  width: 16px;
  padding: 0 2px;
}

.emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch.selected:after {
  opacity: .75;
}

.emoji-mart-skin-swatch {
  display: inline-block;
  width: 0;
  vertical-align: middle;
  transition-property: width, padding;
  transition-duration: .125s;
  transition-timing-function: ease-out;
}

.emoji-mart-skin-swatch:nth-child(1) { transition-delay: 0s }
.emoji-mart-skin-swatch:nth-child(2) { transition-delay: .03s }
.emoji-mart-skin-swatch:nth-child(3) { transition-delay: .06s }
.emoji-mart-skin-swatch:nth-child(4) { transition-delay: .09s }
.emoji-mart-skin-swatch:nth-child(5) { transition-delay: .12s }
.emoji-mart-skin-swatch:nth-child(6) { transition-delay: .15s }

.emoji-mart-skin-swatch.selected {
  position: relative;
  width: 16px;
  padding: 0 2px;
}

.emoji-mart-skin-swatch.selected:after {
  content: "";
  position: absolute;
  top: 50%; left: 50%;
  width: 4px; height: 4px;
  margin: -2px 0 0 -2px;
  background-color: #fff;
  border-radius: 100%;
  pointer-events: none;
  opacity: 0;
  transition: opacity .2s ease-out;
}

.emoji-mart-skin-swatch.custom {
  display: inline-block;
  width: 0;
  height: 38px;
  overflow: hidden;
  vertical-align: middle;
  transition-property: width, height;
  transition-duration: .125s;
  transition-timing-function: ease-out;
  cursor: default;
}

.emoji-mart-skin-swatch.custom.selected {
  position: relative;
  width: 36px;
  height: 38px;
  padding: 0 2px 0 0;
}

.emoji-mart-skin-swatch.custom.selected:after {
  content: "";
  width: 0;
  height: 0;
}

.emoji-mart-skin-swatches.custom .emoji-mart-skin-swatch.custom:hover {
  background-color: #f4f4f4;
  border-radius: 10%;
}

.emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom {
  width: 36px;
  height: 38px;
  padding: 0 2px 0 0;
}

.emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom.selected:after {
  opacity: .75;
}

.emoji-mart-skin-text.opened {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  color: #888;
  font-size: 11px;
  padding: 5px 2px;
  width: 95px;
  height: 40px;
  border-radius: 10%;
  background-color: #fff;
}

.emoji-mart-skin {
  display: inline-block;
  width: 100%;
  padding-top: 100%;
  max-width: 12px;
  border-radius: 100%;
}

.emoji-mart-skin-tone-1 { background-color: #ffc93a }
.emoji-mart-skin-tone-2 { background-color: #fadcbc }
.emoji-mart-skin-tone-3 { background-color: #e0bb95 }
.emoji-mart-skin-tone-4 { background-color: #bf8f68 }
.emoji-mart-skin-tone-5 { background-color: #9b643d }
.emoji-mart-skin-tone-6 { background-color: #594539 }

/* For screenreaders only, via https://stackoverflow.com/a/19758620 */
.emoji-mart-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/*
 * Dark mode styles
 */

.emoji-mart-dark {
  color: #fff;
  border-color: #555453;
  background-color: #222;
}

.emoji-mart-dark .emoji-mart-bar {
  border-color: #555453;
}

.emoji-mart-dark .emoji-mart-search input {
  color: #fff;
  border-color: #555453;
  background-color: #2f2f2f;
}

.emoji-mart-dark .emoji-mart-search-icon svg {
  fill: #fff;
}

.emoji-mart-dark .emoji-mart-category .emoji-mart-emoji:hover:before {
  background-color: #444;
}

.emoji-mart-dark .emoji-mart-category-label span {
  background-color: #222;
  color: #fff;
}

.emoji-mart-dark .emoji-mart-skin-swatches {
  border-color: #555453;
  background-color: #222;
}

.emoji-mart-dark .emoji-mart-anchor:hover,
.emoji-mart-dark .emoji-mart-anchor:focus,
.emoji-mart-dark .emoji-mart-anchor-selected {
  color: #bfbfbf;
}`