# 🎴 Memory Match - Paired Photos Guide

## ✅ UPDATED: Now Uses Photo Pairs!

The Memory Match game (Game 4) now uses **paired photos** instead of identical photos!

---

## 🎯 How It Works

### Old Way (Before):
- 3 identical photo pairs
- photo1 matches photo1
- photo2 matches photo2
- photo3 matches photo3

### New Way (Now):
- 3 different photo pairs
- **photo11 matches photo12** (Pair 1)
- **photo21 matches photo22** (Pair 2)
- **photo31 matches photo32** (Pair 3)

---

## 📸 Your Photo Pairs

### Pair 1:
- **photo11.jpg** - First photo of the pair
- **photo12.jpg** - Second photo that goes with it

### Pair 2:
- **photo21.jpg** - First photo of the pair
- **photo22.jpg** - Second photo that goes with it

### Pair 3:
- **photo31.jpg** - First photo of the pair
- **photo32.jpg** - Second photo that goes with it

**Total: 6 photos needed**

---

## 💡 Photo Pair Ideas

### Pair 1 Example - "Before & After"
- **photo11.jpg** - You two at the beginning of relationship
- **photo12.jpg** - You two now (showing growth)

### Pair 2 Example - "Same Place, Different Time"
- **photo21.jpg** - Same location, first visit
- **photo22.jpg** - Same location, recent visit

### Pair 3 Example - "Same Moment, Different Angle"
- **photo31.jpg** - Photo from one angle
- **photo32.jpg** - Same moment, different angle

### More Ideas:
- **Matching Outfits:** Both in similar colors/styles
- **Same Activity:** Same thing, different days
- **Seasons:** Same place in summer vs winter
- **Day & Night:** Same spot, different time of day
- **Candid & Posed:** Natural shot + posed shot
- **Close-up & Wide:** Same moment, different zoom
- **Selfie & Photo:** You taking selfie + someone else's photo
- **Her & You:** Her photo + your photo (matching theme)

---

## 🎮 How The Game Works

1. **6 cards** displayed face-down (backs show 💕)
2. Player **taps/clicks** a card to flip it
3. Player **taps/clicks** another card to flip it
4. **If they're a matching pair** (same pairId):
   - Both cards stay flipped
   - Cards fade out (matched!)
   - Match counter increases
5. **If they don't match:**
   - Both cards flip back after 0.8 seconds
   - Player tries again
6. **Complete** when all 3 pairs are matched!

---

## 📂 File Structure

Place your 6 photos in: `assets/photos/`

Required filenames:
```
assets/photos/
├── photo11.jpg  (Pair 1 - Photo A)
├── photo12.jpg  (Pair 1 - Photo B)
├── photo21.jpg  (Pair 2 - Photo A)
├── photo22.jpg  (Pair 2 - Photo B)
├── photo31.jpg  (Pair 3 - Photo A)
└── photo32.jpg  (Pair 3 - Photo B)
```

---

## ✏️ If Using Different Extensions

### If your photos are .jpeg instead of .jpg:

Edit `js/main.js` lines 398-400:

Change:
```javascript
{ pair1: 'assets/photos/photo11.jpg', pair2: 'assets/photos/photo12.jpg', pairId: 1 },
```

To:
```javascript
{ pair1: 'assets/photos/photo11.jpeg', pair2: 'assets/photos/photo12.jpeg', pairId: 1 },
```

### If your photos are .png:

Same thing, just change `.jpg` to `.png`

---

## 🎨 Photo Tips

### Best Practices:
- **Clear Connection:** Make pairs visually related
- **Good Quality:** Use clear, well-lit photos
- **Square Format:** Works best (1:1 ratio)
- **Consistent Style:** Similar editing/filters
- **Recognizable:** Easy to identify as a pair

### Size:
- Recommended: 800x800px
- Minimum: 400x400px
- Will display at 100-150px in game

---

## 🧪 To Test

1. Add your 6 photos to `assets/photos/`
2. Name them: photo11.jpg, photo12.jpg, photo21.jpg, photo22.jpg, photo31.jpg, photo32.jpg
3. Open `index.html`
4. Play to Game 4 (Memory Match)
5. Flip cards and match the pairs!

---

## 🎯 Example Pairs

### Example 1: "Our Journey"
- **Pair 1:** First date photo → Recent date photo
- **Pair 2:** First kiss → Recent kiss
- **Pair 3:** First selfie → Latest selfie

### Example 2: "Places We Love"
- **Pair 1:** Restaurant (outside) → Restaurant (inside)
- **Pair 2:** Park (spring) → Park (fall)
- **Pair 3:** Beach (day) → Beach (sunset)

### Example 3: "Just Us"
- **Pair 1:** You smiling → Her smiling
- **Pair 2:** You laughing → Her laughing
- **Pair 3:** You sleeping → Her sleeping

### Example 4: "Matching Moments"
- **Pair 1:** Both wearing red
- **Pair 2:** Both at a concert
- **Pair 3:** Both making same face

---

## 💝 Why This Is Better

### Old Way (Identical):
- Just memory/concentration
- Less personal connection
- Boring after first play

### New Way (Pairs):
- ✅ Tells a story!
- ✅ Shows progression
- ✅ More meaningful
- ✅ Personalized to your relationship
- ✅ Can be thematic
- ✅ More engaging

---

## 🎮 Game Mechanics

### Matching Logic:
- Each pair has a `pairId` (1, 2, or 3)
- photo11 and photo12 both have pairId: 1
- photo21 and photo22 both have pairId: 2
- photo31 and photo32 both have pairId: 3
- Cards match if pairId is the same

### Display:
- Cards shuffle randomly each time
- Back shows 💕 emoji
- Front shows your photo
- Matched cards fade/stay visible

---

## 📊 Complete Photo Needs

### For Entire Game:
- Quiz photos: quiz1-5.jpg (5 photos)
- Memory Match: photo11, 12, 21, 22, 31, 32 (6 photos)
- Timeline: photo1-4.jpg (4 photos)
- Puzzle: puzzle.jpg (1 photo)
- Gift: gift.jpg (1 photo)

**Total: 17 photos needed**

---

## 🚀 To Deploy with Your Photos

```bash
cd /Users/gauravpadaliya/Documents/Personal/birthday-game

# Add all your photos
git add assets/photos/

# Commit
git commit -m "Added memory match photo pairs"

# Push to GitHub
git push origin main

# Wait 2-3 minutes for GitHub Pages to update!
```

---

## ✅ Checklist

Before deploying:

- [ ] photo11.jpg added
- [ ] photo12.jpg added
- [ ] photo21.jpg added
- [ ] photo22.jpg added
- [ ] photo31.jpg added
- [ ] photo32.jpg added
- [ ] Pairs make sense together
- [ ] Photos are clear and recognizable
- [ ] Tested locally (open index.html)
- [ ] Verified matching works

---

## 💕 Result

She'll play a memory matching game with **YOUR** photos that tell **YOUR** story!

Much more personal and meaningful than generic identical pairs!

**Perfect for her birthday! 🎂💖**
