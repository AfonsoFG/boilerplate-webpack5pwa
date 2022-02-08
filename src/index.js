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
import logo from '@pub/img/logo.png'

import { exampleHeading, exampleParagraph } from '@src/js/exampleModule'



const appLogo = document.createElement('img')
appLogo.src = logo
appLogo.alt = 'App logo'
appLogo.width = 200
appLogo.height = 200

const heading = document.createElement('h1')
heading.textContent = exampleHeading()

const paragraph = document.createElement('p')
paragraph.textContent = exampleParagraph()

const app = document.getElementById('app')
app.append(appLogo, heading, paragraph)
