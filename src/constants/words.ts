export const words = [
  'welcome',
  'Good Morning',
  'Good Afternoon',
  'Good Evening',
  'Hello',
  'Thank you',
  'Welcome & Thank you!',
  'Have a wonderful time!',
  'Congratulations!',
  'Cheers!',
  'Wonderful!',
  'Best wishes!',
  'Sounds good!',
  'Awesome',
  'Believe in yourself',
  'Just do it',
  'Let it be',
  'Let’s have a break',
  'Keep smiling',
  'Success',
  'Time is money',
  'Have a nice day!',
  'Good luck!',
]

export const getRandomWord = (): string => words[Math.floor(Math.random() * words.length)]
