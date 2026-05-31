const sequences = [
  {
    id: "mindtrip",
    title: "MindTrips — Booking Conversion Sequence",
    description: "6-email sequence turning saved itineraries into booked trips.",
    tags: ["Conversion", "AI Travel", "SaaS"],
    sender: {
      name: "Alex from MindTrips",
      email: "alex@mindtrips.com",
      avatar: "A",
    },
    overview: {
      subject: "Sequence Overview",
      date: "",
      body: `
        <h2 style="margin:0 0 20px;font-size:20px;font-weight:600;color:#0f172a;">Mindtrip — Booking Conversion Sequence</h2>
        <p><strong>The brief:</strong> AI travel planning app. Free product. Revenue comes from hotel, flight, and activity bookings made through the platform.</p>
        <p>The problem: users were building full itineraries and disappearing before booking anything.</p>
        <p><strong>The sequence:</strong> 6 emails. 14 days. One goal — turn a saved plan into a booked trip.</p>
        <p>Each email hits a different angle: aspiration, friction, urgency, loss, payoff, last call. Together they move a user from "I'll get to it" to "it's booked."</p>
        <p>No fake urgency. No "only 2 rooms left." Just copy that understands why people don't pull the trigger — and makes pulling it feel obvious.</p>
        <p style="color:#64748b;font-style:italic;">This is a spec piece written for Mindtrip as a prospecting sample. Start with Email 1 →</p>
      `,
      notes: null,
    },
    emails: [
      {
        subject: "🧳 One more click",
        preview: "5 days, 3 neighborhoods, and that rooftop bar in Alfama.",
        date: "Mon, May 12",
        day: "Day 0 — 48 hrs after itinerary creation",
        body: `
          <p>📷 A morning walk through Alfama's labyrinthine alleys.<br>
          🌇 Watching the sunset from {Bar name's} rooftop bar.<br>
          🍴 <em>Pastéis de bacalhau</em> in downtown Baixa.</p>
          <p>You were planning all of this just two days ago…</p>
          <p>You just haven't booked yet.</p>
          <p style="margin:28px 0;">
            <a href="#" class="cta-button">Book your Lisbon trip in one click →</a>
          </p>
          <p>— [Signoff]</p>
          <p>P.S. Need help booking? Just reply to this email and we'll help you out.</p>
        `,
        notes: `
          <p>The goal here is simple: re-spark visual desire before any logic or urgency lands. Opening with three sensory details pulled directly from the user's itinerary makes the email feel personal rather than templated — even though it's automated. Specificity does the work that personalization tokens usually can't.</p>
          <p>"You were planning all of this just two days ago… You just haven't booked yet." — the ellipsis pause is intentional. It mimics how you'd actually say it to someone. No accusation, no pressure. Just a mirror.</p>
          <p>The CTA deliberately echoes the subject line ("one more click") to create a closed loop. Short. No friction language. No hard sell. This is Day 0 — the user just needs a nudge, not a pitch.</p>
          <p>The PS humanizes the brand at a moment when trust matters most. A real reply option signals there's a human on the other side.</p>
        `,
      },
      {
        subject: "You did the research. Skip the scavenger hunt.",
        preview: "(And get the best prices for your Lisbon stay)",
        date: "Thu, May 15",
        day: "Day 3",
        body: `
          <p>One hotel…</p>
          <p>Four flights…</p>
          <p>Five dinner reservations…</p>
          <p>But wait, you just saw this tour's price for 20% off in some other tab.</p>
          <p>What site was that?</p>
          <p>Ten tabs become twenty, twenty become thirty…</p>
          <p>You get them all mixed and end up paying more than you should have.</p>
          <p>Not with us.</p>
          <p>You already have the best prices for everything in your schedule.</p>
          <p>In a single tab.</p>
          <p style="margin:28px 0;">
            <a href="#" class="cta-button">Book everything from your trip's tab →</a>
          </p>
          <p>— [Signoff]</p>
          <p>P.S. Everything you book gets saved in your itinerary plan. So no digging outside the restaurant for your confirmation either. Book now.</p>
        `,
        notes: `
          <p>Email 2 hits the #1 practical friction point in travel booking: tab chaos. The stacked list — "one hotel… four flights… five dinner reservations…" — mimics the actual cognitive overwhelm of the booking process. Each line is its own paragraph because pacing matters. The reader should feel the pile-up before we offer the solution.</p>
          <p>The "what site was that?" moment is the key turn. It's a specific, recognizable micro-frustration that anyone who's booked travel has experienced. Naming it precisely builds more trust than a feature claim ever could.</p>
          <p>Then the contrast lands hard: "Not with us." Two words. Full stop. The setup earns the payoff.</p>
          <p>The PS reinforces convenience with a second, different benefit (confirmation tracking) — anchoring the value proposition without repeating the same angle twice.</p>
        `,
      },
      {
        subject: "Crowds are clearing, but…",
        preview: "Experienced travelers are now booking in",
        date: "Sat, May 17",
        day: "Day 5",
        body: `
          <p>The August tourists are clearing out of Lisbon now.</p>
          <p>Fall menus are coming out on Príncipe Real's wine bars.</p>
          <p>The sun's golden rays start floating over the river just a little bit longer before dusk.</p>
          <p>Lisbon in September is an entirely different city.</p>
          <p>You picked a great time.</p>
          <p>Shoulder season's getting started though…</p>
          <p>And the more experienced travelers are already booking in.</p>
          <p>Your planned dates are still available right now.</p>
          <p style="margin:28px 0;">
            <a href="#" class="cta-button">Lock in your stay, all in one tab →</a>
          </p>
          <p>— [Signoff]</p>
          <p>P.S. Want a local's recommendations? Check out this Lisbon itinerary built by one of our travel creators who lived there for two years.</p>
        `,
        notes: `
          <p>This is the first urgency email — but urgency has to be earned. The first three paragraphs don't mention booking at all. They just make September in Lisbon feel irresistible. You build desire for the specific timing before you use that timing as leverage.</p>
          <p>"You picked a great time" is strategic validation. The reader feels smart for their choice — which raises their emotional investment in actually going. Now they have something to protect.</p>
          <p>The urgency is honest: shoulder season, experienced travelers booking. No fake scarcity ("only 2 rooms left!"). Honest urgency converts better and doesn't erode trust.</p>
          <p>The CTA shifts from aspirational ("book your trip") to protective ("lock in your stay") — a small but meaningful word choice change that matches the new emotional frame.</p>
        `,
      },
      {
        subject: "Everyone loved the idea…",
        preview: "Then nobody booked anything.",
        date: "Tue, May 20",
        day: "Day 8",
        body: `
          <p>"Yes! We should totally go to Lisbon."</p>
          <p>"Yeah, 100%!"</p>
          <p>"Look! I found this bar on TikTok…"</p>
          <p>"OMG yesss. Let's figure dates out next week."</p>
          <p>Next week became next month…</p>
          <p>The group chat went quiet.</p>
          <p>Not because anyone said no…</p>
          <p>But because nobody said "Booking it now."</p>
          <p>That's how most trips die.</p>
          <p>Will yours die too?</p>
          <p style="margin:28px 0;">
            <a href="#" class="cta-button">Keep your Lisbon trip alive →</a>
          </p>
          <p>One tab. One click.</p>
          <p>Someone has to go first.</p>
          <p>—</p>
          <p>[Signoff]</p>
          <p>P.S. Three people liked your itinerary this week. You got some nice taste ;)</p>
        `,
        notes: `
          <p>Pattern interrupt. This email opens with a group chat transcript — a format so recognizable it creates an immediate "oh, that's me" reaction before a single pitch lands. The dialogue accelerates and then collapses into silence. That structure mirrors how group trips actually die: not with a "no," but with nothing.</p>
          <p>"That's how most trips die." — blunt. Direct. A little uncomfortable. "Will yours die too?" makes it personal without being aggressive. It respects the reader's intelligence — they already know this pattern. We're just naming it.</p>
          <p>The CTA flips from benefit-focused to stakes-focused: "Keep your Lisbon trip alive." This is loss aversion, but earned — we've just illustrated exactly what the loss looks like.</p>
          <p>The PS is a dopamine hit: "three people liked your itinerary." It re-engages the reader's ego and social investment in the trip at the exact moment they might be letting go.</p>
        `,
      },
      {
        subject: "The whole chat's waiting on you…",
        preview: "Turn your plan into a countdown",
        date: "Fri, May 23",
        day: "Day 11",
        body: `
          <p>"Ok, it's booked!"</p>
          <p>The group chat lights up.</p>
          <p>Someone shares a packing list.</p>
          <p>Someone else drops a playlist.</p>
          <p>And someone else starts a countdown.</p>
          <p>Everyone loves that moment.</p>
          <p>And you know it.</p>
          <p>Right now, your Lisbon trip's a "maaaybe".</p>
          <p>One booking ends that.</p>
          <p style="margin:28px 0;">
            <a href="#" class="cta-button">Start your Lisbon countdown →</a>
          </p>
          <p>— [Signoff]</p>
          <p>P.S. Forward any extra reservations to <a href="mailto:receipts@company.ai" style="color:#3b82f6;">receipts@company.ai</a> → They'll land right in your itinerary. No digging through your inbox on the trip.</p>
        `,
        notes: `
          <p>After three emails that pushed on loss and urgency, this one pivots completely to positive future-pacing. The sequence needs emotional range — constant pressure fatigues readers. Email 5 earns attention by feeling like a reward.</p>
          <p>The opening scene — group chat lighting up, packing lists, playlists, countdowns — is pure desire creation. No feature mentions. No CTAs yet. Just the moment everyone wants to be in. It's written in present tense and short bursts to create momentum and make the reader feel it, not just read it.</p>
          <p>"And you know it." — a direct address that acknowledges the reader's own desire. They're not being sold. They're being understood.</p>
          <p>The CTA reframes the action as something desirable: "Start your countdown" — not "book your trip." Same action, completely different emotional register.</p>
          <p>The PS delivers practical value (receipt forwarding feature) framed as a gift, not a pitch. At Day 11, earned trust turns utility into delight.</p>
        `,
      },
      {
        subject: "Last email. Two options.",
        preview: "Book it. Or save it. Up to you.",
        date: "Mon, May 26",
        day: "Day 14",
        body: `
          <p>Six emails in…</p>
          <p>And you're still opening them.</p>
          <p>So here's the deal.</p>
          <p>Your plan is ready.</p>
          <p>Prices are good.</p>
          <p>One tab, one click.</p>
          <p style="margin:28px 0;">
            <a href="#" class="cta-button">Book your Lisbon trip →</a>
          </p>
          <p>Future-you will thank you for it.</p>
          <p>Or if life got busy and you can't go…</p>
          <p>Star this email.</p>
          <p>Your itinerary stays saved.</p>
          <p>Your Lisbon trip remains here.</p>
          <p>Just a click away.</p>
          <p>— [Signoff]</p>
          <p>P.S. You can paste any Reel or TikTok into our site, anytime. We'll start planning a new trip. Even if this one's not yet booked 😛</p>
        `,
        notes: `
          <p>The meta-awareness opener — "Six emails in… and you're still opening them" — does something most closing emails don't: it builds credibility by being transparent about the sequence. There's no pretense. And acknowledging that the reader is still here is itself a compliment. It creates a moment of genuine rapport before the final ask.</p>
          <p>The close is stripped to essentials: "Your plan is ready. Prices are good. One tab, one click." Three statements, three objections pre-handled, zero fluff.</p>
          <p>The two-option close is the structural centerpiece. Instead of one final push to buy, we offer two paths: book it, or save it for later. Neither option is "forget it forever." This is a classic compliance technique — when given an easy opt-out that still keeps the relationship alive, people are more likely to take the primary option anyway. And those who choose "save it" stay warm.</p>
          <p>The PS closes the loop on the whole brand: you can always come back. Even if this trip doesn't happen, MindTrips remains relevant to your next one. Ending on possibility, not pressure.</p>
        `,
      },
    ],
  },
];
