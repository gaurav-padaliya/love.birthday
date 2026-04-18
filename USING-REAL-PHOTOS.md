# 📸 Using Your Real Photos

## ✅ Quiz Photos with Emoji Overlays - READY!

The game now uses your real quiz photos with emoji overlays on top!

---

## 🎯 What Changed

### Quiz Photos Now Use:
- **quiz1.jpeg** → Shows 😅 emoji on top
- **quiz2.jpeg** → Shows ❤️ emoji on top
- **quiz3.jpeg** → Shows 😍 emoji on top
- **quiz4.jpeg** → Shows 🍀 emoji on top
- **quiz5.jpeg** → Shows 🎂 emoji on top

### How It Looks:
```
┌─────────────────┐
│                 │
│   Your Photo    │
│        😅       │  ← Big emoji centered on top
│                 │
└─────────────────┘
  Caption below
```

---

## 📂 Your Photos Should Be Named:

Place your photos in: `assets/photos/`

Required names:
- **quiz1.jpeg** or **quiz1.jpg**
- **quiz2.jpeg** or **quiz2.jpg**
- **quiz3.jpeg** or **quiz3.jpg**
- **quiz4.jpeg** or **quiz4.jpg**
- **quiz5.jpeg** or **quiz5.jpg**

---

## 🎨 Emoji Features

### Styling:
- **Size:** 80px (very large!)
- **Position:** Perfectly centered on photo
- **Animation:** Pulses (scales 1.0 → 1.1 → 1.0)
- **Shadow:** White glow + black shadow
- **Visibility:** Always visible on any photo

### Which Emojis:
1. Quiz 1: 😅 (silly/stupid)
2. Quiz 2: ❤️ (love)
3. Quiz 3: 😍 (beautiful)
4. Quiz 4: 🍀 (lucky)
5. Quiz 5: 🎂 (birthday)

---

## ✏️ To Change Emojis

Edit `js/main.js` lines 36, 44, 52, 60, 68:

```javascript
emoji: '😅',  // Change to any emoji you want!
```

### Emoji Suggestions:
- Funny: 😅 😂 🤪 😜 🙃
- Love: ❤️ 💕 💖 💗 💘 💝
- Beautiful: 😍 🥰 😘 💋 ✨
- Lucky: 🍀 🎲 💫 ⭐ 🌟
- Birthday: 🎂 🎁 🎉 🎊 🎈 👑

---

## 📸 Photo Tips

### Best Photos for Each Question:

**Quiz 1 (Who is more stupid?):**
- Funny photo of you being silly
- You making a goofy face
- You doing something stupid but cute
- Emoji: 😅

**Quiz 2 (Who loves you more?):**
- Romantic couple photo
- You looking at her lovingly
- Sweet moment together
- Emoji: ❤️

**Quiz 3 (Who is most beautiful?):**
- Beautiful photo of HER
- Her smiling/laughing
- Her looking stunning
- Her best photo!
- Emoji: 😍

**Quiz 4 (Who is luckiest?):**
- Happy photo together
- You both smiling
- Fun moment
- Adventure together
- Emoji: 🍀

**Quiz 5 (Whose birthday?):**
- Her birthday photo (any year)
- Her with cake/candles
- Her celebrating
- Or just a beautiful photo of her
- Emoji: 🎂

---

## 🎨 Photo Requirements

### Format:
- ✅ JPG (.jpg or .jpeg)
- ✅ PNG (.png also works)
- ❌ HEIC (convert to JPG first)

### Size:
- Recommended: 800x800px or larger
- Max display: 400px height
- Will auto-scale to fit

### Orientation:
- Square photos work best
- Portrait/landscape both work
- Will be cropped to fit

---

## 🔄 If Using .jpg Instead of .jpeg

If your files are named quiz1.jpg, quiz2.jpg, etc.:

Edit `js/main.js` lines 35, 43, 51, 59, 67:

Change:
```javascript
image: 'assets/photos/quiz1.jpeg',
```

To:
```javascript
image: 'assets/photos/quiz1.jpg',
```

---

## 📱 How It Works on Mobile

### Photo Display:
- Full width of popup (max 90% screen)
- Scales proportionally
- Never distorted
- Emoji always visible

### Emoji Overlay:
- Always centered
- Large enough to see clearly
- Pulses to grab attention
- White glow makes it stand out

---

## 🧪 To Test

1. Add your 5 photos to `assets/photos/`
2. Name them quiz1.jpeg through quiz5.jpeg
3. Open index.html
4. Play to Game 3 (Love Quiz)
5. Answer correctly
6. See your photo with emoji on top!

---

## ✨ Example Flow

**User answers Q1 correctly:**
```
1. Green button flash
2. Screen fades to dark
3. Popup bounces in
4. Shows quiz1.jpeg with 😅 centered on top
5. Shows caption: "Yes, I'm the stupid one..."
6. Displays for 3 seconds
7. Fades out
8. Next question
```

---

## 💡 Pro Tips

### Tip 1: Photo Selection
Choose photos that match the question emotion:
- Funny for stupid question
- Romantic for love question
- Beautiful for beautiful question

### Tip 2: Emoji Customization
Pick emojis that enhance the photo meaning
Don't be afraid to use fun ones!

### Tip 3: Caption Updates
Update captions to match your photos:
```javascript
caption: "Remember this day? 😅💕"
```

### Tip 4: Test on Phone
Make sure emojis are visible on mobile screen!

---

## 🎭 Advanced: Multiple Emojis

Want 2-3 emojis on a photo?

Change:
```javascript
emoji: '😅',
```

To:
```javascript
emoji: '😅💕',  // Two emojis
// or
emoji: '🎂👑💕',  // Three emojis
```

They'll display together, side by side!

---

## 🎨 Advanced: Change Emoji Position

In `css/styles.css` around line 536, change:

```css
.quiz-photo-emoji {
    top: 50%;    /* 50% = center, 20% = top, 80% = bottom */
    left: 50%;   /* 50% = center, 20% = left, 80% = right */
}
```

---

## ✅ Checklist

Before deploying:

- [ ] Added quiz1.jpeg to assets/photos/
- [ ] Added quiz2.jpeg to assets/photos/
- [ ] Added quiz3.jpeg to assets/photos/
- [ ] Added quiz4.jpeg to assets/photos/
- [ ] Added quiz5.jpeg to assets/photos/
- [ ] Tested locally (open index.html)
- [ ] Checked emojis show on top
- [ ] Verified photos look good
- [ ] Customized captions (optional)
- [ ] Ready to commit & push!

---

## 🚀 To Deploy with Your Photos

```bash
cd /Users/gauravpadaliya/Documents/Personal/birthday-game

# Add all changes
git add .

# Commit
git commit -m "Added real quiz photos with emoji overlays"

# Push to GitHub
git push origin main

# Wait 2-3 minutes for GitHub Pages to update!
```

---

## 🎁 Result

She'll see:
1. Answer quiz question correctly ✅
2. Beautiful popup appears 🎉
3. YOUR REAL PHOTO shows 📸
4. Big emoji pulses on top of photo 😅❤️😍
5. Romantic caption below 💕
6. Perfect memory moment! ✨

---

## 💖 Perfect!

Now your quiz uses your actual photos with beautiful emoji overlays!

**Much more personal and romantic!** 🎂💕
