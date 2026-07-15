const trip = {
  title: "Tim & Tina's Hawaiian Cruise",
  subtitle: "Pride of America",
  dateRange: "July 17-26, 2026",
  tagline: "A private island-hopping guide for Tim and Tina aboard Norwegian Cruise Line's Pride of America.",
  sailAwayDate: "2026-07-18T19:00:00-10:00",
  heroImage:
    "https://cache.marriott.com/content/dam/marriott-renditions/HNLLC/hnllc-building-1813-hor-feat.jpg?downsize=1920px%3A%2A&interpolation=progressive-bilinear&output-quality=70",
  stats: [
    { label: "Travelers", value: "2" },
    { label: "Islands", value: "4" },
    { label: "Port Days", value: "7" },
    { label: "Hotel Nights", value: "2" },
  ],
  route: [
    { stop: "Honolulu", island: "Oahu", detail: "Embarkation", start: "2026-07-18", end: "2026-07-18" },
    { stop: "Kahului", island: "Maui", detail: "2 days", start: "2026-07-19", end: "2026-07-20" },
    { stop: "Hilo", island: "Hawaii", detail: "Waterfalls + town", start: "2026-07-21", end: "2026-07-21" },
    { stop: "Kona", island: "Hawaii", detail: "Tender port", start: "2026-07-22", end: "2026-07-22" },
    { stop: "Nawiliwili", island: "Kauai", detail: "2 days", start: "2026-07-23", end: "2026-07-24" },
    { stop: "Honolulu", island: "Oahu", detail: "Return stay", start: "2026-07-25", end: "2026-07-26" },
  ],
  overview: [
    {
      label: "Start",
      value: "Dallas to Honolulu",
      detail: "Friday, July 17",
    },
    {
      label: "Cruise",
      value: "7 nights",
      detail: "July 18-25",
    },
    {
      label: "Finish",
      value: "Honolulu to Dallas",
      detail: "Sunday, July 26",
    },
  ],
  hotels: [
    {
      name: "The Laylow Waikiki",
      date: "Friday, July 17",
      detail: "Autograph Collection",
      url: "https://www.marriott.com/en-us/hotels/hnlak-the-laylow-waikiki-autograph-collection/overview/",
    },
    {
      name: "Pride of America",
      date: "July 18-25",
      detail: "Honolulu round trip cruise",
      url: "https://www.ncl.com/",
    },
    {
      name: "The Royal Hawaiian",
      date: "Saturday, July 25",
      detail: "Waikiki return stay",
      url: "https://www.marriott.com/en-us/hotels/hnllc-the-royal-hawaiian-a-luxury-collection-resort-waikiki/overview/?nst=paid&cid=PAI_GLB0004YXD_GLE000BIM5_GLF000OETA&ppc=ppc&pId=ustbppc&gclsrc=aw.ds&gad_source=1&gad_campaignid=1658413570&gbraid=0AAAAADilnidDsnaKO1M7uxPnApWM79vTv&gclid=CjwKCAjwmdLSBhANEiwAkREMN5abUR0CyBrORdOT3EnIa32zfJrjmJhD-an6aaQLcp7rrkOD_fsCCRoCdGYQAvD_BwE",
    },
  ],
  flights: [
    {
      date: "Fri, Jul 17",
      flight: "AA115",
      route: "DFW to HNL",
      time: "9:15 AM - 12:11 PM",
      duration: "7h 56m",
      seats: "25L / 25K / 23L",
    },
    {
      date: "Sun, Jul 26",
      flight: "AA6",
      route: "HNL to DFW",
      time: "5:39 PM - 6:00 AM",
      duration: "7h 21m",
      seats: "27L / 25K / 26L",
    },
  ],
  days: [
    {
      day: "Day 0",
      date: "Friday, July 17",
      place: "Dallas to Honolulu",
      theme: "Travel day",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      notes: "Allow extra time at DFW and keep medications in your carry-on.",
      items: [
        { text: "Flight AA115: DFW to HNL" },
        { text: "Depart DFW at 9:15 AM" },
        { text: "Arrive HNL at 12:11 PM" },
        { text: "Duration: 7h 56m, nonstop" },
        { text: "Seats: 25L / 25K / 23L" },
        {
          text: "Check into The Laylow Waikiki",
          url: "https://www.marriott.com/en-us/hotels/hnlak-the-laylow-waikiki-autograph-collection/overview/",
        },
      ],
    },
    {
      day: "Day 1",
      date: "Saturday, July 18",
      place: "Honolulu, Oahu",
      theme: "Embarkation",
      image:
        "https://cache.marriott.com/is/image/marriotts7prod/ak-hnlak-laylow-waikiki-pool-41268%3AFeature-Hor?fit=constrain&wid=1920",
      notes:
        "Use rideshare with luggage. Cruise check-in is between 1:00-1:30 PM and sail away is at 7:00 PM.",
      items: [
        { text: "Cruise check-in window from 1:00-1:30 PM" },
        { text: "Sail away at 7:00 PM" },
      ],
    },
    {
      day: "Day 2",
      date: "Sunday, July 19",
      place: "Kahului, Maui",
      theme: "Snorkel + luau",
      image:
        "https://www.lovebigisland.com/wp-content/uploads/aerial-road-to-hana.jpg",
      notes: "Keep water, sunscreen, and a light layer handy.",
      items: [
        {
          text: "Snorkel from 12:30-4:00 PM",
          url: "https://seamaui.com/snorkeling/afternoon-west-maui-snorkel/",
        },
        {
          text: "Old Lahaina Luau at 6:00 PM",
          url: "https://oldlahainaluau.com/show-info/",
        },
      ],
    },
    {
      day: "Day 3",
      date: "Monday, July 20",
      place: "Kahului, Maui",
      theme: "Road to Hana",
      image:
        "https://www.lovebigisland.com/wp-content/uploads/aerial-road-to-hana.jpg",
      notes: "Cell service can get spotty on the Road to Hana.",
      items: [
        {
          text: "Small-group Road to Hana tour",
          url: "https://www.viator.com/tours/Maui/Small-Group-Road-to-Hana-Tour/d671-17824P3",
          meta: "$282 per person",
        },
      ],
    },
    {
      day: "Day 4",
      date: "Tuesday, July 21",
      place: "Hilo, Hawaii",
      theme: "Waterfalls + town",
      image:
        "https://www.lovebigisland.com/wp-content/uploads/rainbow-falls-big-island-hawaii-1.jpg",
      notes:
        "Rainbow Falls is best earlier in the day, and the Hilo Bay Cafe reservation anchors the schedule.",
      items: [
        {
          text: "Rainbow Falls",
          url: "https://www.lovebigisland.com/hilo/rainbow-falls/?utm_source=chatgpt.com",
        },
        {
          text: "Hilo Farmers Market",
          url: "https://www.gohawaii.com/islands/hawaii-big-island/regions/hilo/hilo-farmers-market",
        },
        {
          text: "Downtown Hilo stroll",
          url: "https://www.gohawaii.com/islands/hawaii-big-island/regions/hilo/downtown-hilo",
        },
        {
          text: "Lunch reservation at Hilo Bay Cafe",
          url: "https://hilobaycafe.com/",
        },
        {
          text: "Hilo Bay or Liliuokalani Gardens",
          url: "https://www.liliuokalanigardens.org/?utm_source=chatgpt.com",
        },
      ],
    },
    {
      day: "Day 5",
      date: "Wednesday, July 22",
      place: "Kona, Hawaii",
      theme: "Flexible port day",
      image:
        "https://bigisland.org/wp-content/uploads/2022/11/Ali_Drive._Shops-1025x769.jpg",
      notes: "This is a tender port, so leave buffer time to get back to the ship.",
      items: [
        { text: "Tender port" },
        {
          text: "Walk Alii Drive",
          url: "https://bigisland.org/alii-drive-shopping-dining-swimming-and-sightseeing-along-konas-seaside-mainstreet/",
        },
        {
          text: "Fish Hopper reservation at 1:00 PM",
          url: "https://www.fishhopperkona.com/about/",
        },
        {
          text: "Optional: try for Huggo's walk-in instead",
        },
        {
          text: "Visit Hulihee Palace",
          url: "https://www.gohawaii.com/islands/hawaii-big-island/regions/kona/hulihee-palace",
        },
      ],
    },
    {
      day: "Day 6",
      date: "Thursday, July 23",
      place: "Nawiliwili, Kauai",
      theme: "South shore",
      image:
        "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Poipuhorizontal%20-%20Kicka.jpg.webp?itok=nddYCgLV",
      notes: "Keep this one relaxed and coastal.",
      items: [
        {
          text: "Poipu Beach",
          url: "https://www.gohawaii.com/islands/kauai/regions/south-shore/poipu-beach-park",
        },
        {
          text: "Spouting Horn",
          url: "https://www.gohawaii.com/islands/kauai/regions/south-shore/spouting-horn",
        },
        {
          text: "Old Koloa Town",
          url: "https://www.oldkoloa.com/",
        },
      ],
    },
    {
      day: "Day 7",
      date: "Friday, July 24",
      place: "Nawiliwili, Kauai",
      theme: "Resort day options",
      image:
        "https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/Poipuhorizontal%20-%20Kicka.jpg.webp?itok=nddYCgLV",
      notes: "Resort-day availability should be confirmed before the cruise.",
      items: [
        {
          text: "Grand Hyatt Kauai spa day pass option",
          url: "https://www.hyatt.com/grand-hyatt/en-US/kauai-grand-hyatt-kauai-resort-and-spa",
        },
        {
          text: "Fallback: Kalapaki Beach + lunch at Kauai Marriott",
          url: "https://www.kauai.com/kalapaki-beach",
        },
        {
          text: "Royal Sonesta day pass options",
          url: "https://www.resortpass.com/hotels/royal-sonesta-kauai-resort?date=2026-07-24",
        },
      ],
    },
    {
      day: "Day 8",
      date: "Saturday, July 25",
      place: "Honolulu, Oahu",
      theme: "Disembark + hotel night",
      image:
        "https://cache.marriott.com/is/image/marriotts7prod/ak-hnlak-laylow-waikiki-pool-41268%3AFeature-Hor?fit=constrain&wid=1920",
      notes: "No rush in the morning. Waikiki is close enough to keep the day easy.",
      items: [
        { text: "Disembark in the morning" },
        {
          text: "Check into The Royal Hawaiian",
          url: "https://www.marriott.com/en-us/hotels/hnllc-the-royal-hawaiian-a-luxury-collection-resort-waikiki/overview/?nst=paid&cid=PAI_GLB0004YXD_GLE000BIM5_GLF000OETA&ppc=ppc&pId=ustbppc&gclsrc=aw.ds&gad_source=1&gad_campaignid=1658413570&gbraid=0AAAAADilnidDsnaKO1M7uxPnApWM79vTv&gclid=CjwKCAjwmdLSBhANEiwAkREMN5abUR0CyBrORdOT3EnIa32zfJrjmJhD-an6aaQLcp7rrkOD_fsCCRoCdGYQAvD_BwE",
        },
      ],
    },
    {
      day: "Day 9",
      date: "Sunday, July 26",
      place: "Honolulu to Dallas",
      theme: "Fly home",
      image:
        "https://cache.marriott.com/is/image/marriotts7prod/ak-hnlak-laylow-waikiki-pool-41268%3AFeature-Hor?fit=constrain&wid=1920",
      notes: "Plenty of time for a calm last day before heading to the airport.",
      items: [
        { text: "Flight AA6: HNL to DFW" },
        { text: "Depart HNL at 5:39 PM" },
        { text: "Arrive DFW at 6:00 AM" },
        { text: "Duration: 7h 21m, nonstop" },
        { text: "Seats: 27L / 25K / 26L" },
      ],
    },
  ],
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLink(url, label, className = "") {
  if (!url) {
    return `<span class="muted">Details coming soon</span>`;
  }
  return `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
}

function startOfDay(value) {
  const date = new Date(value);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getCountdownLabel() {
  const now = new Date();
  const sailAway = new Date(trip.sailAwayDate);
  const diffMs = sailAway.getTime() - now.getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  const days = Math.ceil(diffMs / dayMs);

  if (days > 1) return `${days} days until sail away`;
  if (days === 1) return "1 day until sail away";
  if (days === 0) return "Sail away is today";
  return "Pride of America is already underway";
}

function getActiveRouteIndex() {
  const today = startOfDay(new Date());
  const index = trip.route.findIndex((stop) => {
    const start = startOfDay(stop.start);
    const end = startOfDay(stop.end);
    return today >= start && today <= end;
  });

  if (index >= 0) return index;

  const first = startOfDay(trip.route[0].start);
  if (today < first) return 0;
  return trip.route.length - 1;
}

function render() {
  const root = document.getElementById("root");
  const activeRouteIndex = getActiveRouteIndex();
  const countdownLabel = getCountdownLabel();

  root.innerHTML = `
    <main class="shell">
      <section class="hero">
        <div class="hero__imageWrap">
          <img class="hero__image" src="${escapeHtml(trip.heroImage)}" alt="Hawaiian ocean view" />
        </div>
        <div class="hero__content">
          <p class="eyebrow">${escapeHtml(trip.subtitle)}</p>
          <h1>${escapeHtml(trip.title)}</h1>
          <p class="hero__date">${escapeHtml(trip.dateRange)}</p>
          <p class="hero__tagline">${escapeHtml(trip.tagline)}</p>
          <div class="countdownBar">${escapeHtml(countdownLabel)}</div>
          <div class="statsBar">
            ${trip.stats
              .map(
                (item) => `
                  <div class="statPill">
                    <strong>${escapeHtml(item.value)}</strong>
                    <span>${escapeHtml(item.label)}</span>
                  </div>
                `,
              )
              .join("")}
          </div>
          <div class="hero__overview">
            ${trip.overview
              .map(
                (item) => `
                  <article class="heroCard">
                    <span>${escapeHtml(item.label)}</span>
                    <strong>${escapeHtml(item.value)}</strong>
                    <small>${escapeHtml(item.detail)}</small>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <nav class="jumpNav" aria-label="Jump to section">
        <a href="#overview">Overview</a>
        <a href="#route">Route</a>
        <a href="#flights">Flights</a>
        <a href="#itinerary">Itinerary</a>
      </nav>

      <section class="section" id="overview">
        <div class="section__heading">
          <p class="eyebrow">Stay + Sail</p>
          <h2>Hotels and cruise plan</h2>
          <p class="section__lede">The core logistics, all together, before you step aboard Pride of America.</p>
        </div>
        <div class="grid grid--three">
          ${trip.hotels
            .map(
              (stop) => `
                <article class="card card--soft">
                  <p class="card__label">${escapeHtml(stop.date)}</p>
                  <h3>${escapeHtml(stop.name)}</h3>
                  <p>${escapeHtml(stop.detail)}</p>
                  ${renderLink(stop.url, "Open details")}
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section" id="route">
        <div class="section__heading">
          <p class="eyebrow">Cruise Route</p>
          <h2>Pride of America route map</h2>
          <p class="section__lede">A simple at-a-glance view of the island sequence from embarkation to return.</p>
        </div>
        <div class="routeCard">
          <div class="routeCard__meta">
            <div>
              <p class="card__label">Ship</p>
              <h3>Norwegian Cruise Line</h3>
              <p class="routeCard__ship">Pride of America</p>
              <p class="routeCard__link">${renderLink("https://www.ncl.com/", "View NCL")}</p>
            </div>
            <p class="routeCard__summary">Honolulu round trip with Maui, the Big Island, and Kauai in between.</p>
          </div>
          <div class="routeLayout">
            <div class="routeMapWrap">
              <img class="routeMap" src="./assets/route-map.png" alt="Cruise route map showing Honolulu, Kahului, Hilo, Kona, and Nawiliwili" />
              <p class="routeMap__caption">The map stays fixed, but the highlighted stop and countdown update based on the current date.</p>
            </div>
            <div class="routeLine" aria-label="Cruise route stops">
              ${trip.route
                .map(
                  (stop, index) => `
                  <div class="routeStop${index === activeRouteIndex ? " routeStop--active" : ""}">
                    <div class="routeStop__dot"></div>
                    <div class="routeStop__text">
                      <strong>${escapeHtml(stop.stop)}</strong>
                      <span>${escapeHtml(stop.island)}</span>
                      <small>${escapeHtml(stop.detail)}</small>
                    </div>
                  </div>
                  ${index < trip.route.length - 1 ? `<div class="routeLine__connector" aria-hidden="true"></div>` : ""}
                `,
                )
                .join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="flights">
        <div class="section__heading">
          <p class="eyebrow">Flights</p>
          <h2>Air travel</h2>
          <p class="section__lede">The details that always get checked twice on travel days.</p>
        </div>
        <div class="flightList">
          ${trip.flights
            .map(
              (flight) => `
                <article class="flightCard">
                  <div>
                    <p class="card__label">${escapeHtml(flight.date)}</p>
                    <h3>${escapeHtml(flight.route)}</h3>
                    <p>${escapeHtml(flight.flight)}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>Time</dt>
                      <dd>${escapeHtml(flight.time)}</dd>
                    </div>
                    <div>
                      <dt>Duration</dt>
                      <dd>${escapeHtml(flight.duration)}</dd>
                    </div>
                    <div>
                      <dt>Seats</dt>
                      <dd>${escapeHtml(flight.seats)}</dd>
                    </div>
                  </dl>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section" id="itinerary">
        <div class="section__heading">
          <p class="eyebrow">Daily Plan</p>
          <h2>Day-by-day itinerary</h2>
          <p class="section__lede">Port days, beach options, reservations, and the links you’ll actually use on the ship.</p>
        </div>
        <div class="timeline">
          ${trip.days
            .map(
              (day) => `
                <article class="dayCard">
                  <img class="dayCard__image" src="${escapeHtml(day.image)}" alt="${escapeHtml(day.place)}" />
                  <div class="dayCard__content">
                    <div class="dayCard__titleRow">
                      <div>
                        <p class="card__label">${escapeHtml(day.day)} • ${escapeHtml(day.date)}</p>
                        <h3>${escapeHtml(day.place)}</h3>
                      </div>
                      <span class="pill">${escapeHtml(day.theme)}</span>
                    </div>
                    <ul class="agenda">
                      ${day.items
                        .map(
                          (item) => `
                            <li>
                              ${
                                item.url
                                  ? renderLink(item.url, item.text)
                                  : `<span>${escapeHtml(item.text)}</span>`
                              }
                              ${item.meta ? `<small>${escapeHtml(item.meta)}</small>` : ""}
                            </li>
                          `,
                        )
                        .join("")}
                    </ul>
                    <p class="note">${escapeHtml(day.notes)}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
      <footer class="siteFooter">
        <p class="siteFooter__title">Tim & Tina's Hawaiian Cruise</p>
        <p class="siteFooter__body">One place for the route, flights, hotel details, and daily plan aboard Pride of America.</p>
      </footer>
    </main>
  `;
}

render();
