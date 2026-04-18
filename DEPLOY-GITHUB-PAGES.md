# 🚀 Deploy to GitHub Pages

## Quick Method (5 Minutes)

### Step 1: Go to Your Repository
Open this URL in your browser:
```
https://github.com/gaurav-padaliya/love_birthday
```

### Step 2: Enable GitHub Pages
1. Click **"Settings"** tab (top menu)
2. Scroll down and click **"Pages"** in the left sidebar
3. Under "Source", select **"main"** branch
4. Click **"Save"**

### Step 3: Wait (1-2 minutes)
GitHub will build your site. Refresh the page after a minute.

### Step 4: Get Your URL
You'll see a message:
```
Your site is live at https://gaurav-padaliya.github.io/love_birthday/
```

### Step 5: Share!
Send her this URL tomorrow! 🎉

---

## Detailed Steps with Screenshots Guide

### 1️⃣ Navigate to Settings
```
GitHub Repo → Settings tab (top right)
```

### 2️⃣ Find Pages Section
```
Left Sidebar → Pages (near bottom)
```

### 3️⃣ Configure Source
**Branch:** Select `main`
**Folder:** Select `/ (root)`
**Click:** Save button

### 4️⃣ Wait for Deployment
- GitHub Actions will run (1-2 minutes)
- Page will show: "Your site is published at..."
- Click the link to test!

---

## Your Live URL Will Be:
```
https://gaurav-padaliya.github.io/love_birthday/
```

Or if it uses index.html:
```
https://gaurav-padaliya.github.io/love_birthday/index.html
```

---

## 🧪 Test Your Site

After deployment, open the URL and:
- [ ] Play through all 8 games
- [ ] Check images load (dummy SVGs)
- [ ] Test on mobile browser
- [ ] Verify all features work
- [ ] Make sure it's responsive

---

## 🐛 Troubleshooting

### Problem: "404 Page Not Found"
**Solution:** Wait 2-3 minutes more. GitHub Pages takes time to build.

### Problem: Images not loading
**Solution:** Check that all image paths are relative (they are!)
```javascript
// ✅ Correct (relative)
'assets/photos/photo1.svg'

// ❌ Wrong (absolute)
'/Users/gauravpadaliya/...'
```

### Problem: CSS not loading
**Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Problem: Site not updating
**Solution:**
1. Push changes to GitHub
2. Wait 2-3 minutes
3. Hard refresh browser

---

## 📝 To Update Content Later

### If You Replace Images:

1. **Replace dummy images locally:**
   ```bash
   cd /Users/gauravpadaliya/Documents/Personal/birthday-game/assets/photos
   # Replace quiz1.svg with your quiz1.jpg (or keep .svg name)
   ```

2. **Update code if changing extensions:**
   - Edit `js/main.js` to change `.svg` to `.jpg`
   - Edit `index.html` to change `.svg` to `.jpg`

3. **Commit and push:**
   ```bash
   cd /Users/gauravpadaliya/Documents/Personal/birthday-game
   git add .
   git commit -m "Updated with real photos"
   git push origin main
   ```

4. **Wait 2-3 minutes** for GitHub Pages to rebuild

---

## 🎯 Quick Commands (If You Make Changes)

```bash
# Navigate to project
cd /Users/gauravpadaliya/Documents/Personal/birthday-game

# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Your change description"

# Push to GitHub
git push origin main

# GitHub Pages will auto-update in 2-3 minutes!
```

---

## ✅ Deployment Checklist

Before sending to her:

- [ ] GitHub Pages enabled
- [ ] Site URL works
- [ ] All 8 games tested
- [ ] Mobile responsive verified
- [ ] Images load (at least dummies)
- [ ] No console errors (F12 in browser)
- [ ] Final message customized (optional)
- [ ] Real gift ready! 🎁

---

## 🎁 Alternative: Custom Domain (Optional)

If you have a custom domain:

1. Go to Pages settings
2. Under "Custom domain", enter your domain
3. Follow DNS setup instructions
4. Wait for DNS propagation (24-48 hours)

Not needed for now! The GitHub Pages URL works great!

---

## 💡 Pro Tips

### Tip 1: Test Before Sharing
Open the GitHub Pages URL in:
- Your phone's browser
- Private/Incognito mode
- Different browsers

### Tip 2: Short URL
If the URL is too long, use a URL shortener:
- bit.ly
- tinyurl.com
- Or just send the full URL!

### Tip 3: Send at Perfect Time
- Midnight for maximum romance
- Or when she wakes up
- Include a sweet message with the link!

### Tip 4: Be There
Try to be with her (video call?) when she plays it
So you can see her reaction! 📱

---

## 📧 Example Message to Send

```
Good morning my love! 🎂

I made something special for your birthday...

Click this link and play the game:
https://gaurav-padaliya.github.io/love_birthday/

Hope you enjoy it! 💕
Can't wait to see you! 🎁

Love you always ❤️
```

---

## 🚀 Status

**Repository:** ✅ Created and pushed
**Location:** https://github.com/gaurav-padaliya/love_birthday
**GitHub Pages:** ⏳ Waiting for you to enable it!
**Your URL:** https://gaurav-padaliya.github.io/love_birthday/

---

## 🎉 That's It!

In 5 minutes, you'll have a live website with your birthday game!

Just enable GitHub Pages in your repo settings!

**Good luck! She's going to love it! 💖🎂🎉**
