# Changelog

## 2026-06-29

- Kept the mobile header visible over the navbar drawer, hid the duplicate mobile header Login button, and added a top-to-bottom close animation with consistent logo-orange actions.
- Updated the responsive mobile navbar with a visible brand/action header, logo-color accents, and a bottom-to-top sheet animation.
- Added a responsive mobile header navbar component with search, trip category rows, login card, contact CTAs, and social shortcuts.
- Added destination, departure city, and departure date fields beside the mobile number on the login OTP form.
- Added a holiday hero destination search with scope-aware suggestions, smooth package scrolling, and animated typewriter placeholder text.

## 2026-06-27

- Switched the holiday hero "Explore the world" tagline to the existing `meow-script-regular` font class and loaded Meow Script through the shared Google Fonts link.
- Fixed the mobile login top bar to the top with a white background and orange text color.
- Updated the mobile login menu button to use the requested orange background and off-white icon color.
- Made the login page responsive with a mobile full-image background, top logo/actions, rounded OTP card, and mobile-safe secure badges.
- Added a reference-inspired split login page at `/login` with a travel hero panel, phone OTP form, and header Login navigation.
- Removed an unused package-card icon import that blocked lint/build verification.
- Started the preloader hide timer only after DotLottie reports ready/rendered so each preloader run remains visible for at least two seconds.
- Added the full-screen DotLottie preloader to client-side page transitions before rendering the selected page.
- Switched the preloader animation to `public/lottie/fly.lottie` and matched the display delay to its shorter loop.
- Restored the website after a preloader-only first stage and matched the delay to one full DotLottie loop before mounting page content.
- Temporarily switched the app root to preloader-only mode so the DotLottie animation can be tested without loading the website.
- Moved the DotLottie preloader animation into `public/lottie` and load it same-origin to avoid hosted animation CORS failures.
- Restored a fixed-size full-screen wrapper around the DotLottie preloader so the canvas has visible dimensions without adding a custom spinner.
- Removed the custom CSS fallback spinner so the preloader displays only the provided DotLottie animation.
- Restored the preloader's full-screen overlay wrapper and made its hide scheduling StrictMode-safe.
- Fixed the DotLottie app preloader so it waits for player render/load readiness and shows a fallback status while the hosted animation initializes.
- Added a global DotLottie app preloader using the provided hosted animation.
- Redesigned the holiday package card as a hybrid of the reference layouts with image overlays, route chips, carousel controls, trip highlights, savings badge, call action, and View Itinerary CTA.
- Added a reusable holiday package card with discount badge, gallery/save actions, location, price, rating, duration, guest count, and Explore More CTA.
- Replaced the Packages By Duration image tiles with the new responsive package card grid.

## 2026-06-26

- Updated the holiday hero supporting copy to describe the custom itinerary maker experience.
- Gave each holiday hero typewriter destination its own tradition-inspired text and cursor color.
- Added an orange typewriter destination animation to the holiday hero headline for Bali, Thailand, Vietnam, Bhutan, Spiti, and Ladakh.
- Rebuilt the holiday hero with the `HBG1.png` adventure background and matching left-side travel copy/CTA layout.
- Added a timed holiday trip-planning popup form with a reference-style promo image panel, travel lead fields, and session dismissal.
- Moved the holiday hero animation keyframes into Tailwind theme utilities and removed the component-level style block/inline animation styles.
- Completed TravelBook Phase 1 baseline audit with desktop, tablet, mobile screenshots, source asset usage check, visual issue list, and selector map.

## 2026-06-25

- Added a detailed 10-phase TravelBook realistic virtual-book implementation plan.
- Rebuilt the TravelBook base as a virtual CSS book shell with cover, paper, crease, page stacks, and strap details instead of using a book image asset.
- Added GSAP-powered realistic TravelBook page-turn animation with auto-advance, manual controls, and two destinations shown across the left and right pages.
- Split the TravelBook into smaller destination data, page, and controls components for easier book animation composition.
- Reduced the desktop `TravelBook` visual size so the book fits the hero composition more comfortably.
- Lightened the holiday hero map overlays so the `bookAnimation` background remains visible.
- Swapped the holiday hero background to the `public/bookAnimation/BG1.png` travel-map artwork.
- Added a cinematic holiday `TravelBook` component with an open-book destination image spread, delayed side tabs, stamp details, and responsive load/hover animation.
- Reworked the holiday hero content area so the TravelBook appears beside the storytelling headline and journey CTAs.
- Expanded the main navigation key type to cover the existing Blogs and Contact header entries so strict TypeScript builds pass.

## 2026-06-24

