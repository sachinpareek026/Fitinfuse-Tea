import { Botanical, CinematicStep, BrewingStep, FaqItem, TestimonialItem } from '../types';

export const BRAND_INFO = {
  name: 'FitInFuse',
  descriptor: 'LEAF OF FITNESS',
  website: 'www.fitinfuse.in',
  category: 'Premium herbal wellness infusion',
  productName: 'FITINFUSE STRESS RELIEF INFUSION',
  flavour: 'PEPPERMINT FLAVOUR',
  format: 'Herbal Infusion Tea Bags',
  netWeight: '30g',
  servings: '15 SERVINGS',
  caffeine: 'NO CAFFEINE',
  price: 'PRICE TO BE ADDED',
  manufacturer: {
    name: 'HINCO Infusions Pvt. Ltd.',
    address: 'C-198, Sector-63, Noida, Gautam Buddh Nagar, Uttar Pradesh - 201301',
    fssai: '12725999000692'
  },
  marketedBy: {
    name: 'FitInFuse',
    address: 'B-11, Basement, Ganpati Enclave, Central Spine, Jaipur, Rajasthan - 302039',
    fssai: '22226606706048'
  },
  contact: {
    email: 'info@fitinfuse.in',
    phone: '+91 90246 15279',
    website: 'www.fitinfuse.in'
  }
};

// ONLY the exact 9 ingredients as mandated
export const BOTANICALS: Botanical[] = [
  {
    id: 'chamomile',
    name: 'Chamomile',
    scientificName: 'Matricaria chamomilla',
    description: 'Delicate floral notes.',
    aromaProfile: 'Soft floral sweetness with apple-like soothing undertones',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80',
    accentColor: '#E6D38B'
  },
  {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    description: 'Soft aromatic character.',
    aromaProfile: 'Gentle herbaceous fragrance with relaxing notes',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=900&q=80',
    accentColor: '#9C92B3'
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    scientificName: 'Hibiscus sabdariffa',
    description: 'Vibrant botanical depth.',
    aromaProfile: 'Tart, ruby-red infusion with crisp floral tang',
    image: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=900&q=80',
    accentColor: '#B83B5E'
  },
  {
    id: 'rose',
    name: 'Rose',
    scientificName: 'Rosa damascena',
    description: 'Delicate floral elegance.',
    aromaProfile: 'Romantic, velvety blossom notes and gentle sweetness',
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=900&q=80',
    accentColor: '#D9899A'
  },
  {
    id: 'licorice',
    name: 'Licorice',
    scientificName: 'Glycyrrhiza glabra',
    description: 'Naturally sweet botanical depth.',
    aromaProfile: 'Deep organic sweetness lingering softly on the palate',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=900&q=80',
    accentColor: '#9B724C'
  },
  {
    id: 'rooibos',
    name: 'Rooibos',
    scientificName: 'Aspalathus linearis',
    description: 'Smooth earthy character.',
    aromaProfile: 'Nutty, warm amber profile with naturally rich body',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=80',
    accentColor: '#C46238'
  },
  {
    id: 'lemongrass',
    name: 'Lemongrass',
    scientificName: 'Cymbopogon citratus',
    description: 'Fresh citrus aroma.',
    aromaProfile: 'Bright, zesty herbal fragrance with uplifting clean notes',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&w=900&q=80',
    accentColor: '#8EAA59'
  },
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    description: 'Earthy botanical character.',
    aromaProfile: 'Grounded, warm root botanical known for serene balance',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    accentColor: '#B49C73'
  },
  {
    id: 'peppermint',
    name: 'Peppermint',
    scientificName: 'Mentha piperita',
    description: 'Fresh cooling aroma.',
    aromaProfile: 'Crisp menthol breeze, refreshing clarity and coolness',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=80',
    accentColor: '#4E8752'
  }
];

export const CINEMATIC_STORY: CinematicStep[] = [
  {
    id: 1,
    stage: 'SEALED',
    title: 'The Sealed Pouch',
    subtitle: 'Preserving freshness & botanical oils',
    description: 'Each pyramid tea bag remains airtight, holding whole-leaf cuts of nine calming herbs in their purest state.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    stage: 'OPEN',
    title: 'The Unfolding Aroma',
    subtitle: 'Releasing peppermint & floral bouquet',
    description: 'As you open the sachet, the aromatic notes of chamomile blossoms, crisp peppermint, and lavender gently bloom.',
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    stage: 'REVEAL',
    title: 'Nature in Harmony',
    subtitle: 'Pure whole botanicals exposed',
    description: 'A thoughtful blend of dried hibiscus calyces, rooibos needle leaves, crushed lemongrass, and ashwagandha root.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    stage: 'FALL',
    title: 'Meeting the Vessel',
    subtitle: 'Resting in anticipation of heat',
    description: 'The biodegradable pyramid bag nestles into your ceramic cup, ready for the ritual of hydration.',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    stage: 'BREW',
    title: 'The Thermal Dance',
    subtitle: 'Hot water awakens the blend',
    description: 'Freshly boiled water cascades over the tea bag, coaxing out essential oils, vibrant hues, and delicate notes.',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc506b1826e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    stage: 'TRANSFORM',
    title: 'Amber-Gold Clarity',
    subtitle: 'Full botanical infusion achieved',
    description: 'The liquor deepens into a warm, glowing amber with gentle rose-tinted reflections and a soothing steam.',
    image: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 7,
    stage: 'ENJOY',
    title: 'The Quiet Moment',
    subtitle: 'Slow down. Sip into calm.',
    description: 'Both hands wrapped around warmth, each mindful sip brings cooling peppermint clarity and deep relaxation.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80'
  }
];

