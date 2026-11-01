# WEEKENDLY

A web-based prototype that helps people discover and plan weekend activities in Hong Kong.

**Live website:** https://weekendly-taupe.vercel.app  
**Repository:** https://github.com/Cshushs1/weekendly

## Project Overview

WEEKENDLY explores how an interactive website can make weekend planning easier. Users choose their interests, budget and companions, then explore suggested activities and sample itineraries.

The project focuses on reducing the effort of comparing options and turning an activity idea into a manageable plan.

## Target Users

Students and young adults in Hong Kong who want to discover places, spend time with friends or plan a relaxed weekend within their budget.

## Main Features

- **Personalized suggestions:** Rank sample activities using selected interests, budget and group type.
- **Surprise Me:** Randomly select an activity within the chosen budget.
- **Activity details:** View locations, estimated costs, durations and sample itineraries.
- **Editable itineraries:** Remove individual stops before starting a plan.
- **Saved activities:** Bookmark activities and revisit them in My Weekends.
- **Weekend check-in:** Add a rating and a short note to create a weekend memory.
- **Demo profile:** Enter a display name, view initials in the navigation and sign out.
- **Local persistence:** Keep saved activities, the active plan and the latest weekend memory in the browser.

## User Flow

1. Select an interest, budget and companion type.
2. Generate recommendations or try Surprise Me.
3. Open a plan and review its itinerary.
4. Remove unwanted stops, save an activity or start a plan.
5. Visit My Weekends to check in and record a memory.

## Interaction and UX Design

The interface uses selectable preference chips, activity cards, itinerary timelines and action notifications to provide clear feedback.

Users can explore without creating an account. The demo profile requires only a display name, keeping the classroom demonstration simple.

Saved activities and plans remain available after refreshing the page when browser storage is supported.

## Prototype Limitations

This project is a course prototype rather than a production travel service.

- Activities, prices, schedules and weather are sample data and should not be used as verified travel information.
- Match percentages come from local scoring rules, not a trained AI recommendation model.
- The map is a visual placeholder and does not provide real geographic navigation.
- Removing itinerary stops does not automatically recalculate times or costs.
- Demo profiles are not authenticated accounts. No passwords are collected.
- Data is stored in the current browser, is shared between demo profiles on that device and does not sync across devices.
- Crew membership and sharing features are demonstrations rather than live social services.
- Only the latest check-in memory is retained.

## Technology

- React
- Vite
- JavaScript and JSX
- CSS
- Browser localStorage
- Vercel hosting

## Run Locally

Install Node.js and npm, then run:

    git clone https://github.com/Cshushs1/weekendly.git
    cd weekendly
    npm install
    npm run dev

Open the local address printed in the terminal.

To create a production build:

    npm run build

To preview the build:

    npm run preview

## Main Project Files

- `src/App.jsx` — Application interface, sample activity data and interaction logic.
- `src/App.css` — Application styling and responsive layouts.
- `src/index.css` — Global styles.
- `src/main.jsx` — React entry point.
- `public/` — Static assets.

## Future Improvements

- Replace the placeholder map with real geographic data.
- Connect verified activity listings and live weather.
- Support itinerary reordering and automatic time and cost updates.
- Add authenticated accounts and cloud storage.
- Enable real crew invitations and shareable plans.
- Store multiple weekend memories.

## AI Assistance

OpenAI Codex assisted with feature ideation, code generation, debugging and documentation during development. AI assistance is disclosed here for transparency.

## Author

GitHub: [Cshushs1](https://github.com/Cshushs1)

Created as a course project exploring interactive web design and user experience.
