import { useMemo, useRef, useState } from 'react'
import './App.css'

const activities = [
  {
    id: 1,
    title: 'M+ Art & Coffee Afternoon',
    shortTitle: 'Art & Coffee Afternoon',
    category: 'Arts',
    tags: ['Arts', 'Chill'],
    location: 'West Kowloon',
    day: 'Saturday',
    time: '2:00 PM',
    duration: '4h 20min',
    price: 95,
    weather: 'Indoor',
    emoji: '🎨',
    tone: 'purple',
    baseMatch: 94,
    description:
      'Contemporary art, coffee and a waterfront walk — built for an easy creative afternoon.',
    route: [
      {
        time: '13:30',
        icon: '🚇',
        type: 'START',
        title: 'Leave PolyU',
        text: 'Take the MTR toward West Kowloon. Estimated travel time: 25 minutes.',
      },
      {
        time: '14:00',
        icon: '🎨',
        type: 'MAIN ACTIVITY · 2 HOURS',
        title: 'M+ Exhibition',
        text: 'Explore the current exhibitions indoors — ideal for the expected afternoon rain.',
      },
      {
        time: '16:15',
        icon: '☕',
        type: 'BREAK · 45 MIN',
        title: 'Coffee Nearby',
        text: 'Take a short café break. Estimated spend: HK$35–45.',
      },
      {
        time: '17:20',
        icon: '🌇',
        type: 'OPTIONAL · 30 MIN',
        title: 'West Kowloon Promenade',
        text: 'If the rain clears, finish with a short waterfront walk before sunset.',
      },
    ],
  },
  {
    id: 2,
    title: 'PMQ Weekend Design Market',
    shortTitle: 'Weekend Design Market',
    category: 'Markets',
    tags: ['Markets', 'Arts'],
    location: 'Central',
    day: 'Sunday',
    time: '1:30 PM',
    duration: '3 hours',
    price: 0,
    weather: 'Mixed',
    emoji: '🛍️',
    tone: 'orange',
    baseMatch: 89,
    description:
      'Independent designers, small brands and creative stalls in a relaxed Central afternoon.',
    route: [
      {
        time: '13:00',
        icon: '🚇',
        type: 'START',
        title: 'Head to Central',
        text: 'Take the MTR and walk toward PMQ.',
      },
      {
        time: '13:30',
        icon: '🛍️',
        type: 'MAIN ACTIVITY · 2 HOURS',
        title: 'Explore PMQ Market',
        text: 'Browse local design, accessories, prints and independent brands.',
      },
      {
        time: '15:40',
        icon: '🥤',
        type: 'BREAK · 30 MIN',
        title: 'Quick Drink',
        text: 'Take a low-cost break nearby before continuing.',
      },
      {
        time: '16:20',
        icon: '📸',
        type: 'OPTIONAL',
        title: 'Walk Through SoHo',
        text: 'Finish with a casual photo walk through the surrounding streets.',
      },
    ],
  },
  {
    id: 3,
    title: 'Tai Kwun Slow Evening',
    shortTitle: 'Tai Kwun Slow Evening',
    category: 'Chill',
    tags: ['Chill', 'Arts'],
    location: 'Central',
    day: 'Sunday',
    time: '4:30 PM',
    duration: '3.5 hours',
    price: 60,
    weather: 'Mostly Indoor',
    emoji: '🏛️',
    tone: 'green',
    baseMatch: 85,
    description:
      'Heritage spaces, exhibitions and a slower evening in the heart of Central.',
    route: [
      {
        time: '16:00',
        icon: '🚇',
        type: 'START',
        title: 'Travel to Central',
        text: 'Take the MTR and walk uphill toward Tai Kwun.',
      },
      {
        time: '16:30',
        icon: '🏛️',
        type: 'MAIN ACTIVITY · 90 MIN',
        title: 'Explore Tai Kwun',
        text: 'Visit heritage spaces and current exhibitions.',
      },
      {
        time: '18:10',
        icon: '☕',
        type: 'BREAK',
        title: 'Courtyard Break',
        text: 'Pause for a drink and enjoy the evening atmosphere.',
      },
      {
        time: '19:00',
        icon: '🌃',
        type: 'OPTIONAL',
        title: 'Central Evening Walk',
        text: 'End with a relaxed walk through Central.',
      },
    ],
  },
  {
    id: 4,
    title: 'Dragon’s Back Morning Escape',
    shortTitle: 'Morning Hiking Escape',
    category: 'Outdoors',
    tags: ['Outdoors'],
    location: 'Shek O',
    day: 'Sunday',
    time: '9:00 AM',
    duration: '4 hours',
    price: 35,
    weather: 'Outdoor',
    emoji: '🥾',
    tone: 'blue',
    baseMatch: 91,
    description:
      'A short city escape with ridge views, fresh air and an easy half-day hiking route.',
    route: [
      {
        time: '08:15',
        icon: '🚌',
        type: 'START',
        title: 'Travel to Trail',
        text: 'Take public transport toward the Dragon’s Back trail entrance.',
      },
      {
        time: '09:00',
        icon: '🥾',
        type: 'MAIN ACTIVITY · 2.5 HOURS',
        title: 'Dragon’s Back Hike',
        text: 'Follow the ridge route and stop at viewpoints along the way.',
      },
      {
        time: '11:45',
        icon: '🥤',
        type: 'BREAK',
        title: 'Post-Hike Drink',
        text: 'Rest and rehydrate after the trail.',
      },
      {
        time: '12:15',
        icon: '🚌',
        type: 'RETURN',
        title: 'Head Back',
        text: 'Return to the city before the afternoon.',
      },
    ],
  },
  {
    id: 5,
    title: 'Indie Music Night',
    shortTitle: 'Indie Music Night',
    category: 'Music',
    tags: ['Music'],
    location: 'Mong Kok',
    day: 'Saturday',
    time: '7:30 PM',
    duration: '3 hours',
    price: 180,
    weather: 'Indoor',
    emoji: '🎵',
    tone: 'pink',
    baseMatch: 90,
    description:
      'A compact live music night for discovering local performers with friends.',
    route: [
      {
        time: '18:45',
        icon: '🚇',
        type: 'START',
        title: 'Head to Mong Kok',
        text: 'Travel early to leave enough time for dinner or snacks.',
      },
      {
        time: '19:30',
        icon: '🎵',
        type: 'MAIN ACTIVITY',
        title: 'Live Music Set',
        text: 'Discover local performers in an intimate indoor venue.',
      },
      {
        time: '21:45',
        icon: '🍜',
        type: 'OPTIONAL',
        title: 'Late Night Food',
        text: 'Finish the night with something casual nearby.',
      },
    ],
  },
]

