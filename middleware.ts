import { geolocation } from '@vercel/functions'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrencyForCountry } from './lib/currency-mapping'

export function middleware(request: NextRequest) {
  // 获取访问者的地理位置信息
  const { country } = geolocation(request)
  
  // 获取对应的货币信息
  const currency = getCurrencyForCountry(country || 'US')
  
  // 将国家和货币信息添加到响应头中
  const response = NextResponse.next()
  response.headers.set('x-visitor-country', country || 'US')
  response.headers.set('x-visitor-currency', currency.initialCurrency)
  response.headers.set('x-visitor-fiat-name', currency.fiatName)

  return response
}

export const config = {
  matcher: '/:path*',
}

