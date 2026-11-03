import '@testing-library/jest-dom/vitest'
import { JSDOM } from 'jsdom'

const testStorage = new JSDOM('', { url: 'http://localhost' }).window.localStorage

Object.defineProperty(window, 'localStorage', {
	configurable: true,
	value: testStorage,
})