- Redesigned the holiday hero section into a cinematic luxury travel experience with premium copy, dual CTAs, a glass search card, trust indicators, and subtle motion.
- Strengthened the orange background and shadow on holiday section title tabs.
- Restyled holiday section titles as orange angled tabs matching the Holidays reference.
- Centered the hero copy block within the hero section.
- Fixed the hero section `holidayScope` prop usage so strict TypeScript builds pass.
- Replaced the hero search row with a rounded destination/package search pill and outlined Explore button.
- Moved the hero glass border from the main wrapper onto the tab strip while keeping the booking panel glass treatment.
- Added a glass-style border around the main hero content area.
- Added the hero booking-panel destination search field in place of the search placeholder.
- Converted the hero destination block into a searchable destination input with page-specific options.
- Shortened the hero travel-type tab strip so it no longer spans the full booking panel width.
- Tightened the hero booking panel proportions to match the compact reference card.
- Restored the hero booking panel to the compact tabbed fields layout shown in the reference.
- Replaced the hero booking fields with a single destination search bar and separated the travel-type tabs from the search card.
- Refined holiday hero alignment so the headline, CTA, and floating search card match the reference layout more closely.
- Reworked the holiday hero section into a full-background travel landing layout with headline, CTA, tabbed search card, and trust badges.
- Removed text overlays from the first holiday noticeboard so the local poster image displays cleanly.
- Swapped the first holiday noticeboard to use the local Bali Kachak dance image asset.
- Aligned the third-section category panel beside the Instagram post cards on tablet and desktop layouts.
- Extracted the Stories Behind The Journeys Instagram section into a reusable holiday homepage component.

## 2026-06-23

- Fixed the third-section mobile category rail so destination pills stay horizontally scrollable instead of clipping.
- Added visible tablet/mobile left-right controls for the third-section category group.
- Changed third-section tablet/mobile layout so categories sit above horizontally scrollable story cards.
- Improved third-section responsive behavior for category controls, headings, and Instagram video cards across device sizes.
- Extracted the limited-offer noticeboard into a reusable component.
- Reused the limited-offer noticeboard above the Packages By Duration block.
- Added a responsive limited-offer noticeboard panel at the start of the second homepage section.
- Aligned third-section Instagram post cards with the category sidebar row.
- Closed the Holidays International/Domestic dropdown immediately after selecting either option, including focused option clicks.
- Added dummy Flight and Hotel pages with header navigation routes.
- Refactored holiday package routing/content into shared data and type modules, removing prop-only International/Domestic wrapper pages.
- Added separate International and Domestic holiday pages that reuse the same homepage layout with page-specific content.
- Reworked the third homepage section into a destination-category rail with Instagram video cards and limited second-section destinations to the current working countries.
- Reduced the second-section destination and package card sizing on mobile screens.
- Made the footer INDIKOSH wordmark responsive with a viewport-based clamped font size.

## 2026-06-22

- Rebuilt the third homepage section as a black Instagram-style traveller stories carousel with review badges.
- Removed the hero destination bar's scroll-docked fixed state so it stays inside the hero section.
- Moved hero category image data into a separate `heroCategoryImages.ts` module.
- Replaced the second homepage section with Trending Destinations, Visa Free Destinations, and Packages By Duration layouts.
- Added the Flaticon thin rounded stylesheet so `fi-tr-*` header icons render correctly.
- Hid the header My Bookings button behind an authenticated-state prop so it only appears after login.
- Strengthened the sticky destination tab hover/focus state with a visible orange fill and white text.
- Connected the Holidays International/Domestic menu to the hero category bar and added a separate domestic destination set.
- Updated the sticky destination bar to match the header's rounded angled-tab strip while keeping normal hero category photo backgrounds.
- Added destination-specific photo backgrounds to the hero category buttons for Bali/Indonesia, Dubai, Singapore, Malaysia, Sri Lanka, Thailand, and Vietnam.
- Removed the hero headline and call-to-action content block from the holiday homepage.
- Reworked the hero holiday category bar into a compact segmented destination selector with updated docked and responsive states.

## 2026-06-20

- Added an animated Tours dropdown in the homepage header with International and Domestic pill options matching the provided angled-tab reference.
- Changed the Tours dropdown to open on hover/focus with a tighter aligned pill layout and smooth CSS enter/exit animation.
- Kept the active Tours tab saturated on hover/focus so opening the dropdown no longer fades the nav button.
- Added a visible hover/focus colour treatment for International and Domestic dropdown options.
- Strengthened the Tours dropdown option hover state with an orange fill and white text for clearer feedback.
- Restored the Holidays International/Domestic menu to use the dropdown styling instead of rendering inline text.
- Added top padding to the Holidays dropdown container so the menu sits with clearer spacing below the nav tab.
- Increased the Holidays dropdown top padding and switched the hero background to the local HeroBG image asset.
- Added a rounded hero category strip with circular destination thumbnails, labels, hover states, and a green Customized accent.
- Moved the hero category strip to the bottom of the hero section with responsive spacing.
- Replaced the hero category strip items with seven country options for Indonesia, UAE, Singapore, Malaysia, Sri Lanka, Thailand, and Vietnam.
- Added a scrolled state for the country strip that docks below the header as a text-only rounded bar after the hero is crossed.

## 2026-06-19

- Updated the header scroll animation so the initial pill is capped at 1280px, then the scrolled background expands full-width while the header content remains centered.
- Replaced header Material Symbols with Flaticon nav glyphs and React Icons for booking/menu controls.
- Restyled the desktop header nav as a compact segmented tab strip with an angled active button shape.
- Adjusted the header nav tabs so first/last items keep one-sided rounded ends and middle items use angled slash edges.
