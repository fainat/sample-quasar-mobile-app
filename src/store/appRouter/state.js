import { fabCcVisa, fabCcMastercard } from '@quasar/extras/fontawesome-v6';

export default {
  activePanelState: 'home', //home
  activeToolState: 'general', //general
  activeToolContext: {

  },
  activePanels: [],

  // LOCAL
  favorites: [],

  // USER
  mainCreditCard: {
    name: fabCcVisa,
    number: '4455 6500 4567 3829',
    secureCode: '343',
    balance: '280.65',
  },
  creditCards: [
    {
      name: fabCcVisa,
      number: '4455 6500 4567 3829',
      secureCode: '343',
      balance: '280.65'
    },
    {
      name: fabCcMastercard,
      number: '5288 5778 9012 3456',
      secureCode: '452',
      balance: '540.12'
    }
  ],
  products: [
    {
      name: 'Nike Free Metcon 5',
      subname: "Men's Workout Shoes",
      productId: 'FreeMetcon5MenWorkOut',
      views: 6,
      description: 'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
      shown: 'Court Purple/Black/White',
      style: 'FN6616-500',
      cost: '102.97'
    },
    {
      name: 'Nike Free Metcon 5',
      subname: "Women's Workout Shoes",
      productId: 'FreeMetcon5WomenWorkOut',
      views: 6,
      description: 'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
      shown: 'Pink Foam/Adobe/Platinum Tint/Dark Team Red',
      style: 'DV3950-603',
      cost: '120'
    },
    {
      name: 'Nike Metcon 9 (Team)',
      subname: "Men's Workout Shoes",
      productId: 'Metcon9MenWorkout',
      views: 5,
      description: 'When your workouts wade into the nitty gritty, the Nike Free Metcon 5 can meet you in the depths, help you dig deep to find that final ounce of force and come out of the other side on a high. It matches style with substance, forefoot flexibility with backend stability, perfect for flying through a cardio day or enhancing your agility. A revamped upper offers easier entry with a collar made just for your ankle.',
      shown: 'Pink Foam/Adobe/Platinum Tint/Dark Team Red',
      style: 'DV3950-603',
      cost: '150'
    },
    {
      name: 'Nike Sportswear Phoenix Fleece',
      subname: "Women's Over-Oversized Crew-Neck Sweatshirt",
      productId: 'PhoenixWomensOversizedweatshirt',
      views: 4,
      description: "Grounded in style, comfort and versatility, meet our take on luxury loungewear. Our roomiest fit paired with exaggerated details (like the oversized pocket and taller ribbing) ensures this sweatshirt is anything but basic. All that's left to decide is whether to style it with the matching shorts or other pieces from your",
      shown: 'Smokey Mauve/Black',
      style: 'DQ5761-208',
      cost: '70'
    },
    {
      name: 'Nike Sportswear Phoenix Fleece',
      subname: "Women's Over-Oversized Crew-Neck Sweatshirt",
      productId: 'PhoenixWomensOversizedweatshirtBlue',
      views: 5,
      description: "Grounded in style, comfort and versatility, meet our take on luxury loungewear. This classic sweatshirt helps you stay cozy all day long, thanks to its midweight fleece that feels soft yet structured. Plus, the taller ribbing and oversized fit give you a trend-right look.",
      shown: 'Light Armory Blue/Sail',
      style: 'DQ5733-441',
      cost: '70'
    }
  ]
};