let coepCredentialless = true

if (typeof window === 'undefined') {
  self.addEventListener('install', () => self.skipWaiting())
  self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))

  self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'coepCredentialless') {
      coepCredentialless = event.data.value
    }
  })

  self.addEventListener('fetch', (event) => {
    const request = (coepCredentialless && event.request.mode === 'no-cors')
      ? new Request(event.request, { credentials: 'omit' })
      : event.request

    event.respondWith(
      fetch(request).then((response) => {
        if (response.status === 0) return response

        const newHeaders = new Headers(response.headers)
        newHeaders.set('Cross-Origin-Embedder-Policy', coepCredentialless ? 'credentialless' : 'require-corp')
        if (!coepCredentialless) {
          newHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin')
        }
        newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin')

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        })
      })
    )
  })
} else {
  (() => {
    const coi = {
      shouldRegister: () => true,
      coepCredentialless: () => true,
      quiet: false,
      ...window.coi
    }

    if (window.crossOriginIsolated !== false || !coi.shouldRegister()) return

    if (!window.isSecureContext || !navigator.serviceWorker) {
      if (!coi.quiet) {
        console.error('COOP/COEP Service Worker not registered.')
      }
      return
    }

    navigator.serviceWorker.register(window.document.currentScript.src)
      .then((registration) => {
        if (!coi.quiet) {
          console.log('COOP/COEP Service Worker registered', registration.scope)
        }

        if (registration.active && !navigator.serviceWorker.controller) {
          window.location.reload()
        }
      })
      .catch((err) => {
        if (!coi.quiet) {
          console.error('COOP/COEP Service Worker failed to register:', err)
        }
      })
  })()
}
