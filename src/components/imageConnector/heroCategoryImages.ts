import type { HolidayScope } from '../../types/holiday'

export type HeroCategory = {
  label: string
  dockedLabel: string
  image: string
  ariaLabel?: string
}

export const HERO_CATEGORIES: Record<HolidayScope, HeroCategory[]> = {
  international: [
    {
      label: 'Bali',
      dockedLabel: 'Bali',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAx1G7bltvQPzCk2rMa2tSJwyQDVP7zz-9QTez2tEPTdapYrg7nYZbAaKkcUkdxyjYoGT8tkzFVn5a2x4SQ4gdgwFr9SihG-5W6t2qSbF3mwSQyph49eishFWoKvsLcwdgdazcNq40em3QoSd3qUw6EYwZuBbCIrtN4TZaY7Cf4iBNjFH0Ak3lxav1OEKw8bOSFTXtbQaWjlj5n1Oi9i5HyyV32ogBis2BZXLSOK1ihBbi5EkEwxs28nIO6DMGifz84YpG63aXdXbg',
      ariaLabel: 'Bali',
    },
    {
      label: 'Dubai',
      dockedLabel: 'Dubai',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAUDEPcIqJhn250X4icQKclw49W0_3J3bqwqqDqeJmnoo4B3XIjq5jWMFrCazITCT3broBtY-eR2I2CK6QyyAq6x46tWiKPZ09fA85mSaONc8g8in_pmhZNmKsbLClxz-pVRS_YyBVt8mhdyd2Zct1UIM57p2PXv5mKGNZIOoxc4aGaXxnAHYnBqSiu2noYLKo1uXmv8FoDF7WBT4Gi1h65QsRruYmjIa5bcr_1ySLn24ZaanJ2_iVUjjJjxk5mP_VPl55BRYb4zoQ',
      ariaLabel: 'Dubai',
    },
    {
      label: 'Singapore',
      dockedLabel: 'Singapore',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBplDMiGw0NkHA2NoGwhSD8ScLP9tl1IQFumpoFjyOZqYBOMQc27-M0WKVE8Lv86ePOo7zmR7TZ3PRKVUlivBsaZi5uxpA9w4VgimeD6BGb11XLfNYtYJ8lLfqTnt8tb3DjDhoY_07EDg7sYtqC_RZMtPcftQABoM8V2mpuixRPnkrY3Vmmz0LHM8eR3b58_zedX4rBtHt559Z1iVwYMyfyjOXQNtyzCQgFR5HTUiVyhP5g8-scC0c0YqijN7D8Wzj6kVV952Lfrv0',
      ariaLabel: 'Singapore',
    },
    {
      label: 'Malaysia',
      dockedLabel: 'Malaysia',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB94KKKF1fKjPmW3dqNdVelbrr5FSEEvv5EPNJ7FAm2lkiP8qW5A9BXn6JinQgrPLZpR6R8Tm3_v4lA0_YQAtMoKTrkZtiJr9AlzWxnTQ471CZQGKDIhAwMDWMYiUxoqzwhmNoXd2C2G6lwT2_WD2NXDE_9M-YQa8qZS75G9aS76AaNiRiwCsDgYJx0-j_DnMxuTY3WDkq27MfbODrCO21MbdQYOh1B2Arupd53d25oTRG9mTZbkheqkvWg-YngbqlgWUwrEEvpjk0',
      ariaLabel: 'Malaysia',
    },
    {
      label: 'Sri Lanka',
      dockedLabel: 'Sri Lanka',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA-BaZkwsvfDpB4jR32HfRz6Z8n8HOcPgv-8ykWV2k6jjvx0qEo3Wfaix0JzbAJSalMY_bmeGbbzGIh2wiIcRMfZCVS2K2mpeubQRjKA28GvHEGmMsv8qcHe-CGxLjWeeG2HaFWCTsAtLEBRfzloTuhJJPBeSRVj4H76PaZ4L5PBgA6y18UuTO78j_VH6ZAn_9nI0ygA_NMWJb-9y8S6tS0Y7IlydidBd-KMTWj728X0sO4YCZ1G_9PV3FBynrR67WXKyhOvSczZCY',
      ariaLabel: 'Sri Lanka',
    },
    {
      label: 'Thailand',
      dockedLabel: 'Thailand',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCcDuYTsCKWjxsdJ3E7WowjSYIU9a9eZ4URzu5bUpBQANkod_6bJQDnttFpQ21vUmqi66VgogOi1PeEwN8ii-29kCFYKu6KjuM8FN123iLwlsKTO3vKrUyl4ppT6zc1woxGisWMC2uy9gDsuo-ZAr7jm0mpnfYUCHl05MJeTlXDRKILTFYDY9vM2IxIadmPccAIN5HTSQTuDVPjEhJqYWCwsUAX0SNp1AHtMe5EL75T5K3ektzx_O-3-WA_0GLfK0tCIEePinuDOnA',
      ariaLabel: 'Thailand',
    },
    {
      label: 'Vietnam',
      dockedLabel: 'Vietnam',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80',
      ariaLabel: 'Vietnam',
    },
  ],
  domestic: [
    {
      label: 'Kashmir',
      dockedLabel: 'Kashmir',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Himachal',
      dockedLabel: 'Himachal',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Kerala',
      dockedLabel: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Goa',
      dockedLabel: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Rajasthan',
      dockedLabel: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Uttarakhand',
      dockedLabel: 'Uttarakhand',
      image: 'https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=900&q=80',
    },
    {
      label: 'Andaman',
      dockedLabel: 'Andaman',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80',
    },
  ],
}
