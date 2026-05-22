import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-internal-secret')
  if (secret !== process.env.INTERNAL_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { mobile, otp } = await req.json()

  if (!mobile || !otp) {
    return NextResponse.json({ error: 'Missing mobile or otp' }, { status: 400 })
  }

  const message = `Your Suredeed OTP is: ${otp}. Valid for 5 minutes. Do not share this code with anyone.`

  const url = new URL('https://api.mimsms.com/api/SmsSending/Send')
  url.searchParams.set('UserName', process.env.MIMSMS_USERNAME!)
  url.searchParams.set('Apikey', process.env.MIMSMS_API_KEY!)
  url.searchParams.set('MobileNumber', mobile)
  url.searchParams.set('SenderName', '8809601003305')
  url.searchParams.set('TransactionType', 'T')
  url.searchParams.set('Message', message)

  const mimRes = await fetch(url.toString(), { method: 'GET' })
  const body = await mimRes.text()

  console.log(`[send-sms] mobile=${mobile} http=${mimRes.status} body=${body}`)

  if (!mimRes.ok) {
    return NextResponse.json({ error: 'MiM SMS failed', detail: body }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}