((context) => {
  const { document, navigator } = context
  if (document) {
    const script = document.currentScript
    const scope = script.getAttribute('scope') || '.'
    navigator.serviceWorker.register(script.src, { scope }).then(registration => {
      registration.addEventListener('updatefound', () => location.reload())
      if (registration.active && !navigator.serviceWorker.controller) {
        location.reload()
      }
    })
  } else {
    self.addEventListener('fetch', event => {
      const { request } = event
      if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return
      event.respondWith(
        fetch(request).then(response => {
          if (!response.status || response.status > 399) return response
          const newHeaders = new Headers(response.headers)
          newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin')
          newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp')
          newHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin')
          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
          })
        })
      )
    })
  }
})(self)
