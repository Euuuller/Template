import { expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)

// Polyfill mínimo para evitar erros em chamadas que esperam scrollTo
// durante navegação por teclado em jsdom
if (typeof window !== 'undefined' && typeof window.scrollTo !== 'function') {
    window.scrollTo = () => {}
}
