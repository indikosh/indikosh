import type { HolidayScope } from '../types/holiday'

export type FeatureDestination = {
  name: string
  eyebrow: string
  image: string
}

export type PackageDestination = {
  name: string
  price: string
  image: string
  layoutClass: string
  location?: string
  originalPrice?: string
  rating?: string
  reviewCount?: string
  discountLabel?: string
}

export type LimitedOfferContent = {
  destination: string
  brandLabel: string
  title: string
  subtitle: string
  dateLabel: string
  badgeLabel: string
  image: string
}

export type DurationKey = 'short' | 'medium' | 'long'

export type DestinationSection = {
  title: string
  destinations: FeatureDestination[]
}

export type SecondSectionContent = {
  offer: LimitedOfferContent
  trending: DestinationSection
  featured: DestinationSection
  packages: Record<DurationKey, PackageDestination[]>
}

export type InstagramPost = {
  title: string
  category: string
  image: string
  videoUrl: string
  caption: string
}

export type StoryContent = {
  description: string
  categories: string[]
  posts: InstagramPost[]
}

export type HolidayPageMeta = {
  title: string
  description: string
  canonicalUrl: string
}

export const HOLIDAY_PATHS: Record<HolidayScope, string> = {
  international: '/holidays/international',
  domestic: '/holidays/domestic',
}

export const HOLIDAY_PAGE_META: Record<HolidayScope, HolidayPageMeta> = {
  international: {
    title: 'International Holiday Packages',
    description:
      'Explore international holiday packages for Singapore, Bali, Thailand, Malaysia, Sri Lanka, Vietnam, Dubai, and more.',
    canonicalUrl: 'https://indikosh.com/holidays/international',
  },
  domestic: {
    title: 'Domestic Holiday Packages',
    description:
      'Explore domestic holiday packages for Kashmir, Himachal, Kerala, Goa, Rajasthan, Uttarakhand, and Andaman.',
    canonicalUrl: 'https://indikosh.com/holidays/domestic',
  },
}

export function getHolidayScopeFromPath(pathname: string): HolidayScope {
  const path = pathname.toLowerCase()

  if (path.includes('/holidays/domestic') || path === '/domestic') {
    return 'domestic'
  }

  return 'international'
}

