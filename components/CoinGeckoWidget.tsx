import { useEffect, useRef } from 'react'

const CoinGeckoWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://widgets.coingecko.com/coingecko-coin-list-widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (widgetRef.current) {
      const widget = document.createElement('coingecko-coin-list-widget')
      widget.setAttribute('coin-ids', '')
      widget.setAttribute('currency', 'usd')
      widget.setAttribute('locale', 'en')
      widget.setAttribute('width', '300')
      widgetRef.current.appendChild(widget)

      return () => {
        if (widgetRef.current && widgetRef.current.firstChild) {
          widgetRef.current.removeChild(widgetRef.current.firstChild)
        }
      }
    }
  }, [])

  return <div ref={widgetRef}></div>
}

export default CoinGeckoWidget

