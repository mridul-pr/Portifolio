import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PRIVACY_PATH = '/skyward-airport-tycoon/privacy-policy'
const PRIVACY_INDEX = `${PRIVACY_PATH}/index.html`

/**
 * Vite's SPA fallback normally catches /skyward-airport-tycoon/privacy-policy
 * before the static directory index. Rewrite the extensionless legal route to
 * its index.html so the exact URL works in dev and preview.
 */
function privacyRoute() {
  const rewrite = (req, _res, next) => {
    const [pathname, query] = (req.url || '').split('?')
    if (pathname === PRIVACY_PATH || pathname === `${PRIVACY_PATH}/`) {
      req.url = `${PRIVACY_INDEX}${query ? `?${query}` : ''}`
    }
    next()
  }

  return {
    name: 'skyward-privacy-route',
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), privacyRoute()],
})
