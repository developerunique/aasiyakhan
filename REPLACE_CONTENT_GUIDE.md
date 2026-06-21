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

## 2. 🖼️ Photos (تصاویر) Kaise Badalni Hain:

Gallery ko fully custom banane ke liye aapko code me parameters change karne ki zaroorat nahi padegi. Humne safe local automatic dynamic fallback handler lagaya hai:

### **Step-by-Step Instruction:**
1. Apni baby ki 4 beautiful pictures select karein.
2. Un photos ke names change karke exact ye name rakhein:
   - Pehli photo ka naam: **`photo1.jpg`**
   - Dusri photo ka naam: **`photo2.jpg`**
   - Teesri photo ka naam: **`photo3.jpg`**
   - Chauthi photo ka naam: **`photo4.jpg`**
3. Google AI Studio ke left sidebar mein **`public`** naam ka folder hoga.
4. In charo photos (**`photo1.jpg`**, **`photo2.jpg`**, **`photo3.jpg`**, **`photo4.jpg`**) ko **`public`** folder ke andar upload / drop kar dein!
5. **Bas kam khatam!** Gallery automatically aapki photos load kar legi. Agar koi photo upload nahi hui hogi tab tak, toh elegant preview online photo tab tak chalti rahegi automatically bina error ke!

- **Photo locations configuration in code:**
  - File path: `/src/components/PhotoGallery.tsx` (Lines 8-30 ke andar image links defined hain)

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
