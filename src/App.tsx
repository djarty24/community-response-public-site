// src/App.tsx
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  HeartHandshake,
  HelpCircle,
  MapPin,
  MessageSquare,
  ShieldCheck,
} from "lucide-react"

// HANDOFF_UPDATE_START
const emergencyUpdate = {
  "title": "Community Update: Flood Response and Support",
  "announcement": "Our community response teams are actively addressing localized flooding, particularly near Main Street. We are distributing sandbags and working to clear affected roadways to ensure safety. For residents displaced by the flooding, a temporary shelter has been established at the Community Center, offering cots and hot meals. We are committed to supporting everyone affected and appreciate your cooperation during this time.",
  "location": "Sunnyvale Community Response Area",
  "severity": "Active Update",
  "lastUpdated": "May 23, 2026, 4:51 PM",
  "faqs": [
    {
      "question": "Which areas are currently affected by flooding?",
      "answer": "We are primarily addressing localized flooding near Main Street. Our teams are working to clear roads and distribute sandbags in these areas."
    },
    {
      "question": "Is there a shelter available for residents who need to evacuate?",
      "answer": "Yes, a temporary shelter has been opened at the Community Center. It is providing cots and hot meals for displaced families."
    },
    {
      "question": "What safety measures should I take during this time?",
      "answer": "Please avoid flooded roads and never attempt to drive or walk through standing water. Stay indoors if possible and monitor official updates for the latest information."
    }
  ],
  "sms": "Community Update: Localized flooding near Main St. Teams are clearing roads & distributing sandbags. Shelter open at Community Center for displaced families. Stay safe!"
}
// HANDOFF_UPDATE_END

function App() {
  return (
    <main className="min-h-screen bg-[#fff8f1] text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <nav className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#c8f7dc] shadow-sm">
              <HeartHandshake className="h-6 w-6 text-emerald-700" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Community Response</h1>
              <p className="text-sm text-slate-500">
                Verified public updates, written with care.
              </p>
            </div>
          </div>

          <span className="rounded-full bg-[#fff1c7] px-4 py-2 text-sm font-semibold text-amber-700">
            {emergencyUpdate.severity}
          </span>
        </nav>

        <section className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm md:p-12">
          <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-[#fbcfe8] opacity-40 blur-2xl" />
          <div className="absolute bottom-8 left-8 h-32 w-32 rounded-full bg-[#c8f7dc] opacity-50 blur-2xl" />

          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ede9fe] px-4 py-2 text-sm font-semibold text-purple-700">
              <ShieldCheck className="h-4 w-4" />
              Official public update
            </div>

            <h2 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
              {emergencyUpdate.title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {emergencyUpdate.announcement}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <InfoCard
                icon={<MapPin />}
                label="Affected area"
                value={emergencyUpdate.location}
                color="bg-[#c8f7dc]"
              />
              <InfoCard
                icon={<Clock />}
                label="Last updated"
                value={emergencyUpdate.lastUpdated}
                color="bg-[#ddd6fe]"
              />
              <InfoCard
                icon={<AlertCircle />}
                label="Current status"
                value={emergencyUpdate.severity}
                color="bg-[#fed7aa]"
              />
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.5rem] bg-white p-7 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fbcfe8]">
                <HelpCircle className="h-5 w-5 text-pink-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Helpful answers</h3>
                <p className="text-sm text-slate-500">
                  Common questions during an active response.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {emergencyUpdate.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-100 bg-[#fbfaf8] p-5"
                >
                  <h4 className="font-semibold">{faq.question}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2.5rem] bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#c8f7dc]">
                  <MessageSquare className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SMS alert</h3>
                  <p className="text-sm text-slate-500">Short public message</p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#ecfdf5] p-5 text-emerald-900">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Public SMS
                </p>
                <p className="mt-3 text-lg font-semibold leading-7">
                  {emergencyUpdate.sms}
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-[#fef3c7] p-7 shadow-sm">
              <div className="flex items-center gap-2 text-amber-800">
                <CheckCircle2 className="h-5 w-5" />
                <p className="font-bold">Coordinator verified</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-amber-800">
                Updates on this page are prepared from response data and
                published only after coordinator approval.
              </p>
            </div>
          </aside>
        </section>
      </section>
    </main>
  )
}

function InfoCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <div className="rounded-3xl bg-[#fbfaf8] p-5">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${color}`}>
        <div className="h-5 w-5 text-slate-800">{icon}</div>
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  )
}

export default App