const DESTINATION_IMAGES: Record<string, string> = {
  Singapore:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBplDMiGw0NkHA2NoGwhSD8ScLP9tl1IQFumpoFjyOZqYBOMQc27-M0WKVE8Lv86ePOo7zmR7TZ3PRKVUlivBsaZi5uxpA9w4VgimeD6BGb11XLfNYtYJ8lLfqTnt8tb3DjDhoY_07EDg7sYtqC_RZMtPcftQABoM8V2mpuixRPnkrY3Vmmz0LHM8eR3b58_zedX4rBtHt559Z1iVwYMyfyjOXQNtyzCQgFR5HTUiVyhP5g8-scC0c0YqijN7D8Wzj6kVV952Lfrv0',
  Bali:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAx1G7bltvQPzCk2rMa2tSJwyQDVP7zz-9QTez2tEPTdapYrg7nYZbAaKkcUkdxyjYoGT8tkzFVn5a2x4SQ4gdgwFr9SihG-5W6t2qSbF3mwSQyph49eishFWoKvsLcwdgdazcNq40em3QoSd3qUw6EYwZuBbCIrtN4TZaY7Cf4iBNjFH0Ak3lxav1OEKw8bOSFTXtbQaWjlj5n1Oi9i5HyyV32ogBis2BZXLSOK1ihBbi5EkEwxs28nIO6DMGifz84YpG63aXdXbg',
  Thailand:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCcDuYTsCKWjxsdJ3E7WowjSYIU9a9eZ4URzu5bUpBQANkod_6bJQDnttFpQ21vUmqi66VgogOi1PeEwN8ii-29kCFYKu6KjuM8FN123iLwlsKTO3vKrUyl4ppT6zc1woxGisWMC2uy9gDsuo-ZAr7jm0mpnfYUCHl05MJeTlXDRKILTFYDY9vM2IxIadmPccAIN5HTSQTuDVPjEhJqYWCwsUAX0SNp1AHtMe5EL75T5K3ektzx_O-3-WA_0GLfK0tCIEePinuDOnA',
  India: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
  Malaysia:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB94KKKF1fKjPmW3dqNdVelbrr5FSEEvv5EPNJ7FAm2lkiP8qW5A9BXn6JinQgrPLZpR6R8Tm3_v4lA0_YQAtMoKTrkZtiJr9AlzWxnTQ471CZQGKDIhAwMDWMYiUxoqzwhmNoXd2C2G6lwT2_WD2NXDE_9M-YQa8qZS75G9aS76AaNiRiwCsDgYJx0-j_DnMxuTY3WDkq27MfbODrCO21MbdQYOh1B2Arupd53d25oTRG9mTZbkheqkvWg-YngbqlgWUwrEEvpjk0',
  'Sri Lanka':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA-BaZkwsvfDpB4jR32HfRz6Z8n8HOcPgv-8ykWV2k6jjvx0qEo3Wfaix0JzbAJSalMY_bmeGbbzGIh2wiIcRMfZCVS2K2mpeubQRjKA28GvHEGmMsv8qcHe-CGxLjWeeG2HaFWCTsAtLEBRfzloTuhJJPBeSRVj4H76PaZ4L5PBgA6y18UuTO78j_VH6ZAn_9nI0ygA_NMWJb-9y8S6tS0Y7IlydidBd-KMTWj728X0sO4YCZ1G_9PV3FBynrR67WXKyhOvSczZCY',
  Vietnam: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
  Dubai:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAUDEPcIqJhn250X4icQKclw49W0_3J3bqwqqDqeJmnoo4B3XIjq5jWMFrCazITCT3broBtY-eR2I2CK6QyyAq6x46tWiKPZ09fA85mSaONc8g8in_pmhZNmKsbLClxz-pVRS_YyBVt8mhdyd2Zct1UIM57p2PXv5mKGNZIOoxc4aGaXxnAHYnBqSiu2noYLKo1uXmv8FoDF7WBT4Gi1h65QsRruYmjIa5bcr_1ySLn24ZaanJ2_iVUjjJjxk5mP_VPl55BRYb4zoQ',
  Kashmir: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
  Himachal: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
  Kerala: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
  Goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
  Rajasthan: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=1000&q=80',
  Uttarakhand: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=1000&q=80',
  Andaman: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80',
}

export const DURATION_TABS: Array<{ label: string; value: DurationKey }> = [
  { label: '3-5 Days', value: 'short' },
  { label: '6-9 Days', value: 'medium' },
  { label: '10+ Days', value: 'long' },
]

