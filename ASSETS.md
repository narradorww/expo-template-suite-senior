# 📱 Assets Configuration Guide

## Required Assets

Before running your app, you need to add the following assets to your project:

### 📁 Create Assets Directory

```bash
mkdir assets
```

### 🖼️ Required Images

1. **App Icon** (`assets/icon.png`)
   - Size: 1024x1024 pixels
   - Format: PNG with transparency
   - Used for: App stores, device home screen

2. **Splash Screen** (`assets/splash.png`)
   - Size: 1284x2778 pixels (iPhone 13 Pro Max)
   - Format: PNG
   - Used for: App loading screen

3. **Adaptive Icon** (`assets/adaptive-icon.png`) - Android only
   - Size: 1024x1024 pixels
   - Format: PNG with transparency
   - Used for: Android adaptive icons

4. **Favicon** (`assets/favicon.png`) - Web only
   - Size: 16x16, 32x32, or 48x48 pixels
   - Format: PNG
   - Used for: Browser tab icon

### ⚙️ Update app.json

After creating your assets, update your `app.json`:

```json
{
  "expo": {
    "name": "YourAppName",
    "slug": "your-app-slug",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#0ea5e9"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#0ea5e9"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

### 🎨 Design Tips

- **Use your brand colors** for splash screen background
- **Keep icons simple** and recognizable at small sizes
- **Test on different devices** to ensure assets look good
- **Use vector graphics** when possible for better scaling

### 🚀 Quick Start

For testing purposes, you can generate placeholder assets using online tools:
- [Expo Icon Generator](https://buildicon.netlify.app/)
- [App Icon Generator](https://www.appicon.co/)
- [Favicon Generator](https://favicon.io/)

Or create simple colored squares using any image editor with the dimensions specified above.