const crewData = [
  {
    id: 1,
    name: 'M+ Saturday Crew',
    activity: 'M+ Art & Coffee Afternoon',
    time: 'Sat · 2:00 PM',
    members: 3,
    capacity: 5,
    interests: ['Art', 'Coffee', 'Photography'],
  },
  {
    id: 2,
    name: 'Sunday Market Walk',
    activity: 'PMQ Weekend Design Market',
    time: 'Sun · 1:30 PM',
    members: 4,
    capacity: 6,
    interests: ['Design', 'Markets', 'Photos'],
  },
  {
    id: 3,
    name: 'Dragon’s Back Beginners',
    activity: 'Dragon’s Back Morning Escape',
    time: 'Sun · 9:00 AM',
    members: 2,
    capacity: 5,
    interests: ['Hiking', 'Nature', 'Casual'],
  },
]

function App() {
  const [page, setPage] = useState('discover')
  const [mood, setMood] = useState('Arts')
  const [budget, setBudget] = useState('Under HK$100')
  const [company, setCompany] = useState('Friends')
  const [planned, setPlanned] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [crewModal, setCrewModal] = useState(false)
  const [joinedCrew, setJoinedCrew] = useState(false)
  const [activePlan, setActivePlan] = useState(null)
  const [saved, setSaved] = useState([])
  const [checkinModal, setCheckinModal] = useState(false)
  const [checkinText, setCheckinText] = useState('')
  const [rating, setRating] = useState(5)
  const [guide, setGuide] = useState(null)
  const [toast, setToast] = useState('')

  const resultsRef = useRef(null)

  const moods = [
    ['🎨', 'Arts'],
    ['🌿', 'Outdoors'],
    ['🎵', 'Music'],
    ['🛍', 'Markets'],
    ['☕', 'Chill'],
    ['🎲', 'Surprise Me'],
  ]

  const budgets = ['Free', 'Under HK$100', 'HK$100–300', 'Flexible']
  const companies = ['Solo', 'Friends', 'Date', 'Meet People']

  const budgetLimit =
    budget === 'Free'
      ? 0
      : budget === 'Under HK$100'
        ? 100
        : budget === 'HK$100–300'
          ? 300
          : Infinity

  const recommendations = useMemo(() => {
    return activities
      .map((activity) => {
        let score = activity.baseMatch

        if (mood === 'Surprise Me') score += 2
        else if (activity.tags.includes(mood)) score += 6
        else score -= 5

        if (activity.price <= budgetLimit) score += 3
        else score -= 12

        if (activity.weather === 'Indoor') score += 2
        if (company === 'Friends' && activity.category === 'Markets') score += 2
        if (company === 'Solo' && activity.category === 'Chill') score += 3

        return {
          ...activity,
          match: Math.max(68, Math.min(98, score)),
        }
      })
      .sort((a, b) => b.match - a.match)
      .slice(0, 3)
  }, [mood, budgetLimit, company])

  function showToast(message) {
    setToast(message)
    setTimeout(() => setToast(''), 2200)
  }

  function handlePlan() {
    setPlanned(true)

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }

  function toggleSave(id) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  function startPlan(plan) {
    setActivePlan(plan)
    setSelectedPlan(null)
    showToast('Plan added to My Weekends')
  }

  function completeCheckin() {
    const activity = activePlan || selectedPlan || activities[0]

    setGuide({
      activity,
      rating,
      note:
        checkinText ||
        'A relaxed weekend plan with a good mix of exploring, breaks and time with friends.',
    })

    setCheckinModal(false)
    setCheckinText('')
    setPage('weekends')
    setActivePlan(null)
    showToast('Weekend memory saved')
  }

  function navTo(target) {
    setPage(target)
    setSelectedPlan(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {toast && <div className="toast">✓ {toast}</div>}

      <nav>
        <button className="logo" onClick={() => navTo('discover')}>
          WEEKENDLY<span>.</span>
        </button>

        <div className="nav-links">
          <button
            className={page === 'discover' ? 'active' : ''}
            onClick={() => navTo('discover')}
          >
            Discover
          </button>

          <button
            className={page === 'explore' ? 'active' : ''}
            onClick={() => navTo('explore')}
          >
            Explore
          </button>

          <button
            className={page === 'crews' ? 'active' : ''}
            onClick={() => navTo('crews')}
          >
            Crews
          </button>

          <button
            className={page === 'weekends' ? 'active' : ''}
            onClick={() => navTo('weekends')}
          >
            My Weekends
          </button>
        </div>

        <button className="avatar" onClick={() => navTo('weekends')}>
          JY
        </button>
      </nav>

      <main>
        {page === 'discover' && (
          <>
            <section className="hero">
              <div className="eyebrow">HONG KONG · THIS WEEKEND</div>

              <h1>
                Your weekend,
                <br />
                <em>figured out.</em>
              </h1>

              <p className="subtitle">
                Tell us what you're in the mood for. We'll find the places,
                check the weather, and build a plan that actually fits.
              </p>

              <div className="weather">
                <div className="weather-icon">🌦️</div>
                <div>
                  <strong>Saturday · 27°C</strong>
                  <span>Light rain in the afternoon</span>
                </div>
              </div>
            </section>

            <section className="planner">
              <div className="planner-header">
                <span>01</span>
                <h2>What's your mood?</h2>
              </div>

              <div className="chips">
                {moods.map(([icon, value]) => (
                  <button
                    key={value}
                    className={mood === value ? 'chip selected' : 'chip'}
                    onClick={() => setMood(value)}
                  >
                    {icon} {value}
                  </button>
                ))}
              </div>

              <div className="divider" />

              <div className="two-columns">
                <div>
                  <div className="planner-header small">
                    <span>02</span>
                    <h2>Your budget</h2>
                  </div>

                  <div className="chips compact">
                    {budgets.map((item) => (
                      <button
                        key={item}
                        className={budget === item ? 'chip selected' : 'chip'}
                        onClick={() => setBudget(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="planner-header small">
                    <span>03</span>
                    <h2>Who's coming?</h2>
                  </div>

                  <div className="chips compact">
                    {companies.map((item) => (
                      <button
                        key={item}
                        className={company === item ? 'chip selected' : 'chip'}
                        onClick={() => setCompany(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button className="generate" onClick={handlePlan}>
                <span>✦</span>
                Plan My Weekend
                <span>→</span>
              </button>

              <p className="hint">
                Personalized using your preferences, local weather and budget.
              </p>
            </section>

            {!planned && (
              <section className="preview">
                <div>
                  <span className="section-number">CURATED FOR YOU</span>
                  <h2>
                    Less searching.
                    <br />
                    More going.
                  </h2>
                </div>

                {activities.slice(0, 2).map((event) => (
                  <div className="mini-card" key={event.id}>
                    <div className="match">{event.baseMatch}% MATCH</div>
                    <div className={`card-image ${event.tone}`}>
                      {event.emoji}
                    </div>
                    <div className="card-content">
                      <span>
                        {event.location.toUpperCase()} · {event.day.toUpperCase()}
                      </span>
                      <h3>{event.shortTitle}</h3>
                      <p>
                        {event.weather} · {event.duration} ·{' '}
                        {event.price === 0 ? 'Free' : `~HK$${event.price}`}
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {planned && (
              <section className="results" ref={resultsRef}>
                <div className="results-top">
                  <div>
                    <span className="section-number">✦ YOUR WEEKEND</span>
                    <h2>Your weekend is ready.</h2>
                    <p>
                      Built around <strong>{mood}</strong>,{' '}
                      <strong>{budget}</strong> and going with{' '}
                      <strong>{company}</strong>.
                    </p>
                  </div>

                  <button
                    className="edit-preferences"
                    onClick={() => {
                      setPlanned(false)
                      window.scrollTo({ top: 500, behavior: 'smooth' })
                    }}
                  >
                    ← Edit preferences
                  </button>
                </div>

                <div className="recommendation-grid">
                  {recommendations.map((event) => (
                    <article className="recommendation-card" key={event.id}>
                      <div className={`recommendation-image ${event.tone}`}>
                        <span className="big-emoji">{event.emoji}</span>
                        <div className="recommendation-match">
                          {event.match}% MATCH
                        </div>
                      </div>

                      <div className="recommendation-body">
                        <div className="event-meta">
                          {event.category.toUpperCase()} ·{' '}
                          {event.location.toUpperCase()}
                        </div>

                        <h3>{event.title}</h3>

                        <div className="event-info">
                          <span>◷ {event.day} · {event.time}</span>
                          <span>⌛ {event.duration}</span>
                          <span>
                            {event.price === 0 ? 'FREE' : `HK$${event.price}`}
                          </span>
                        </div>

                        <div className="why">
                          <span>WHY THIS FITS YOU</span>
                          <p>
                            {event.tags.includes(mood)
                              ? `You selected ${mood}, and this activity closely matches that interest. `
                              : `This adds some variety to your selected ${mood} mood. `}
                            {event.price <= budgetLimit
                              ? `It fits your ${budget} budget. `
                              : ''}
                            {event.weather === 'Indoor'
                              ? "It's also mostly indoors, making it a strong choice for Saturday's expected rain."
                              : event.description}
                          </p>
                        </div>

                        <div className="card-actions">
                          <button
                            className="view-plan"
                            onClick={() => setSelectedPlan(event)}
                          >
                            View Plan →
                          </button>

                          <button
                            className={`save-button ${
                              saved.includes(event.id) ? 'saved' : ''
                            }`}
                            onClick={() => toggleSave(event.id)}
                          >
                            {saved.includes(event.id) ? '♥' : '♡'}
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="ai-note">
                  <span>✦</span>
                  <div>
                    <strong>How were these picked?</strong>
                    <p>
                      WEEKENDLY considers your interests, budget, group type and
                      expected weather conditions to rank activities that fit
                      your weekend.
                    </p>
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {page === 'explore' && (
          <section className="inner-page">
            <div className="page-heading">
              <span className="section-number">EXPLORE HONG KONG</span>
              <h1>Find something worth leaving home for.</h1>
              <p>
                Browse exhibitions, markets, music, outdoor escapes and slower
                weekend plans.
              </p>
            </div>

            <div className="filter-row">
              <button className="filter-active">All</button>
              <button>Arts</button>
              <button>Outdoors</button>
              <button>Music</button>
              <button>Markets</button>
              <button>Chill</button>
            </div>

            <div className="explore-grid">
              {activities.map((event) => (
                <article
                  className="explore-card"
                  key={event.id}
                  onClick={() => setSelectedPlan(event)}
                >
                  <div className={`explore-image ${event.tone}`}>
                    <span>{event.emoji}</span>
                    <button
                      className="floating-save"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleSave(event.id)
                      }}
                    >
                      {saved.includes(event.id) ? '♥' : '♡'}
                    </button>
                  </div>

                  <div className="explore-content">
                    <span>
                      {event.location.toUpperCase()} · {event.day.toUpperCase()}
                    </span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <div>
                      {event.time} ·{' '}
                      {event.price === 0 ? 'Free' : `HK$${event.price}`}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'crews' && (
          <section className="inner-page crews-page">
            <div className="page-heading split-heading">
              <div>
                <span className="section-number">GO TOGETHER</span>
                <h1>Plans are better with people.</h1>
                <p>
                  Join a small crew around an activity you already want to do.
                </p>
              </div>

              <button
                className="primary-small"
                onClick={() => showToast('Crew creation prototype opened')}
              >
                + Create a Crew
              </button>
            </div>

            <div className="crew-grid">
              {crewData.map((crew) => (
                <article className="crew-card" key={crew.id}>
                  <div className="crew-top">
                    <span>OPEN CREW</span>
                    <strong>
                      {crew.members}/{crew.capacity}
                    </strong>
                  </div>

                  <h3>{crew.name}</h3>
                  <p>{crew.activity}</p>

                  <div className="crew-time">{crew.time}</div>

                  <div className="crew-tags">
                    {crew.interests.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="crew-bottom">
                    <div className="people-avatars">
                      <span>JL</span>
                      <span>AM</span>
                      <span>KT</span>
                    </div>

                    <button
                      onClick={() => {
                        setJoinedCrew(true)
                        showToast(`Joined ${crew.name}`)
                      }}
                    >
                      {joinedCrew ? 'Joined ✓' : 'Join Crew →'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'weekends' && (
          <section className="inner-page">
            <div className="page-heading">
              <span className="section-number">MY WEEKENDS</span>
              <h1>Places become memories.</h1>
              <p>
                Keep the plans you saved, the places you went and the guides
                you want to share.
              </p>
            </div>

            {activePlan && (
              <div className="active-trip">
                <div>
                  <span>ACTIVE PLAN</span>
                  <h2>{activePlan.title}</h2>
                  <p>
                    {activePlan.day} · {activePlan.time} · {activePlan.location}
                  </p>
                </div>

                <button onClick={() => setCheckinModal(true)}>
                  ✓ Check In
                </button>
              </div>
            )}

            <div className="profile-stats">
              <div>
                <strong>{saved.length}</strong>
                <span>Saved Plans</span>
              </div>
              <div>
                <strong>{guide ? 1 : 0}</strong>
                <span>Places Visited</span>
              </div>
              <div>
                <strong>{joinedCrew ? 1 : 0}</strong>
                <span>Crews Joined</span>
              </div>
            </div>

            <div className="weekend-columns">
              <div>
                <div className="subheading">
                  <span>SAVED</span>
                  <h2>Want to go</h2>
                </div>

                <div className="saved-list">
                  {saved.length === 0 && (
                    <div className="empty-state">
                      <span>♡</span>
                      <p>
                        Save an activity from Discover or Explore and it will
                        appear here.
                      </p>
                    </div>
                  )}

                  {activities
                    .filter((event) => saved.includes(event.id))
                    .map((event) => (
                      <button
                        className="saved-item"
                        key={event.id}
                        onClick={() => setSelectedPlan(event)}
                      >
                        <span className={`saved-icon ${event.tone}`}>
                          {event.emoji}
                        </span>
                        <span>
                          <strong>{event.title}</strong>
                          <small>
                            {event.location} · {event.day}
                          </small>
                        </span>
                        <b>→</b>
                      </button>
                    ))}
                </div>
              </div>

              <div>
                <div className="subheading">
                  <span>WEEKEND MAP</span>
                  <h2>Your city story</h2>
                </div>

                <div className="fake-map">
                  <div className="map-road road-one" />
                  <div className="map-road road-two" />
                  <div className="map-water" />
                  <span className="map-pin pin-one">●</span>
                  <span className="map-pin pin-two">●</span>
                  <div className="map-label">HONG KONG</div>
                </div>
              </div>
            </div>

            {guide && (
              <section className="guide-section">
                <div className="subheading">
                  <span>YOUR WEEKEND GUIDE</span>
                  <h2>Ready to share</h2>
                </div>

                <article className="guide-card">
                  <div className={`guide-visual ${guide.activity.tone}`}>
                    <span>{guide.activity.emoji}</span>
                  </div>

                  <div className="guide-copy">
                    <span>
                      {guide.activity.location.toUpperCase()} · WEEKEND NOTE
                    </span>

                    <h2>{guide.activity.title}</h2>

                    <div className="stars">
                      {'★'.repeat(guide.rating)}
                      {'☆'.repeat(5 - guide.rating)}
                    </div>

                    <p>{guide.note}</p>

                    <div className="guide-meta">
                      <span>💰 HK${guide.activity.price}</span>
                      <span>⏱ {guide.activity.duration}</span>
                      <span>👥 {company}</span>
                    </div>

                    <button
                      onClick={() =>
                        showToast('Shareable Weekend Guide generated')
                      }
                    >
                      ↗ Share Guide
                    </button>
                  </div>
                </article>
              </section>
            )}
          </section>
        )}
      </main>

      {selectedPlan && (
        <div className="plan-overlay">
          <div className="plan-modal">
            <div className="plan-modal-top">
              <button
                className="close-plan"
                onClick={() => setSelectedPlan(null)}
              >
                ← Back
              </button>

              <span className="plan-label">✦ AI WEEKEND PLAN</span>
            </div>

            <div className="plan-title-area">
              <div>
                <span className="plan-location">
                  {selectedPlan.location.toUpperCase()} ·{' '}
                  {selectedPlan.day.toUpperCase()}
                </span>

                <h2>{selectedPlan.title}</h2>

                <p>{selectedPlan.description}</p>
              </div>

              <div className="plan-score">
                <strong>
                  {selectedPlan.match || selectedPlan.baseMatch}%
                </strong>
                <span>MATCH</span>
              </div>
            </div>

            <div className="plan-summary">
              <div>
                <span>TIME</span>
                <strong>{selectedPlan.duration}</strong>
              </div>

              <div>
                <span>BUDGET</span>
                <strong>
                  {selectedPlan.price === 0
                    ? 'Free'
                    : `~HK$${selectedPlan.price}`}
                </strong>
              </div>

              <div>
                <span>WEATHER</span>
                <strong>{selectedPlan.weather}</strong>
              </div>

              <div>
                <span>BEST FOR</span>
                <strong>{company}</strong>
              </div>
            </div>

            <div className="route-section">
              <div className="route-heading">
                <span>YOUR ROUTE</span>
                <p>{selectedPlan.day} plan</p>
              </div>

              <div className="timeline">
                {selectedPlan.route.map((stop, index) => (
                  <div className="timeline-item" key={`${stop.time}-${stop.title}`}>
                    <div className="timeline-time">{stop.time}</div>

                    <div
                      className={`timeline-line ${
                        index === selectedPlan.route.length - 1 ? 'last' : ''
                      }`}
                    >
                      <div
                        className={`timeline-dot ${
                          index === 1 ? 'active' : ''
                        }`}
                      />
                    </div>

                    <div className="timeline-content">
                      <div className="timeline-icon">{stop.icon}</div>

                      <div>
                        <span>{stop.type}</span>
                        <h3>{stop.title}</h3>
                        <p>{stop.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="plan-footer">
              <div className="people-going">
                <div className="people-avatars">
                  <span>JL</span>
                  <span>AM</span>
                  <span>+6</span>
                </div>

                <p>
                  <strong>8 people</strong>
                  interested in this plan
                </p>
              </div>

              <div className="plan-buttons">
                <button
                  className="crew-button"
                  onClick={() => setCrewModal(true)}
                >
                  + Join a Crew
                </button>

                <button
                  className="start-button"
                  onClick={() => startPlan(selectedPlan)}
                >
                  Start This Plan →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {crewModal && (
        <div className="small-overlay">
          <div className="small-modal">
            <button
              className="modal-x"
              onClick={() => setCrewModal(false)}
            >
              ×
            </button>

            <span className="modal-kicker">GO TOGETHER</span>
            <h2>Join the Saturday Crew?</h2>
            <p>
              Meet a small group going to the same plan. Everyone can see the
              activity, time and estimated budget before joining.
            </p>

            <div className="crew-preview">
              <div className="people-avatars">
                <span>JL</span>
                <span>AM</span>
                <span>KT</span>
              </div>
              <div>
                <strong>3 / 5 people</strong>
                <span>Art · Coffee · Photography</span>
              </div>
            </div>

            <button
              className="modal-primary"
              onClick={() => {
                setJoinedCrew(true)
                setCrewModal(false)
                showToast('You joined the crew')
              }}
            >
              Join Crew →
            </button>
          </div>
        </div>
      )}

      {checkinModal && (
        <div className="small-overlay">
          <div className="small-modal checkin-modal">
            <button
              className="modal-x"
              onClick={() => setCheckinModal(false)}
            >
              ×
            </button>

            <span className="modal-kicker">WEEKEND CHECK-IN</span>
            <h2>How was it?</h2>
            <p>
              Add a quick memory. WEEKENDLY will turn it into a shareable
              mini-guide.
            </p>

            <div className="rating-row">
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  key={number}
                  className={number <= rating ? 'rating-active' : ''}
                  onClick={() => setRating(number)}
                >
                  ★
                </button>
              ))}
            </div>

            <textarea
              placeholder="What should other people know? e.g. Go around 4 PM — the waterfront is great before sunset."
              value={checkinText}
              onChange={(e) => setCheckinText(e.target.value)}
            />

            <div className="quick-tags">
              <button
                onClick={() =>
                  setCheckinText('Worth it — I would recommend this plan.')
                }
              >
                Worth it
              </button>
              <button
                onClick={() =>
                  setCheckinText(
                    'Great with friends and easy to do as a small group.',
                  )
                }
              >
                Good for friends
              </button>
              <button
                onClick={() =>
                  setCheckinText(
                    'Budget friendly and easy to fit into an afternoon.',
                  )
                }
              >
                Budget friendly
              </button>
            </div>

            <button className="modal-primary" onClick={completeCheckin}>
              ✦ Generate My Weekend Guide
            </button>
          </div>
        </div>
      )}

      {activePlan && page !== 'weekends' && (
        <button
          className="floating-trip"
          onClick={() => navTo('weekends')}
        >
          <span>ACTIVE PLAN</span>
          {activePlan.emoji} {activePlan.shortTitle}
          <b>→</b>
        </button>
      )}
    </div>
  )
}

export default App