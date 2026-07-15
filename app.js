import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const trip = {
  title: "Tim & Tina's Hawaiian Cruise",
  subtitle: "Pride of America",
  dateRange: "July 17-26, 2026",
  tagline: "A phone-friendly guide for flights, port days, and all the fun links.",
  heroImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
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
      url: "",
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
        { text: "Depart DFW at 9:15 AM" },
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
        "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=80",
      notes: "Use rideshare with luggage. Cruise check-in is between 1:00-1:30 PM and sail away is at 7:00 PM.",
      items: [{ text: "Cruise check-in window from 1:00-1:30 PM" }, { text: "Sail away at 7:00 PM" }],
    },
    {
      day: "Day 2",
      date: "Sunday, July 19",
      place: "Kahului, Maui",
      theme: "Snorkel + luau",
      image:
        "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
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
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
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
        "https://images.unsplash.com/photo-1564882357082-5af7f3cbd17f?auto=format&fit=crop&w=1200&q=80",
      notes: "Rainbow Falls is best earlier in the day, and the Hilo Bay Cafe reservation anchors the schedule.",
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
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
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
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
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
        "https://images.unsplash.com/photo-1468413253725-0d5181091126?auto=format&fit=crop&w=1200&q=80",
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
        "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
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
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      notes: "Plenty of time for a calm last day before heading to the airport.",
      items: [{ text: "Fly home, departing around 5:30 PM" }],
    },
  ],
  extras: [
    {
      location: "Maui",
      idea: "Molokini and Turtle Town snorkeling adventure",
      meta: "$160 per person",
      url: "https://www.viator.com/tours/Maui/Molokini-and-Turtle-Town-Snorkeling-Adventure/d671-9281P1",
    },
    {
      location: "Maui",
      idea: "ATV adventure",
      meta: "Research option",
      url: "",
    },
    {
      location: "Hilo",
      idea: "Volcanoes & Tastes of Hawaii",
      meta: "Cruise excursion idea",
      url: "",
    },
    {
      location: "Kona",
      idea: "Sea turtles, historic Kona, and coffee excursion",
      meta: "$150 per person",
      url: "https://www.viator.com/tours/Big-Island-of-Hawaii/Kona-Shore-Excursion-Hawaiian-Sea-Turtles-Historic-Kona-and-Coffee/d669-22796P13",
    },
    {
      location: "Kauai",
      idea: "Luau Kalamaku premium seating",
      meta: "Research option",
      url: "",
    },
    {
      location: "Kauai",
      idea: "Stand-up paddle rental to Secret Falls",
      meta: "$65 per person",
      url: "https://www.viator.com/tours/Kauai/Stand-Up-Paddle-Rental-Wailua-River-to-Secret-Falls/d670-331110P1",
    },
  ],
};

function App() {
  return (
    <main className="shell">
      <section className="hero">
        <div className="hero__imageWrap">
          <img className="hero__image" src={trip.heroImage} alt="Hawaiian ocean view" />
        </div>
        <div className="hero__content">
          <p className="eyebrow">{trip.subtitle}</p>
          <h1>{trip.title}</h1>
          <p className="hero__date">{trip.dateRange}</p>
          <p className="hero__tagline">{trip.tagline}</p>
          <div className="hero__overview">
            {trip.overview.map((item) => (
              <article key={item.label} className="heroCard">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel panel--intro">
        <div>
          <p className="eyebrow">Trip Notes</p>
          <h2>Made for phones, not printers</h2>
        </div>
        <p>
          This first version is set up as a shareable web guide that we can keep improving
          with better content, maps, confirmations, and last-minute changes before the trip.
        </p>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Stay + Sail</p>
          <h2>Hotels and cruise plan</h2>
        </div>
        <div className="grid grid--three">
          {trip.hotels.map((stop) => (
            <article key={stop.name} className="card card--soft">
              <p className="card__label">{stop.date}</p>
              <h3>{stop.name}</h3>
              <p>{stop.detail}</p>
              {stop.url ? (
                <a href={stop.url} target="_blank" rel="noreferrer">
                  Open details
                </a>
              ) : (
                <span className="muted">Details coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Flights</p>
          <h2>Air travel</h2>
        </div>
        <div className="flightList">
          {trip.flights.map((flight) => (
            <article key={flight.flight} className="flightCard">
              <div>
                <p className="card__label">{flight.date}</p>
                <h3>{flight.route}</h3>
                <p>{flight.flight}</p>
              </div>
              <dl>
                <div>
                  <dt>Time</dt>
                  <dd>{flight.time}</dd>
                </div>
                <div>
                  <dt>Duration</dt>
                  <dd>{flight.duration}</dd>
                </div>
                <div>
                  <dt>Seats</dt>
                  <dd>{flight.seats}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Daily Plan</p>
          <h2>Day-by-day itinerary</h2>
        </div>
        <div className="timeline">
          {trip.days.map((day) => (
            <article key={day.day} className="dayCard">
              <img className="dayCard__image" src={day.image} alt={day.place} />
              <div className="dayCard__content">
                <div className="dayCard__titleRow">
                  <div>
                    <p className="card__label">
                      {day.day} • {day.date}
                    </p>
                    <h3>{day.place}</h3>
                  </div>
                  <span className="pill">{day.theme}</span>
                </div>
                <ul className="agenda">
                  {day.items.map((item) => (
                    <li key={item.text}>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                      {item.meta ? <small>{item.meta}</small> : null}
                    </li>
                  ))}
                </ul>
                <p className="note">{day.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Maybe List</p>
          <h2>Extra ideas from the spreadsheet</h2>
        </div>
        <div className="grid grid--two">
          {trip.extras.map((extra) => (
            <article key={extra.location + extra.idea} className="card">
              <p className="card__label">{extra.location}</p>
              <h3>{extra.idea}</h3>
              <p>{extra.meta}</p>
              {extra.url ? (
                <a href={extra.url} target="_blank" rel="noreferrer">
                  View option
                </a>
              ) : (
                <span className="muted">Link to be added</span>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
