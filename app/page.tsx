export default function Home() {
  const faqs = [
    {
      q: 'How does the meeting time optimizer work?',
      a: 'Our algorithm analyzes each team member\'s timezone, working hours, and calendar availability to score every possible time slot and surface the fairest options for everyone.'
    },
    {
      q: 'Can I integrate with Google Calendar or Outlook?',
      a: 'Yes. TimeSync connects to Google Calendar and Microsoft Outlook via OAuth so availability is always up to date — no manual entry needed.'
    },
    {
      q: 'What happens after my subscription ends?',
      a: 'Your team data is retained for 30 days. You can export everything at any time, and reactivating your subscription restores full access instantly.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Remote Team Coordination
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Find optimal meeting times<br />
          <span className="text-[#58a6ff]">across every timezone</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          TimeSync analyzes your team&apos;s timezones, work preferences, and live calendar availability to suggest fair meeting windows — no more 6 AM calls for half the team.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required · Cancel anytime</p>

        {/* Social proof strip */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-3xl font-bold text-white">12k+</p>
            <p className="text-sm text-[#8b949e] mt-1">Meetings scheduled</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">94%</p>
            <p className="text-sm text-[#8b949e] mt-1">Satisfaction rate</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">40+</p>
            <p className="text-sm text-[#8b949e] mt-1">Timezones supported</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-8">per team · billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited team members',
              'Google Calendar & Outlook sync',
              'Smart timezone optimizer',
              'Recurring meeting scheduler',
              'Slack & Teams notifications',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $12/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} TimeSync. All rights reserved.
      </footer>
    </main>
  )
}
