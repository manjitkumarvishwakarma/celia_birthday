export interface DailyGift {
  day: number; // day of march
  emoji: string;
  title: string;
  message: string;
  color: string;
  bgGradient: string;
}

export const dailyGifts: DailyGift[] = [
  {
    day: 1,
    emoji: "🌹",
    title: "A Beautiful Rose",
    message: "Every rose reminds me of how beautiful you are, Célia. 14 days until your special day! 🌹",
    color: "#ff4444",
    bgGradient: "from-red-500/20 to-pink-500/20"
  },
  {
    day: 2,
    emoji: "⭐",
    title: "A Shining Star",
    message: "You shine brighter than all the stars in the sky, Célia! 12 more days of magic! ✨",
    color: "#ffd700",
    bgGradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    day: 3,
    emoji: "🧸",
    title: "A Cuddly Teddy Bear",
    message: "This teddy bear will keep you company until your big day! Hugs for you, Célia! 🤗",
    color: "#cd853f",
    bgGradient: "from-amber-700/20 to-orange-500/20"
  },
  {
    day: 4,
    emoji: "💎",
    title: "A Sparkling Diamond",
    message: "You're a rare gem, Célia! Just like this diamond — precious and one of a kind! 💎",
    color: "#00bfff",
    bgGradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    day: 5,
    emoji: "🦋",
    title: "A Magical Butterfly",
    message: "May this butterfly bring you transformation and joy! You're amazing, Célia! 🦋",
    color: "#9b59b6",
    bgGradient: "from-purple-500/20 to-violet-500/20"
  },
  {
    day: 6,
    emoji: "🎵",
    title: "A Musical Note",
    message: "Your laughter is the sweetest melody, Célia! Keep singing through life! 🎶",
    color: "#e91e63",
    bgGradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    day: 7,
    emoji: "🌈",
    title: "A Rainbow of Hope",
    message: "You color the world with your presence, Célia! One week to your birthday! 🌈",
    color: "#ff6b9d",
    bgGradient: "from-pink-500/20 to-yellow-500/20"
  },
  {
    day: 8,
    emoji: "🍫",
    title: "A Box of Chocolates",
    message: "Life is sweeter with you in it, Célia! Enjoy these virtual chocolates! 🍫",
    color: "#8b4513",
    bgGradient: "from-amber-900/20 to-amber-600/20"
  },
  {
    day: 9,
    emoji: "🌸",
    title: "Cherry Blossoms",
    message: "Just like cherry blossoms, your beauty is breathtaking, Célia! 🌸",
    color: "#ffb7c5",
    bgGradient: "from-pink-300/20 to-pink-500/20"
  },
  {
    day: 10,
    emoji: "👑",
    title: "A Royal Crown",
    message: "You deserve to be treated like royalty every day, Queen Célia! 👑",
    color: "#ffd700",
    bgGradient: "from-yellow-400/20 to-amber-500/20"
  },
  {
    day: 11,
    emoji: "🎪",
    title: "A Carnival Ticket",
    message: "Life's a carnival and you make it the best show, Célia! 3 more days! 🎪",
    color: "#ff4500",
    bgGradient: "from-orange-500/20 to-red-500/20"
  },
  {
    day: 12,
    emoji: "💐",
    title: "A Flower Bouquet",
    message: "A garden of flowers for the most wonderful person! Almost there, Célia! 💐",
    color: "#ff69b4",
    bgGradient: "from-pink-400/20 to-fuchsia-500/20"
  },
  {
    day: 13,
    emoji: "🎠",
    title: "A Magic Carousel",
    message: "Tomorrow is the BIG day! Get ready for something magical, Célia! 🎠✨",
    color: "#da70d6",
    bgGradient: "from-purple-400/20 to-pink-400/20"
  },
];

export interface BirthdayGift {
  emoji: string;
  title: string;
  message: string;
  color: string;
}

export const birthdayGifts: BirthdayGift[] = [
  {
    emoji: "🎂",
    title: "The Most Beautiful Birthday Cake",
    message: "A cake as sweet as you, baked with love and covered in your favorite flavors!",
    color: "#ff6b9d"
  },
  {
    emoji: "💝",
    title: "A Heart Full of Love",
    message: "This heart contains all the love and warmth you deserve. You are truly cherished, Célia!",
    color: "#ff4081"
  },
  {
    emoji: "🎆",
    title: "Fireworks in Your Honor",
    message: "The whole sky lights up to celebrate YOUUUU! Happyyyyy Birthdayyyy, beautiful soul!",
    color: "#ffd700"
  },
  {
    emoji: "🏰",
    title: "A Fairy Tale Castle",
    message: "Because every princess deserves her own castle! This one is yours, Célia!",
    color: "#e6b3ff"
  },
  {
    emoji: "🌟",
    title: "A Wishing Star",
    message: "Make a wish upon this star — today all your dreams can come true! ✨",
    color: "#ffd700"
  },
  {
    emoji: "🎭",
    title: "A Masquerade Invitation",
    message: "You're invited to the most magical birthday ball ever! Dance the night away!",
    color: "#9c27b0"
  },
  {
    emoji: "🦄",
    title: "A Magical Unicorn",
    message: "As rare and magical as you are! This unicorn will grant you endless joy!",
    color: "#e91e63"
  },
  {
    emoji: "🎁",
    title: "The Ultimate Surprise",
    message: "The greatest gift is having someone as wonderful as you in this world. Happy Birthday, Célia! You make everything better just by being you! 🥰💕",
    color: "#ff6b9d"
  }
];

export const birthdayMessages: string[] = [
  "Happy Birthday to the most incredible person! 🎉",
  "May your day be as wonderful as you are, Célia! 💕",
  "Today the world celebrates because you were born! 🌍✨",
  "You deserve all the happiness in the universe! 🌌💝",
  "Here's to another year of being absolutely amazing! 🥂",
  "Your smile lights up every room you walk into! 😊✨",
  "May all your dreams and wishes come true today! 🌠",
  "The world is a better place because of you, Célia! 🌸",
];
