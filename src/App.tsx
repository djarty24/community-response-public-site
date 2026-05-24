// src/App.tsx
import {
  ArrowRight,
  CalendarDays,
  Heart,
  Home,
  Mail,
  MapPin,
  Package,
  Phone,
  Soup,
  Users,
} from "lucide-react"

// HANDOFF_UPDATE_START
const emergencyUpdate = {
  title: "Community Response Status",
  announcement:
    "No active emergency updates at this time. Verified public information will appear here when coordinators publish an update.",
  location: "Sunnyvale Community Response Area",
  severity: "Monitoring",
  lastUpdated: "Not yet published",
  faqs: [
    {
      question: "Where can I get help?",
      answer: "Check this page for verified updates from response coordinators.",
    },
    {
      question: "How often is this updated?",
      answer: "Updates are published when coordinators verify new information.",
    },
    {
      question: "Can I volunteer?",
      answer: "Volunteer instructions will be posted here during an active response.",
    },
  ],
  sms: "No active emergency updates.",
}
// HANDOFF_UPDATE_END

const impactStats = [
  { label: "Meals served monthly", value: "1,200+" },
  { label: "Outreach kits shared", value: "850" },
  { label: "Active volunteers", value: "96" },
]

const programs = [
  {
    icon: <Soup className="h-6 w-6" />,
    title: "Community Meals",
    description:
      "Warm weekend meals served in a welcoming space with no questions asked.",
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Care Kits",
    description:
      "Hygiene items, socks, blankets, and seasonal supplies for neighbors outdoors.",
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Shelter Navigation",
    description:
      "Support finding local shelters, transit options, and community resources.",
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#2f261f]">
      <nav className="border-b border-[#e4d5c3] bg-[#fffaf3]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7a4f35] text-white">
              <Heart className="h-5 w-5 fill-white" />
            </div>
            <div>
              <p className="text-lg font-serif font-bold tracking-tight">
                Harbor Light
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8a6b55]">
                Outreach
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#6d5748] md:flex">
            <a href="#programs">Programs</a>
            <a href="#updates">Updates</a>
            <a href="#volunteer">Volunteer</a>
          </div>

          <a
            href="#donate"
            className="rounded-full bg-[#2f5d50] px-5 py-2.5 text-sm font-bold text-white shadow-sm"
          >
            Donate kits
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full bg-[#ead8c2] px-4 py-2 text-sm font-bold text-[#7a4f35]">
            {siteContent.heroEyebrow}
          </p>

          <h1 className="font-serif text-6xl font-bold leading-[0.95] tracking-tight text-[#2f261f] md:text-7xl">
            {siteContent.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-9 text-[#6d5748]">
            {siteContent.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#volunteer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7a4f35] px-6 py-3 font-bold text-white shadow-sm"
            >
              Volunteer this week
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#updates"
              className="inline-flex items-center justify-center rounded-full border border-[#c9ad96] px-6 py-3 font-bold text-[#7a4f35]"
            >
              See current needs
            </a>
          </div>
        </div>

        <div className="rounded-[2.5rem] bg-[#fffaf3] p-5 shadow-xl shadow-[#b08c6f]/10">
          <div className="rounded-[2rem] bg-[#d9b98f] p-8">
            <div className="rounded-[1.5rem] bg-[#fffaf3] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f5d50] text-white">
                  <Soup className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#8a6b55]">
                    This week
                  </p>
                  <h2 className="text-2xl font-serif font-bold">
                    Community meal
                  </h2>
                </div>
              </div>

              <p className="text-lg font-semibold text-[#2f261f]">
                {siteContent.mealTime}
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#6d5748]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#7a4f35]" />
                  122 Harbor Street, Community Room
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-[#7a4f35]" />
                  Walk-ins welcome
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf3] py-10">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-3">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-[#ead8c2] bg-white p-6 text-center"
            >
              <p className="font-serif text-4xl font-bold text-[#2f5d50]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-[#6d5748]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8a6b55]">
            What we do
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold">
            Practical support, offered with care.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="rounded-[2rem] bg-[#fffaf3] p-7 shadow-sm"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#ead8c2] text-[#7a4f35]">
                {program.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold">{program.title}</h3>
              <p className="mt-3 leading-7 text-[#6d5748]">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="updates" className="bg-[#2f5d50] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d9b98f]">
              Current needs
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold">
              Help us prepare for colder nights.
            </h2>
          </div>

          <div className="space-y-4">
            <UpdateCard icon={<Package />} text={siteContent.donationGoal} />
            <UpdateCard icon={<Users />} text={siteContent.volunteerOrientation} />
            <UpdateCard icon={<Heart />} text={siteContent.announcement} />
          </div>
        </div>
      </section>

      {/* HANDOFF_INSERT_START */}
      {/* HANDOFF_INSERT_END */}

      <section id="volunteer" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2.5rem] bg-[#fffaf3] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8a6b55]">
                Get involved
              </p>
              <h2 className="mt-3 font-serif text-4xl font-bold">
                A few hours can make someone’s week safer.
              </h2>
              <p className="mt-4 leading-8 text-[#6d5748]">
                Volunteers help prepare meals, sort donated supplies, assemble
                care kits, and welcome neighbors during weekend outreach.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6">
              <p className="mb-4 font-bold">Contact our volunteer team</p>
              <div className="space-y-3 text-[#6d5748]">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#7a4f35]" />
                  {siteContent.contactEmail}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#7a4f35]" />
                  {siteContent.contactPhone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4d5c3] bg-[#fffaf3] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-[#6d5748] md:flex-row">
          <p>© 2026 Harbor Light Outreach</p>
          <p>Warm meals. Practical care. Community dignity.</p>
        </div>
      </footer>
    </main>
  )
}

function UpdateCard({
  icon,
  text,
}: {
  icon: React.ReactNode
  text: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-[1.5rem] bg-white/10 p-5">
      <div className="mt-1 text-[#d9b98f]">{icon}</div>
      <p className="text-lg font-semibold leading-8">{text}</p>
    </div>
  )
}

export default App