# 🌸 Aasiya Khan's Mubarak Website Customization Guide 🌸

Apni website par **photos (تصاویر)** aur **audio song/nasheed (نعت)** badalna bohot aasan hai! Aapko koi complex code edit karne ki zaroorat nahi hai. Sab kuch automatically replace ho jayega jab aap files sahi jagah upload karenge.

Niche diye gaye simple steps follow karein:

---

## 1. 🎵 Song / Nasheed (آڈیو گانا) Kaise Badalna Hai:

Aapka customized spiritual song system by default automatic play hone lagega jab bhi koi guest dynamic click karke enter karega (Kyuki normal Google Chrome browsers block kar dete hain jab tak koi user screen par click nahi karta, isliye user jab **"Enter Blessings 🤲"** button par click karega, tab audio background mein automatically play hona shuru ho jayega!).

### **Step-by-Step Instruction:**
1. Apni computer ya mobile se apna MP3 track select karein.
2. Us MP3 file ka naam badal kar exact format mein rakhein: **`nasheed.mp3`** (sari spelling small letters mein honi chahiye).
3. Google AI Studio ke left sidebar mein **`public`** naam ka folder hoga.
4. Us **`public`** folder ke andar **`nasheed.mp3`** ko upload ya drop kar dein!
5. **Bas ho gaya!** Jaise hi file upload hogi, humara code background mein dynamic trigger se fallback preview ko band karke aapka local `nasheed.mp3` play karne lagega automatic!

- **Vidoe/Audio default configuration file link:**
  - File path: `/src/components/AudioPlayer.tsx` (Line 6 par: `const DEFAULT_AUDIO_URL = "/nasheed.mp3"`)

---

## 2. 🖼️ Photos (تصاویر) aur Videos (ویڈیوز) Kaise Badalni Hain:

Gallery ko fully custom banane ke liye aapko code me parameters change karne ki zaroorat nahi padegi. Humne safe local automatic dynamic fallback handler lagaya hai:

### **Step-by-Step Instruction:**
1. Apni baby ki **2 photos** aur **2 videos** select karein.
2. Un files ke names change karke exact ye rakhein:
   - Pehli photo ka naam: **`photo1.jpg`**
   - Dusri photo ka naam: **`photo2.jpg`**
   - Pehli video ka naam: **`video1.mp4`**
   - Dusri video ka naam: **`video2.mp4`**
3. Google AI Studio ke left sidebar mein **`public`** folder par click karein.
4. In charo files (**`photo1.jpg`**, **`photo2.jpg`**, **`video1.mp4`**, **`video2.mp4`**) ko **`public`** folder ke andar upload / drag-and-drop kar dein!
5. **Bas kam khatam!** Portal automatic aapki custom photos aur soundless auto-playing videos ko load kar lega. Agar tab tak aap upload nahi karte hain, toh default online preview automatic chalta rehega bina kisi error ke!

- **Photo/Video locations configuration in code:**
  - File path: `/src/components/PhotoGallery.tsx` (Line 10-44 ke andar image & video paths defined hain)

---

## 3. 🗓️ Birthday Date (سالگرہ کی تاریخ) Kaise Badalna Hai:

Aasiya's birthday date ko humne **June 23, 2026** par perfectly state wise set kar diya hai!
- Agar aap countdown date check karna chahein ya edit karna chahein:
  - File path: `/src/components/CountdownTimer.tsx`
  - Line number 8 par: `const target = new Date("2026-06-23T00:00:00");`

---

### 💖 Pro-Tip (خاص بات):
- Aap koi bhi file `public` folder ke andar direct drag and drop karke upload kar sakte hain, isse background setup code smoothly real-time refresh ke saath render karega!
- Kisi code update ki tension nahi hai, sab kuch perfect layout me automatically sync ho chuka hai!
