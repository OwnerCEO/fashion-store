<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Code:wght@300..700&family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Oxanium:wght@200..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="main.tsx"></script>
  </body>
</html>
CSS (index.css)
Located at client/src/index.css, this file defines the dark theme and vibrant pink accents.

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
  --font-display: 'Playfair Display', 'Hind Siliguri', serif;
  --font-body: 'Plus Jakarta Sans', 'Hind Siliguri', sans-serif;
  /* Dark Theme Palette */
  --background: 224 71% 4%;
  --foreground: 213 31% 91%;
  
  --primary: 346 84% 61%; /* Vibrant Pink/Red */
  --primary-foreground: 210 40% 98%;
  
  --secondary: 222 47% 11%;
  --secondary-foreground: 210 40% 98%;
  
  --card: 222 47% 10%;
  --card-foreground: 213 31% 91%;
  
  --popover: 222 47% 10%;
  --popover-foreground: 213 31% 91%;
  
  --muted: 223 47% 11%;
  --muted-foreground: 215.4 16.3% 56.9%;
  
  --accent: 346 84% 61%;
  --accent-foreground: 210 40% 98%;
  
  --destructive: 0 63% 31%;
  --destructive-foreground: 210 40% 98%;
  
  --border: 216 34% 17%;
  --input: 216 34% 17%;
  --ring: 346 84% 61%;
  
  --radius: 0.5rem;
}
@layer base {
  body {
    @apply bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white;
    font-family: var(--font-body);
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    @apply tracking-tight font-bold;
  }
}
/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
}
