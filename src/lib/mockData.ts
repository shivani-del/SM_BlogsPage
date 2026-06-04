export interface Author {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogSection {
  type: 'paragraph' | 'heading' | 'quote' | 'list' | 'image';
  content?: string;
  items?: string[];
  imageUrl?: string;
  caption?: string;
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tag: string;
  coverImage: string;
  readTime: string;
  publishDate: string;
  author: Author;
  featured: boolean;
  sections: BlogSection[];
  mustVisitSpots?: {
    name: string;
    description: string;
  }[];
}

export interface Destination {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const CATEGORIES = [
  'All Stories',
  'Cab Rental Tips',
  'Pilgrimage Tour',
  'Hill Stations Tour',
  'Rajasthan Tour',
  'Budget Travel Tips'
];

export const MOCK_BLOGS: Blog[] = [
  {
    id: '1',
    slug: 'manali-beyond-tourist-trails',
    title: 'Manali: Beyond the Tourist Trails',
    excerpt: 'Discover the hidden valleys, quaint local cafes, and snow-filled pine forests that make Manali a true adventure haven.',
    category: 'Hill Stations Tour',
    tag: 'ADVENTURE',
    coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80',
    readTime: '10 min read',
    publishDate: 'Nov 15, 2026',
    author: {
      name: 'Amit Sen',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      role: 'Travel Explorer'
    },
    featured: true,
    sections: [
      {
        type: 'paragraph',
        content: 'Manali, nestled in the mountains of the Indian state of Himachal Pradesh near the northern end of the Kullu Valley, is more than just a tourist destination. It\'s an emotion for the adventurous soul. As winter sets in, the valley transforms into a crystalline wonderland, offering experiences that stay with you forever.'
      },
      {
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?w=1200&auto=format&fit=crop&q=80',
        caption: 'Misty winter mornings along the pine-lined ridges of Manali.'
      },
      {
        type: 'heading',
        content: 'The Best Time to Visit'
      },
      {
        type: 'paragraph',
        content: 'While Manali is a year-round destination, the months of December to February are truly magical. This is when the snowfall is frequent, and the entire landscape turns into a playground for winter sports. Whether you\'re into skiing in Solang Valley or simply enjoying a hot cup of tea by the Beas River, winter in Manali is unparalleled.'
      },
      {
        type: 'quote',
        content: 'To travel is to discover that everyone is wrong about other countries. In Manali, you discover that nature has its own way of redefining luxury.'
      }
    ],
    mustVisitSpots: [
      {
        name: 'Rohtang Pass',
        description: 'A high mountain pass providing connection between the Kullu Valley and Lahaul and Spiti Valleys, known for breathtaking panoramic snow views.'
      },
      {
        name: 'Hadimba Devi Temple',
        description: 'An ancient wooden temple located in the middle of a dense cedar forest (Dhungri Van Vihar), showcasing unique architectural style.'
      },
      {
        name: 'Old Manali',
        description: 'Famous for its quaint stone cafes, slow-paced lifestyle, apple orchards, and vibrant local handicraft shopping streets.'
      }
    ]
  },
  {
    id: '2',
    slug: 'sacred-path-guide-to-amritsar',
    title: 'The Sacred Path: A Soulful Guide to Amritsar',
    excerpt: 'Embark on a spiritual journey to the golden city, exploring the Golden Temple and savoring Punjab\'s rich culture.',
    category: 'Pilgrimage Tour',
    tag: 'SPIRITUAL',
    coverImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=1200&auto=format&fit=crop&q=80',
    readTime: '12 min read',
    publishDate: 'Oct 10, 2026',
    author: {
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80',
      role: 'Cultural Documentarian'
    },
    featured: true,
    sections: [
      {
        type: 'paragraph',
        content: 'Amritsar, home to the spectacular Golden Temple, is the spiritual and cultural center of the Sikh religion. Walking through the narrow streets of the old city is like stepping back in time, where the aroma of fresh ghee and devotional hymns fill the air.'
      },
      {
        type: 'heading',
        content: 'The Divine Experience of Harmandir Sahib'
      },
      {
        type: 'paragraph',
        content: 'The Golden Temple, or Sri Harmandir Sahib, is not just a building; it is a symbol of human equality and peace. The gold-plated structure is surrounded by a massive holy pool (sarovar) where devotees take cleansing dips. At night, the reflection of the illuminated temple in the still water is a sight that heals the restless mind.'
      },
      {
        type: 'heading',
        content: 'The World\'s Largest Free Kitchen'
      },
      {
        type: 'paragraph',
        content: 'One cannot visit Amritsar without experiencing the Langar at the Golden Temple. Feeding over 100,000 people daily regardless of race, religion, or background, the kitchen is entirely run by volunteers. The discipline and devotion involved in preparing and serving these hot, simple meals will leave you deeply humbled.'
      }
    ],
    mustVisitSpots: [
      {
        name: 'The Golden Temple',
        description: 'The holiest shrine of Sikhism, reflecting elegance, spirituality, and infinite peace.'
      },
      {
        name: 'Jallianwala Bagh',
        description: 'A historic public garden housing a memorial of national importance, reminding us of India\'s struggle for freedom.'
      },
      {
        name: 'Wagah Border Ceremony',
        description: 'A daily military practice that the security forces of India and Pakistan have jointly followed since 1959.'
      }
    ]
  },
  {
    id: '3',
    slug: 'future-of-road-travel-india',
    title: 'The Future of Road Travel in India',
    excerpt: 'Explore how luxury caravans, premium highway corridors, and app-based cab rentals are revolutionizing the Indian traveler\'s journey.',
    category: 'Cab Rental Tips',
    tag: 'LUXURY',
    coverImage: 'https://images.unsplash.com/photo-1513313778780-9ae4807465f0?w=1200&auto=format&fit=crop&q=80',
    readTime: '8 min read',
    publishDate: 'Nov 3, 2026',
    author: {
      name: 'Priya Verma',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      role: 'Automotive Journalist'
    },
    featured: true,
    sections: [
      {
        type: 'paragraph',
        content: 'India\'s highway infrastructure is expanding at an unprecedented rate. With new expressways connecting major metros, long-distance road trips are no longer tedious chores but premium, scenic journeys. Modern travelers are choosing comfort and personalization over crowded flights and rigid train schedules.'
      },
      {
        type: 'heading',
        content: 'The Rise of Chauffeur-Driven Luxury'
      },
      {
        type: 'paragraph',
        content: 'Why drive when you can ride in style? Premium cab rental services like AAVORide are redefining the road trip experience by offering luxury SUVs and sedans driven by highly trained, courteous professional chauffeurs. Passengers can take video calls, read books, or sleep comfortably while cruising smoothly on high-speed express corridors.'
      },
      {
        type: 'heading',
        content: 'Smart Highways and Connected Cars'
      },
      {
        type: 'paragraph',
        content: 'From automated toll plazas to GPS-tracked connected vehicle fleets, technology has made road trips exceptionally safe. Real-time updates on weather, road conditions, and dining stops mean you can customize your itinerary on the fly, creating a truly bespoke travel experience.'
      }
    ],
    mustVisitSpots: [
      {
        name: 'Delhi-Mumbai Expressway',
        description: 'India\'s longest greenfield expressway reducing travel time between the capital and financial hub to just 12 hours.'
      },
      {
        name: 'Mumbai-Pune Expressway',
        description: 'A scenic 6-lane concrete highway cutting through the beautiful Western Ghats.'
      }
    ]
  },
  {
    id: '4',
    slug: 'golden-triangle-redefining-classic-circuit',
    title: 'The Golden Triangle: Redefining the Classic Indian Circuit',
    excerpt: 'Discover how luxury road travel is changing the way tourists experience the timeless heritage of Delhi, Agra, and Jaipur.',
    category: 'Rajasthan Tour',
    tag: 'CULTURE',
    coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80',
    readTime: '6 min read',
    publishDate: 'Nov 24, 2026',
    author: {
      name: 'Vikas Malhotra',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      role: 'Heritage Specialist'
    },
    featured: false,
    sections: [
      {
        type: 'paragraph',
        content: 'The Golden Triangle – comprising Delhi, Agra, and Jaipur – is India\'s most iconic tourist route. While traditionally covered by trains, smart travelers are shifting to luxury road transfers to absorb the transitioning landscapes, stop at heritage dhabas, and customize their travel pacing.'
      }
    ]
  },
  {
    id: '5',
    slug: 'planning-first-char-dham-yatra',
    title: 'Planning Your First Char Dham Yatra: A Complete Guide',
    excerpt: 'The spiritual journey of a lifetime requires meticulous planning. From routes to luxury stays, here is everything you need to know.',
    category: 'Pilgrimage Tour',
    tag: 'PILGRIMAGE',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop&q=80',
    readTime: '15 min read',
    publishDate: 'Oct 20, 2026',
    author: {
      name: 'Sanjay Gupta',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      role: 'Pilgrimage Coordinator'
    },
    featured: false,
    sections: [
      {
        type: 'paragraph',
        content: 'Embarking on the Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, and Badrinath) high in the Himalayas is a deeply transformative experience. With high altitudes and challenging terrain, securing a premium cab and experienced driver is paramount to a safe, comfortable pilgrimage.'
      }
    ]
  },
  {
    id: '6',
    slug: 'rajasthan-road-trip-desert-land',
    title: 'Rajasthan Road Trip: A Week in the Desert Land',
    excerpt: 'Exploring Rajasthan by road is an experience like no other. From royal Havelis to sunset sand dunes, here is your definitive travel guide.',
    category: 'Rajasthan Tour',
    tag: 'ROAD TRIP',
    coverImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=80',
    readTime: '9 min read',
    publishDate: 'Dec 5, 2026',
    author: {
      name: 'Sanjay Gupta',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      role: 'Pilgrimage Coordinator'
    },
    featured: false,
    sections: [
      {
        type: 'paragraph',
        content: 'From the pink facades of Jaipur to the golden sands of Jaisalmer, Rajasthan represents the pinnacle of Indian royalty and culture. Driving through the desert state exposes you to scenic fortresses rising from plains and rich traditions in small, local communities along the highway.'
      }
    ]
  },
  {
    id: '7',
    slug: 'budget-travel-tips-explore-india',
    title: 'Budget Travel Tips: How to Explore India Smartly',
    excerpt: 'Think you need a fortune to travel India? These smart cab-sharing, hostelling, and planning tips will help you travel more for less.',
    category: 'Budget Travel Tips',
    tag: 'BUDGET',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
    readTime: '7 min read',
    publishDate: 'Dec 12, 2026',
    author: {
      name: 'Neha Patel',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
      role: 'Backpacker Advocate'
    },
    featured: false,
    sections: [
      {
        type: 'paragraph',
        content: 'India is one of the most budget-friendly destinations globally if you know how to plan. By booking outstation cabs in advance with transparent pricing model and splitting rides, you can enjoy premium comfort without breaking the bank.'
      }
    ]
  },
  {
    id: '8',
    slug: 'coorg-scotland-of-india-guide',
    title: 'Coorg: A Detailed Travel Guide to the Scotland of India',
    excerpt: 'Coorg is famous for its coffee plantations, misty hills, and lush forests. Here is how to plan your perfect weekend getaway.',
    category: 'Hill Stations Tour',
    tag: 'NATURE',
    coverImage: 'https://images.unsplash.com/photo-1588598126749-d7593c66f7f8?w=800&auto=format&fit=crop&q=80',
    readTime: '8 min read',
    publishDate: 'Dec 18, 2026',
    author: {
      name: 'Amit Sen',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      role: 'Travel Explorer'
    },
    featured: false,
    sections: [
      {
        type: 'paragraph',
        content: 'Located in Karnataka, Coorg is a nature lover\'s paradise. Surrounded by coffee estates and misty waterfalls, it offers a peaceful respite from the urban hustle. Exploring Coorg by road is the best option to navigate the winding mountain turns at your own leisure.'
      }
    ]
  }
];

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 'd1',
    title: "Jaipur's Hidden Haveli Stays",
    category: 'Rajasthan Tour',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'd2',
    title: 'Varanasi: Dawn on the Ganges',
    category: 'Pilgrimage Tour',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'd3',
    title: 'Leh: High Altitude Comfort',
    category: 'Hill Stations Tour',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&auto=format&fit=crop&q=80'
  },
  {
    id: 'd4',
    title: 'Hampi: Ruins Reimagined',
    category: 'Pilgrimage Tour',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=400&auto=format&fit=crop&q=80'
  }
];