export const SECOND_SECTION_CONTENT: Record<HolidayScope, SecondSectionContent> = {
  international: {
    offer: {
      destination: 'Thailand',
      brandLabel: 'Limited Offer',
      title: 'Thailand Group Trip',
      subtitle: 'Koh Phangan Full Moon Party & Koh Samui Fire Show',
      dateLabel: 'Starting from 29th July',
      badgeLabel: 'Exclusive Indikosh Group Journey',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1800&q=85',
    },
    trending: {
      title: 'Trending Destinations',
      destinations: [
        { name: 'Bali', eyebrow: 'Cultural Paradise', image: DESTINATION_IMAGES.Bali },
        { name: 'Singapore', eyebrow: 'City Lights Of', image: DESTINATION_IMAGES.Singapore },
        { name: 'Thailand', eyebrow: 'The Kingdom Of', image: DESTINATION_IMAGES.Thailand },
        { name: 'Dubai', eyebrow: 'City Of Gold', image: DESTINATION_IMAGES.Dubai },
      ],
    },
    featured: {
      title: 'Visa Free Destinations',
      destinations: [
        { name: 'Thailand', eyebrow: 'Tropical Escapes', image: DESTINATION_IMAGES.Thailand },
        { name: 'Malaysia', eyebrow: 'The Hidden Gem Of Asia', image: DESTINATION_IMAGES.Malaysia },
        { name: 'Sri Lanka', eyebrow: 'Island Trails Of', image: DESTINATION_IMAGES['Sri Lanka'] },
        { name: 'Vietnam', eyebrow: 'Scenic Coastlines', image: DESTINATION_IMAGES.Vietnam },
        { name: 'Bali', eyebrow: 'Island Calm Of', image: DESTINATION_IMAGES.Bali },
      ],
    },
    packages: {
      short: [
        { name: 'Thailand', price: 'From \u20b930,400', image: DESTINATION_IMAGES.Thailand, layoutClass: 'lg:col-span-2' },
        { name: 'Singapore', price: 'From \u20b972,551', image: DESTINATION_IMAGES.Singapore, layoutClass: 'lg:col-span-2 lg:row-span-2' },
        { name: 'Bali', price: 'From \u20b943,854', image: DESTINATION_IMAGES.Bali, layoutClass: 'lg:col-span-2' },
        { name: 'Sri Lanka', price: 'From \u20b930,000', image: DESTINATION_IMAGES['Sri Lanka'], layoutClass: 'lg:col-span-1' },
        { name: 'Vietnam', price: 'From \u20b918,500', image: DESTINATION_IMAGES.Vietnam, layoutClass: 'lg:col-span-1' },
        { name: 'Dubai', price: 'From \u20b926,000', image: DESTINATION_IMAGES.Dubai, layoutClass: 'lg:col-span-2' },
      ],
      medium: [
        { name: 'Malaysia', price: 'From \u20b935,500', image: DESTINATION_IMAGES.Malaysia, layoutClass: 'lg:col-span-2' },
        { name: 'Vietnam', price: 'From \u20b946,400', image: DESTINATION_IMAGES.Vietnam, layoutClass: 'lg:col-span-2 lg:row-span-2' },
        { name: 'Dubai', price: 'From \u20b926,000', image: DESTINATION_IMAGES.Dubai, layoutClass: 'lg:col-span-2' },
        { name: 'Singapore', price: 'From \u20b972,551', image: DESTINATION_IMAGES.Singapore, layoutClass: 'lg:col-span-1' },
        { name: 'Thailand', price: 'From \u20b940,200', image: DESTINATION_IMAGES.Thailand, layoutClass: 'lg:col-span-1' },
        { name: 'Sri Lanka', price: 'From \u20b944,000', image: DESTINATION_IMAGES['Sri Lanka'], layoutClass: 'lg:col-span-2' },
      ],
      long: [
        { name: 'Sri Lanka', price: 'From \u20b952,000', image: DESTINATION_IMAGES['Sri Lanka'], layoutClass: 'lg:col-span-2' },
        { name: 'Bali', price: 'From \u20b970,800', image: DESTINATION_IMAGES.Bali, layoutClass: 'lg:col-span-2 lg:row-span-2' },
        { name: 'Vietnam', price: 'From \u20b978,400', image: DESTINATION_IMAGES.Vietnam, layoutClass: 'lg:col-span-2' },
        { name: 'Malaysia', price: 'From \u20b963,900', image: DESTINATION_IMAGES.Malaysia, layoutClass: 'lg:col-span-1' },
        { name: 'Dubai', price: 'From \u20b968,500', image: DESTINATION_IMAGES.Dubai, layoutClass: 'lg:col-span-1' },
        { name: 'Singapore', price: 'From \u20b91,08,000', image: DESTINATION_IMAGES.Singapore, layoutClass: 'lg:col-span-2' },
      ],
    },
  },
  domestic: {
    offer: {
      destination: 'Kashmir',
      brandLabel: 'Limited Offer',
      title: 'Kashmir Winter Escape',
      subtitle: 'Gulmarg Snow Trails & Srinagar Houseboat Stay',
      dateLabel: 'Starting from 12th August',
      badgeLabel: 'Exclusive Indikosh Domestic Journey',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1800&q=85',
    },
    trending: {
      title: 'Trending Domestic Destinations',
      destinations: [
        { name: 'Kashmir', eyebrow: 'Heavenly Valleys', image: DESTINATION_IMAGES.Kashmir },
        { name: 'Himachal', eyebrow: 'Mountain Escapes', image: DESTINATION_IMAGES.Himachal },
        { name: 'Kerala', eyebrow: 'Backwater Calm', image: DESTINATION_IMAGES.Kerala },
        { name: 'Goa', eyebrow: 'Beach Days In', image: DESTINATION_IMAGES.Goa },
        { name: 'Rajasthan', eyebrow: 'Royal Trails Of', image: DESTINATION_IMAGES.Rajasthan },
      ],
    },
    featured: {
      title: 'Popular Domestic Destinations',
      destinations: [
        { name: 'Uttarakhand', eyebrow: 'Himalayan Retreats', image: DESTINATION_IMAGES.Uttarakhand },
        { name: 'Andaman', eyebrow: 'Island Blues Of', image: DESTINATION_IMAGES.Andaman },
        { name: 'Kerala', eyebrow: 'Green Getaways', image: DESTINATION_IMAGES.Kerala },
        { name: 'Goa', eyebrow: 'Sunset Shores', image: DESTINATION_IMAGES.Goa },
        { name: 'Kashmir', eyebrow: 'Snowy Holidays', image: DESTINATION_IMAGES.Kashmir },
      ],
    },
    packages: {
      short: [
        { name: 'Goa', price: 'From \u20b915,500', image: DESTINATION_IMAGES.Goa, layoutClass: 'lg:col-span-2' },
        { name: 'Kerala', price: 'From \u20b922,800', image: DESTINATION_IMAGES.Kerala, layoutClass: 'lg:col-span-2 lg:row-span-2' },
        { name: 'Rajasthan', price: 'From \u20b918,900', image: DESTINATION_IMAGES.Rajasthan, layoutClass: 'lg:col-span-2' },
        { name: 'Uttarakhand', price: 'From \u20b912,500', image: DESTINATION_IMAGES.Uttarakhand, layoutClass: 'lg:col-span-1' },
        { name: 'Himachal', price: 'From \u20b914,000', image: DESTINATION_IMAGES.Himachal, layoutClass: 'lg:col-span-1' },
        { name: 'Andaman', price: 'From \u20b929,500', image: DESTINATION_IMAGES.Andaman, layoutClass: 'lg:col-span-2' },
      ],
      medium: [
        { name: 'Kashmir', price: 'From \u20b928,400', image: DESTINATION_IMAGES.Kashmir, layoutClass: 'lg:col-span-2' },
        { name: 'Rajasthan', price: 'From \u20b934,500', image: DESTINATION_IMAGES.Rajasthan, layoutClass: 'lg:col-span-2 lg:row-span-2' },
        { name: 'Kerala', price: 'From \u20b931,800', image: DESTINATION_IMAGES.Kerala, layoutClass: 'lg:col-span-2' },
        { name: 'Goa', price: 'From \u20b921,000', image: DESTINATION_IMAGES.Goa, layoutClass: 'lg:col-span-1' },
        { name: 'Himachal', price: 'From \u20b926,500', image: DESTINATION_IMAGES.Himachal, layoutClass: 'lg:col-span-1' },
        { name: 'Andaman', price: 'From \u20b944,900', image: DESTINATION_IMAGES.Andaman, layoutClass: 'lg:col-span-2' },
      ],
      long: [
        { name: 'Andaman', price: 'From \u20b956,000', image: DESTINATION_IMAGES.Andaman, layoutClass: 'lg:col-span-2' },
        { name: 'Kashmir', price: 'From \u20b948,500', image: DESTINATION_IMAGES.Kashmir, layoutClass: 'lg:col-span-2 lg:row-span-2' },
        { name: 'Kerala', price: 'From \u20b952,200', image: DESTINATION_IMAGES.Kerala, layoutClass: 'lg:col-span-2' },
        { name: 'Rajasthan', price: 'From \u20b945,000', image: DESTINATION_IMAGES.Rajasthan, layoutClass: 'lg:col-span-1' },
        { name: 'Uttarakhand', price: 'From \u20b938,700', image: DESTINATION_IMAGES.Uttarakhand, layoutClass: 'lg:col-span-1' },
        { name: 'Himachal', price: 'From \u20b941,900', image: DESTINATION_IMAGES.Himachal, layoutClass: 'lg:col-span-2' },
      ],
    },
  },
}

