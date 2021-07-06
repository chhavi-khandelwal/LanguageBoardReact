# Language Board React App

Language board App allows adding/removing languages to the dashboard with statistics

## Tech Stack

- React (UI Library)
- React Select (UI Library)
- React Form hook(UI Library)
- Zustand (State management)
- Typescript (Language)
- Styled Compoents (Styling)
- Jest (Test runner)
- React Testing Library (Testing)

## Architecture

- assets
  - images
  - styles -> common styled components
- components -> shared/common components
- containers -> main containers
- store -> stores/caches data via zustand, store contains static data file which is used in select box
- utils -> utilities for helper fns
- App.test.tsx -> test file

## Brief

App is divided in to 2 major sections: `SideBar` and `LanguageGround`
SideBard is static Data
LanguageGround shows the `LanguageBox` added through `Add language` btn
`Add language` btn opens modal with select options of languages from satatic data file in store
On selection and submission, form sets the language in the store and localstorage.
Languages selected, grays out and can not be selected again.
Zustand store provides easy access to localstorage(Reason, it is used) + it isn't boilerplatey or opinionated
Reactivity of Zustand allows to show the LanguageBox as soon as form is submitted. If form is submitted empty, error is shown.
On hover over `LanguageBox`, delete btn is shown to delet the language.
On refresh, app state remains intact as data is synced via localstorage.
`tests` -> tests for modal, add language, remove language has been added
App supports `Responsive design for mobile`
languageColors gives colors for progress bar
`theme.ts` to support common theme through out the app

## How to run

yarn install;
yarn build;
yarn start;

## Tests

yarn test

## further improvements

- shared components can be moved to separate repo
- avoid zustand for localstorage
- test cases for multiple slection/disabled options and components
- font files to be added
- random number generation for data
- currently does not support data fetching from BE
