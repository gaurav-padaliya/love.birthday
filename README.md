# 🎂 Birthday Love Game for Your Girlfriend

A beautiful, romantic, mobile-responsive birthday game with 8 progressive mini-games that gradually reveal a gift photo!

## 🌟 Features

✨ **8 Different Games:**
1. Tap Hearts - Tap floating hearts to reveal romantic messages
2. Word Scramble - Unscramble romantic words
3. Love Quiz - Answer cute relationship questions
4. Memory Match - Match pairs of your photos
5. Timeline Sort - Tap to swap photos and arrange chronologically
6. Complete the Line - Fill in romantic phrases
7. Sliding Puzzle - Solve a photo puzzle
8. Final Reveal - Your heartfelt message + gift photo

🎨 **Beautiful Design:**
- Pink & yellow gradient theme
- Animated lilies, butterflies, and bubbles
- Floating hearts background
- Smooth animations and transitions
- Fully mobile responsive

🎁 **Progressive Gift Reveal:**
- Gift photo starts blurred
- Each completed game unblurs it more
- Final reveal shows the full gift + your message

## 📱 Mobile Responsive
The entire game is optimized for mobile devices! She can play it on her phone.

## 🚀 Quick Start

### Step 1: Add Your Photos

Go to `assets/photos/` folder and add these images:

- **photo1.jpg** - Your first memory photo
- **photo2.jpg** - Your second memory photo
- **photo3.jpg** - Your third memory photo
- **photo4.jpg** - Your fourth memory photo (for timeline)
- **gift.jpg** - THE BIRTHDAY GIFT PHOTO (this is the big reveal!)
- **puzzle.jpg** - A photo to use in the sliding puzzle

**Image Tips:**
- Use JPG or PNG format
- Recommended size: 800x800px
- Square photos work best!

### Step 2: Customize the Content

Open `js/main.js` and customize:

#### A) Heart Messages (Lines 10-21)
Replace the romantic messages in the `heartMessages` array with your own deep, Instagram-worthy lines.

Current examples:
```javascript
heartMessages: [
    "In a world of billions, my heart chose only you ❤️",
    "You are not just my love, you are my entire universe 🌟",
    // ... add your own!
]
```

#### B) Quiz Questions (Lines 33-59)
Update the quiz questions to match your relationship:

```javascript
quizQuestions: [
    {
        question: "Who is more stupid in this relationship?",
        options: ["You", "Me", "Both equally", "Me, obviously!"],
        correct: 1  // Index of correct answer (0-based)
    },
    // Add more questions!
]
```

#### C) Timeline Dates (Line 329-334)
Update the timeline with your actual dates:

```javascript
const timeline = [
    { img: 'assets/photos/photo1.jpg', date: 'First Meet - Jan 2023', order: 1 },
    { img: 'assets/photos/photo2.jpg', date: 'First Date - Feb 2023', order: 2 },
    { img: 'assets/photos/photo3.jpg', date: 'Our Anniversary - Dec 2023', order: 3 },
    { img: 'assets/photos/photo4.jpg', date: 'Recent Memory - Mar 2024', order: 4 }
];
```

#### D) Final Message (HTML line 132-149)
Edit `index.html` and replace the heartfelt message in the final reveal section with your own words.

Find this section:
```html
<p class="heartfelt-message">
    They say there are billions of people in this world...
    <!-- Replace this entire paragraph with your message -->
</p>
```

### Step 3: Optional - Add Music

1. Find a romantic song (MP3 format)
2. Name it `romantic-music.mp3`
3. Add it to `assets/sounds/` folder
4. Optional: Add `success.mp3` for game completion sounds

**Where to get music:**
- Use a song you both love
- Or search "romantic background music no copyright" on YouTube

### Step 4: Test It!

Simply open `index.html` in your web browser (preferably Chrome or Safari).

**Test on mobile:**
- Open on your phone's browser
- Or use browser DevTools (F12) and toggle device mode

## 🎨 Customization Options

### Change Colors

Edit `css/styles.css`:

**Pink/Yellow to Different Colors:**
```css
/* Search for: */
background: linear-gradient(135deg, #ff69b4, #ffb347);

/* Replace with your colors, e.g., */
background: linear-gradient(135deg, #your-color-1, #your-color-2);
```

### Adjust Difficulty

In `js/main.js`:

- **Fewer games:** Comment out games you don't want
- **More hearts:** Change `10` to higher number in Game 1
- **Easier puzzle:** Change `3x3` grid to `2x2` in Game 7

## 📤 How to Share

### Option 1: Direct File Share
1. Zip the entire `birthday-game` folder
2. Upload to Google Drive / Dropbox
3. Share the link with her
4. She downloads and opens `index.html`

### Option 2: Host Online (Recommended!)
1. Create a free account on [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
2. Drag and drop the `birthday-game` folder
3. Get a live URL like `yourname-birthday.netlify.app`
4. Send her the link!

### Option 3: USB Drive
Copy the folder to a USB drive and give it to her physically (romantic!)

## 🎁 Birthday Day Tips

1. **Test everything beforehand!** Make sure all photos load.
2. **Send her the link early morning** so she wakes up to it
3. **Don't spoil the ending!** Let her discover the gift reveal
4. **Be there when she plays** to see her reaction (optional but sweet)
5. **Have the actual gift ready** when she finishes the game!

## 🐛 Troubleshooting

**Images not showing:**
- Check that image files are in `assets/photos/` folder
- Make sure filenames match exactly (case-sensitive!)
- Try using JPG format instead of PNG

**Music not playing:**
- Some browsers block autoplay. She may need to tap the screen once.
- Make sure the music file is MP3 format

**Game looks broken on mobile:**
- Clear browser cache
- Try a different browser (Chrome/Safari work best)

**Games too easy/hard:**
- Edit the game logic in `js/main.js`
- Adjust number of items, time limits, etc.

## 💝 Final Checklist

Before sending to her:

- [ ] All 6 photos added to assets/photos/
- [ ] Gift photo (gift.jpg) is added
- [ ] Romantic messages customized
- [ ] Quiz questions personalized
- [ ] Timeline dates updated
- [ ] Final heartfelt message written
- [ ] Background music added (optional)
- [ ] Tested on mobile device
- [ ] All games complete successfully
- [ ] The actual gift is ready! 🎁

## ❤️ Good Luck!

This game shows effort, creativity, and love. She's going to absolutely love it!

The most important part is your heartfelt message at the end. Make it genuine and from your heart.

Happy Birthday to her! 🎉🎂💕

---

**Made with ❤️ for the one you love**

*P.S. - If she loves it, consider making this a yearly tradition with different games!*