export const STORY_CONTENT: Record<HolidayScope, StoryContent> = {
  international: {
    description: 'Browse traveller videos by the international destinations we are currently working on.',
    categories: ['Singapore', 'Bali', 'Thailand', 'India', 'Malaysia', 'Sri Lanka', 'Vietnam', 'Dubai'],
    posts: [
      {
        title: 'Prajakta Singapore Holiday',
        category: 'Singapore',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Singapore city break',
      },
      {
        title: 'Nakul & Subree Singapore Holiday',
        category: 'Singapore',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Family memories',
      },
      {
        title: "Myur & Sonia's Bali Holiday",
        category: 'Bali',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Bali arrival moments',
      },
      {
        title: 'Aishwarya Bali Holiday',
        category: 'Bali',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Island stay reel',
      },
      {
        title: 'Harish Thailand Holiday',
        category: 'Thailand',
        image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Thailand beach days',
      },
      {
        title: 'Meera Thailand Getaway',
        category: 'Thailand',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Phuket highlights',
      },
      {
        title: 'Aarav India Holiday',
        category: 'India',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Heritage trail',
      },
      {
        title: 'Riya India Trip',
        category: 'India',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Royal Rajasthan reel',
      },
      {
        title: 'Kabir Malaysia Holiday',
        category: 'Malaysia',
        image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Kuala Lumpur nights',
      },
      {
        title: 'Anika Malaysia Escape',
        category: 'Malaysia',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Island hopping',
      },
      {
        title: 'Dev Sri Lanka Holiday',
        category: 'Sri Lanka',
        image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Tea country views',
      },
      {
        title: 'Nisha Sri Lanka Trip',
        category: 'Sri Lanka',
        image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Coastal drive reel',
      },
      {
        title: 'Ishaan Vietnam Holiday',
        category: 'Vietnam',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Ha Long Bay stories',
      },
      {
        title: 'Tanya Vietnam Escape',
        category: 'Vietnam',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Hoi An evening reel',
      },
      {
        title: 'Riya Dubai Holiday',
        category: 'Dubai',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Dubai skyline reel',
      },
      {
        title: 'Arjun Dubai Vacation',
        category: 'Dubai',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Desert evening',
      },
    ],
  },
  domestic: {
    description: 'Browse traveller videos by the domestic destinations we are currently working on.',
    categories: ['Kashmir', 'Himachal', 'Kerala', 'Goa', 'Rajasthan', 'Uttarakhand', 'Andaman'],
    posts: [
      {
        title: 'Anaya Kashmir Holiday',
        category: 'Kashmir',
        image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Kashmir valley reel',
      },
      {
        title: 'Rohit Kashmir Escape',
        category: 'Kashmir',
        image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Snow view stories',
      },
      {
        title: 'Ira Himachal Trip',
        category: 'Himachal',
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Mountain road diary',
      },
      {
        title: 'Neil Himachal Holiday',
        category: 'Himachal',
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Cafe and valley reel',
      },
      {
        title: 'Nakul Kerala Holiday',
        category: 'Kerala',
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Backwater memories',
      },
      {
        title: 'Prachi Kerala Escape',
        category: 'Kerala',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Green holiday reel',
      },
      {
        title: 'Sia Goa Holiday',
        category: 'Goa',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Goa sunset stories',
      },
      {
        title: 'Kabir Goa Weekend',
        category: 'Goa',
        image: 'https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Beach stay reel',
      },
      {
        title: 'Aditi Rajasthan Holiday',
        category: 'Rajasthan',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Royal city walk',
      },
      {
        title: 'Dev Rajasthan Trip',
        category: 'Rajasthan',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Fort view reel',
      },
      {
        title: 'Maya Uttarakhand Holiday',
        category: 'Uttarakhand',
        image: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Himalayan retreat',
      },
      {
        title: 'Aarav Uttarakhand Trip',
        category: 'Uttarakhand',
        image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'River valley reel',
      },
      {
        title: 'Tanya Andaman Holiday',
        category: 'Andaman',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Island blue stories',
      },
      {
        title: 'Riya Andaman Escape',
        category: 'Andaman',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=700&q=80',
        videoUrl: 'https://www.instagram.com/',
        caption: 'Beach lagoon reel',
      },
    ],
  },
}
