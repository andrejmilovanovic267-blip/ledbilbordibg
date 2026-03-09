import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { siteConfig } from '@/lib/siteConfig'

export const runtime = 'nodejs'

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone = '',
      location = '',
      package: pkg = '',
      message = '',
      website = '',
      pageUrl = '',
    } = body

    // Honeypot: ako website nije prazan → bot, vrati ok
    if (website && String(website).trim() !== '') {
      return NextResponse.json({ ok: true })
    }

    // Validacija
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Ime mora imati najmanje 2 karaktera' },
        { status: 400 }
      )
    }
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email je obavezan' },
        { status: 400 }
      )
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Nevažeća email adresa' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server nije pravilno podešen (nedostaju env varijable)' },
        { status: 500 }
      )
    }

    const timestamp = new Date().toLocaleString('sr-RS', {
      dateStyle: 'medium',
      timeStyle: 'medium',
    })

    const resend = new Resend(apiKey)
    const fromAddress = 'LED Bilbordi Beograd <kontakt@ledbilbordibg.rs>'
    const leadRecipient = 'ledbilbordibeograd@gmail.com'
    const pageUrlVal = String(pageUrl || '').trim()
    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; max-width: 560px; margin: 0 auto; padding: 24px; }
  h2 { color: #111; margin-bottom: 20px; font-size: 1.5rem; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 10px 12px; border-bottom: 1px solid #eee; vertical-align: top; }
  td:first-child { font-weight: 600; color: #555; width: 140px; }
  .meta { margin-top: 24px; font-size: 0.9rem; color: #666; }
</style></head>
<body>
  <h2>Novi upit sa sajta</h2>
  <table>
    <tr><td>Ime</td><td>${String(name).trim()}</td></tr>
    <tr><td>Email</td><td>${String(email).trim()}</td></tr>
    <tr><td>Telefon</td><td>${String(phone).trim() || '-'}</td></tr>
    <tr><td>Lokacija</td><td>${String(location).trim() || '-'}</td></tr>
    <tr><td>Paket</td><td>${String(pkg).trim() || '-'}</td></tr>
    <tr><td>Poruka</td><td>${String(message).trim() || '-'}</td></tr>
    ${pageUrlVal ? `<tr><td>Stranica</td><td><a href="${pageUrlVal}">${pageUrlVal}</a></td></tr>` : ''}
    <tr><td>Timestamp</td><td>${timestamp}</td></tr>
  </table>
  <p class="meta">Upit primljen putem LED Bilbordi kontakt forme.</p>
</body>
</html>
    `

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: leadRecipient,
      replyTo: email.trim(),
      subject: 'Novi upit sa sajta',
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Greška pri slanju emaila' },
        { status: 500 }
      )
    }

    // Potvrda kupcu (fail-safe – ne prekida request ako padne)
    try {
      const { error: confirmError } = await resend.emails.send({
        from: fromAddress,
        to: email.trim(),
        subject: 'Primili smo vaš upit',
        html: `
<p style="margin:0 0 12px 0;">Poštovani,</p>

<p style="margin:0 0 12px 0;">
Hvala vam na interesovanju za oglašavanje na LED bilbordima. Vaš upit je uspešno primljen i naš tim će ga pregledati u najkraćem mogućem roku.
</p>

<p style="margin:0 0 12px 0;">
U većini slučajeva odgovaramo u roku od nekoliko sati. U međuvremenu možete pogledati dostupne lokacije i osnovne informacije:<br/>
<a href="https://ledbilbordibg.rs">ledbilbordibg.rs</a>
</p>

<p style="margin:0 0 10px 0;">
Možete nas zapratiti i na društvenim mrežama za najnovije informacije i lokacije LED bilborda:
</p>

<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 14px;">
      <a href="https://instagram.com/ledbilbordibeograd" target="_blank" style="text-decoration:none;">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="32" height="32" alt="Instagram" style="display:block; border:0;" />
      </a>
    </td>
    <td>
      <a href="https://tiktok.com/@ledbilbordibeograd" target="_blank" style="text-decoration:none;">
        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="32" height="32" alt="TikTok" style="display:block; border:0;" />
      </a>
    </td>
  </tr>
</table>
<br/>

<p style="margin-top:12px;">
Srdačan pozdrav,<br/>
<b>LED Bilbordi Beograd</b><br/>
📞 061 730 7980
</p>
      `,
      })
      if (confirmError) {
        console.error('Confirmation email failed:', confirmError)
      }
    } catch (confirmationError) {
      console.error('Confirmation email failed:', confirmationError)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json(
      { error: 'Došlo je do greške' },
      { status: 500 }
    )
  }
}