export const BREWING_STEPS: BrewingStep[] = [
  {
    number: '01',
    title: 'OPEN',
    instruction: 'Place one FitInFuse tea bag in your cup.',
    detail: 'Choose your favourite mug or teapot. The spacious pyramid weave allows botanicals to freely unfurl.',
    iconImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '02',
    title: 'POUR',
    instruction: 'Add freshly boiled hot water.',
    detail: 'Pour approximately 200–250ml of freshly boiled water directly over the pyramid infusion bag.',
    iconImage: 'https://images.unsplash.com/photo-1571934811356-5cc506b1826e?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '03',
    title: 'BREW',
    instruction: 'Steep according to the instructions on the pack.',
    detail: 'Allow the nine botanicals to infuse undisturbed as the liquor turns to a luminous amber-gold.',
    iconImage: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is FitInFuse Stress Relief Infusion?',
    answer: 'FitInFuse Stress Relief Infusion is a premium herbal wellness infusion created with nine thoughtfully selected botanicals. It is designed to offer a gentle, calming pause and sensory ritual in your everyday routine.'
  },
  {
    id: 'faq-2',
    question: 'What flavour is it?',
    answer: 'It has a crisp, refreshing Peppermint Flavour, beautifully rounded out with delicate floral undertones of chamomile and rose, warm rooibos, and natural licorice sweetness.'
  },
  {
    id: 'faq-3',
    question: 'How many servings are included?',
    answer: 'Each pack contains 15 individually crafted herbal infusion pyramid tea bags (15 servings).'
  },
  {
    id: 'faq-4',
    question: 'What is the net weight?',
    answer: 'The net weight is 30g (containing 15 pyramid tea bags of 2g each).'
  },
  {
    id: 'faq-5',
    question: 'Does it contain caffeine?',
    answer: 'No. FitInFuse Stress Relief Infusion is completely caffeine-free (NO CAFFEINE), making it ideal for relaxing morning moments, mindful mid-day pauses, or peaceful evening rituals before sleep.'
  },
  {
    id: 'faq-6',
    question: 'What ingredients are included?',
    answer: 'The blend is made exclusively of nine botanicals: Chamomile, Lavender, Hibiscus, Rose, Licorice, Rooibos, Lemongrass, Ashwagandha, and Peppermint. It contains no artificial additives, no black/green tea, and no caffeine.'
  },
  {
    id: 'faq-7',
    question: 'How should I brew it?',
    answer: 'Place one FitInFuse tea bag in your cup, pour freshly boiled hot water over it, and steep according to the instructions on the pack to allow all nine botanicals to reveal their aroma and flavours.'
  },
  {
    id: 'faq-8',
    question: 'Where is the product manufactured and packed?',
    answer: 'Manufactured and Packed by HINCO Infusions Pvt. Ltd. (C-198, Sector-63, Noida, Gautam Buddh Nagar, Uttar Pradesh - 201301, FSSAI Lic. No.: 12725999000692) and Marketed by FitInFuse (B-11, Basement, Ganpati Enclave, Central Spine, Jaipur, Rajasthan - 302039, FSSAI Lic. No.: 22226606706048).'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: 'The cooling peppermint aroma combined with chamomile creates an instant pause in a hectic workday. The lack of caffeine makes it my absolute go-to evening ritual.',
    author: 'Early Community Reviewer',
    location: 'Jaipur, Rajasthan',
    date: 'Verified Experience',
    tag: 'Evening Ritual'
  },
  {
    id: 't-2',
    quote: 'You can actually see and smell whole botanical leaves and petals. It tastes naturally smooth without needing any added sugar or sweetener.',
    author: 'Mindful Living Enthusiast',
    location: 'New Delhi',
    date: 'Verified Experience',
    tag: 'Botanical Quality'
  },
  {
    id: 't-3',
    quote: 'A genuinely thoughtful blend. The balance between zesty lemongrass, floral rose, and soothing ashwagandha feels grounding and calming.',
    author: 'Tea Sommelier & Wellness Writer',
    location: 'Bengaluru',
    date: 'Verified Experience',
    tag: 'Flavor & Aroma'
  }
];
