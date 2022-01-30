/**
 * Assets usage:
 * '@pub' to use images from public folder
 * '@src' to use images from src folder
 */

// Register service worker proxy for PWA compliance
window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
    }
}

import '@src/styles/index.scss'

import { exampleHeading, exampleParagraph } from '@src/js/exampleModule'


import logo from '@src/img/logo.png'

const appLogo = document.createElement('img')
appLogo.src = logo
appLogo.alt = 'App logo'
appLogo.width = 250
appLogo.height = 250

const heading = document.createElement('h1')
heading.textContent = exampleHeading()

const paragraph = document.createElement('p')
paragraph.textContent = exampleParagraph()

const app = document.getElementById('app')
app.append(appLogo, heading, paragraph)