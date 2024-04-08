import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src * *.accessdevelopment.com *.adcrws.com *.mapbox.com translation.googleapis.com cdn.heapanalytics.com heapanalytics.com *.auryc.com *.visualwebsiteoptimizer.com app.vwo.com js.stripe.com core.spreedly.com qqc-api.worldnomads.com *.smartlook.com *.smartlook.cloud *.braintreegateway.com *.braintree-api.com booking.accessdevelopment.com; 
    script-src 'self' https://cwsdev4.biz https://dev.visualwebsiteoptimizer.com booking.accessdevelopment.com 'unsafe-inline' 'unsafe-eval';
    style-src 'self' https://cdnjs.cloudflare.com https://cwsdev4.biz https://static.accessdevelopment.com https://fonts.googleapis.com 'unsafe-inline';
    img-src 'self' data: https://www.savvymembersclub.com https://cwsdev4.biz https://dev.visualwebsiteoptimizer.com booking.accessdevelopment.com https://static.accessdevelopment.com https://static-stage.accessdevelopment.com;
    font-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://static.accessdevelopment.com https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-src * https://cwsdev4.biz *.accessdevelopment.com *.adcrws.com *.mapbox.com translation.googleapis.com cdn.heapanalytics.com heapanalytics.com *.auryc.com *.visualwebsiteoptimizer.com app.vwo.com js.stripe.com core.spreedly.com qqc-api.worldnomads.com *.smartlook.c om *.smartlook.cloud *.braintreegateway.com *.braintree-api.com booking.accessdevelopment.com;
    frame-ancestors 'self';
    upgrade-insecure-requests;
`   
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()
 
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  return response
}