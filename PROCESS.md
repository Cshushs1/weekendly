# WEEKENDLY — Development Process

## 1. Initial Idea

WEEKENDLY began as a weekend-planning prototype for students and young adults in Hong Kong.

The aim was to reduce the effort of comparing activities, budgets and companion preferences. Users should be able to choose their preferences, receive suggestions and decide what to do next.

The central interaction loop is:

**Select preferences → Review recommendations → Adjust or save a plan → Record a weekend memory**

## 2. Starting Point

The starting project used React and Vite. It already contained sample activities, preference controls, recommendation cards, itinerary views, crew demonstrations and a weekend check-in interface.

This iteration focused on making selected interactions more meaningful and improving the continuity between browsing, planning and returning to the website.

## 3. Changes and Design Decisions

### Browser Persistence

Saved activities, the active plan and the latest weekend memory were connected to localStorage.

**Reason:** Users should not lose their saved plans simply because they refresh the page.

Storage reads include fallback handling for invalid JSON. Storage write failures display a notice.

**Limitation:** Data remains in the current browser and does not synchronize across devices.

### Surprise Me

The original Surprise Me option affected recommendation scoring but did not produce a genuinely random result.

It was changed to randomly select an activity within the selected budget. When more than one eligible activity is available, it avoids selecting the immediately previous random result.

**Reason:** The interaction should create a noticeable and meaningful change rather than only changing the appearance of a selected preference.

### Removing Itinerary Stops

A Remove stop button was added to itinerary entries.

The application prevents users from deleting the final remaining stop and displays a notice after a route has been edited.

**Reason:** Users should be able to adapt a suggested plan instead of accepting every stop.

**Limitation:** Times and costs still come from the original itinerary and are not automatically recalculated.

### Demo Profile

The fixed initials in the navigation were replaced with a demo-profile interaction.

Users can enter a display name, see their initials, open their profile and sign out. The interface explicitly states that this is a classroom demonstration rather than a real authenticated account.

**Reason:** This demonstrates the interaction without introducing a backend account system or asking users for passwords.

The profile dialog includes labelled controls, keyboard focus handling and an Escape-to-close action.

### Real Map

The decorative map was replaced with an embedded OpenStreetMap map of Hong Kong.

Users can pan, zoom and open a larger map.

**Reason:** A geographic browsing feature should display real geography rather than imply that a decorative illustration is a functioning map.

The heading was changed to Explore Hong Kong because the map does not display personal travel history.

### Interaction Styling

Additional CSS was introduced for visible keyboard focus, larger touch targets, selected preferences, button feedback and mobile layouts.

Reduced-motion preferences are respected by the added CSS.

**Reason:** Feedback and controls should remain understandable across input methods and screen sizes.

### Compilation Correction

During editing, a missing closing brace was identified at the end of the demo-profile component and corrected.

**Lesson:** Small syntax errors can prevent an updated version from deploying. Deployment status and the running website should both be checked after changes.

## 4. AI Tools and Their Use

OpenAI Codex assisted with:

- Reviewing the existing source code.
- Suggesting interaction improvements.
- Generating and revising React and CSS code.
- Explaining manual changes in GitHub.
- Identifying a missing closing brace.
- Drafting README and process documentation.

The generated code and documentation required review. Some checks were limited to source inspection or isolated logic checks; these are not equivalent to testing the complete website in a browser.

### Suggestion Adopted

I adopted the suggestion to preserve saved activities and the active plan using browser storage.

This supports the planning task by allowing users to return to information after refreshing the page.

### Suggestion Modified or Rejected

A real authentication system using Supabase was considered. I changed the scope to a clearly labelled demo profile.

This kept the project manageable for the assignment and avoided presenting an incomplete backend account system as a finished feature.

Broader ideas, such as collaborative voting and full itinerary recalculation, were left for future development.

## 5. User Test

Example User Feedback：

What worked well

“Choosing my interests and budget first made it easier to get started. I didn’t have to browse everything.”

“The itinerary showed the order of activities clearly. Being able to remove a stop made the plan feel more flexible.”

What could improve

“After saving an activity, I wasn’t immediately sure where to find it. A ‘View saved plans’ link would help.”

“I wanted to see each activity marked on the map so I could judge how far apart the places were.”

Possible Next Steps

Add a shortcut to My Weekends after saving an activity, and add location markers to the map. These changes would help users move from choosing an activity to understanding their plan.

## 6. Verification Record

Complete the result column with actual outcomes. Use “Not tested” where appropriate.

| Check | Expected behavior | Actual result |
| --- | --- | --- |
| Fresh local setup | README commands install dependencies and open the app | [result] |
| Preference changes | Recommendation ordering responds to selections | [result] |
| Surprise Me | Result fits the selected budget | [result] |
| Repeated random selection | Immediate repetition is avoided when alternatives exist | [result] |
| Remove a stop | The selected stop disappears | [result] |
| Final remaining stop | Removal is disabled | [result] |
| Save and refresh | Saved activity remains available | [result] |
| Empty demo name | Empty input is not accepted | [result] |
| Demo sign-out | The navigation returns to Sign in | [result] |
| Dialog keyboard use | Focus remains in the dialog; Escape closes it | [result] |
| Storage unavailable | A notice appears instead of silently claiming success | [result] |
| Map unavailable | Other core planning interactions remain usable | [result] |
| Mobile layout | Main controls remain visible and usable | [result] |
| Logged-out repository access | The public repository opens without a GitHub account | [result] |

A successful deployment is evidence that the hosting build completed. It does not prove that every interaction works correctly.

## 7. Known Unfinished Areas

At the time of this iteration:

- Explore category controls do not yet filter activities.
- Standard recommendations may include over-budget alternatives because budget affects ranking rather than acting as a strict filter.
- Crew creation and guide sharing are prototype demonstrations.
- Crew membership uses simplified shared state.
- The map does not show activity markers or calculate routes.
- Edited itineraries do not recalculate duration or cost.
- Only the latest weekend check-in memory is retained.
- Demo profiles share locally stored plans on the same browser.

These limitations are documented rather than presented as completed functionality.

## 8. Credits and Borrowed Materials

- React and Vite provide the application framework and development tooling.
- The project began with a React + Vite starter.
- OpenStreetMap contributors provide the embedded map and geographic data:
  https://www.openstreetmap.org/copyright
- DM Sans and Instrument Serif are loaded through Google Fonts:
  https://fonts.google.com/
- Emoji are rendered by the user's browser and operating system.
- Activity descriptions, prices, schedules and weather are illustrative prototype content rather than a verified event feed.
- AI assistance is described in Section 4.

Before submission, identify the source and permission for any additional images or other borrowed assets that remain in use.

## 9. Development History

The repository commit history records successive changes to the source code and documentation.

Relevant stages include:

1. Initial weekend-planning prototype.
2. Browser persistence, random selection and itinerary editing.
3. Interaction styling improvements.
4. Demo-profile interaction and compilation correction.
5. Replacement of the decorative map.
6. README and process documentation.
7. User-test-driven revision, once completed.

These stages summarize development decisions; the repository history contains the actual commits.

## 10. Reflection

This iteration moved the project toward a clearer connection between user actions and visible outcomes.

The most useful improvements were those that supported the main planning task: keeping saved information, making random selection behave meaningfully and allowing users to remove unwanted itinerary stops.

The next priority is to complete the user test, respond to observed usability issues and verify the main flow from a fresh setup before adding more features.
