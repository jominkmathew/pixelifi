/* ============================================================
   Pixelifi Photography Portfolio — Main JavaScript
   Custom cursor, loader, scroll animations, gallery filter,
   photo story modal, horizontal scroll, smooth nav
   ============================================================ */
// ── PHOTO DATA (replace with your own!) ──
const photoData = [
  {
    title: "Twilight Shore",
    category: "Places",
    image: "images/IMG_3004.jpg",
    date: "2025",
    location: "Thumba Beach, Thiruvananthapuram, Kerala, India",
    camera: "Captured at dusk",
    description: "The sky melted into shades of amber and violet as silhouettes drifted along the shoreline of Thumba Beach. Waves from the Arabian Sea crashed softly while strangers became living art against the fading light. The wet sand mirrored every figure, doubling their presence — as if the earth wanted to hold on to them a moment longer.",
    history: "Thumba Beach in Thiruvananthapuram holds a remarkable place in history — it is home to the Thumba Equatorial Rocket Launching Station (TERLS), where India's space programme was born in 1962. The very sands where families now stroll at sunset once served as the launchpad for India's first sounding rocket. Located on Kerala's southwest coast along the Arabian Sea, Thumba offers breathtaking sunsets where the sky blazes with colour before dipping below the endless horizon. The fishing village surrounding the beach has retained its old-world charm for generations.",
    tags: ["Beach", "Sunset", "Silhouette", "Twilight", "Kerala", "Thumba"]
  },
  {
    title: "Himalayan Glow",
    category: "Places",
    image: "images/1.JPG",
    date: "2025",
    location: "Himalayas, India",
    camera: "Captured at sunset",
    description: "Snow-capped Himalayan peaks catching the last golden light of sunset, while layered ridges fade into an endless blue haze below. The warm amber glow on the summits contrasts with the cool shadow of the valleys — a scene so vast and silent it makes you forget the world below exists.",
    history: "The Himalayas, meaning 'Abode of Snow' in Sanskrit, are the youngest and tallest mountain range on Earth, formed roughly 50 million years ago when the Indian tectonic plate collided with the Eurasian plate. Stretching over 2,400 km across five nations, the range is home to all 14 peaks above 8,000 metres, including Mount Everest. For millennia, these mountains have been sacred to Hinduism and Buddhism — sages, monks, and seekers have retreated here in search of spiritual awakening. The layered ridges visible in this photograph reveal the sub-ranges that gradually step up toward the Greater Himalayas.",
    tags: ["Mountains", "Himalayas", "Sunset", "Snow", "Landscape", "India"]
  },
  {
    title: "Above the Clouds",
    category: "Places",
    image: "images/IMG_0906.jpg",
    date: "2025",
    location: "Nandi Hills, Bangalore, Karnataka, India",
    camera: "Captured at dawn",
    description: "Early morning at Nandi Hills — a breathtaking sea of clouds stretching endlessly below, with dark hilltops piercing through like islands in a white ocean. The first light of dawn paints the horizon in soft pastels while the clouds roll and ripple in slow motion. Standing above the clouds at sunrise feels like floating between earth and sky.",
    history: "Nandi Hills (Nandidurga) rises to about 1,478 metres above sea level, roughly 60 km from Bangalore. Named after the sacred bull Nandi — the mount of Lord Shiva — the hill has served as a summer retreat since the days of Tipu Sultan, who built a fortress and a summer palace here in the 18th century. The British later turned it into a popular hill station. Today it is famous among photographers and trekkers for its spectacular cloud-sea phenomenon during early mornings, especially between October and February, when temperature inversions trap low clouds in the valleys below.",
    tags: ["Clouds", "Sunrise", "Nandi Hills", "Bangalore", "Landscape", "India"]
  },
  {
    title: "Thiruvalluvar Statue",
    category: "Places",
    image: "images/IMG_1759.jpg",
    date: "2025",
    location: "Kanyakumari, Tamil Nadu, India",
    camera: "Captured at the southern tip of India",
    description: "The towering 133-foot statue of Tamil poet-saint Thiruvalluvar stands majestically on a small rock island just off the shore of Kanyakumari — the southernmost point of mainland India where the Arabian Sea, the Bay of Bengal, and the Indian Ocean converge. The statue rises above the waves like a sentinel of wisdom, its sheer scale humbling against the vast expanse of three merging seas.",
    history: "The Thiruvalluvar Statue was unveiled on January 1, 2000, and stands 133 feet tall — symbolising the 133 chapters (athikarams) of the Thirukkural, the ancient Tamil ethical masterpiece written by Thiruvalluvar over 2,000 years ago. The statue sits atop a 38-foot pedestal on a rock island near the Vivekananda Rock Memorial. Kanyakumari itself has been a sacred pilgrimage site for centuries, named after the goddess Kanya Kumari (the virgin goddess). Visitors flock here to witness the rare spectacle of sunrise and sunset over the ocean from the same spot, and on full moon evenings in April, the sun setting and moon rising can be seen simultaneously on opposite horizons.",
    tags: ["Statue", "Kanyakumari", "Tamil Nadu", "Heritage", "Ocean", "India"]
  },
  {
    title: "Kanakakkunnu Palace",
    category: "Places",
    image: "images/IMG_1993.jpg",
    date: "2025",
    location: "Kanakakkunnu, Thiruvananthapuram, Kerala, India",
    camera: "Captured at the palace grounds",
    description: "Kanakakkunnu Palace sits gracefully atop a small hillock in the heart of Thiruvananthapuram, its elegant facade framed by lush tropical greenery. The palace exudes a quiet royal dignity — arched corridors, ornate pillars, and open verandas speak of an era when grand banquets and cultural gatherings filled these halls with music and laughter.",
    history: "Built during the reign of the Travancore royal family in the late 19th century, Kanakakkunnu Palace (meaning 'hill of gold') served as a venue for hosting royal guests, grand banquets, and entertainment. The Maharajas of Travancore used it primarily for parties and to entertain visitors from other kingdoms. After Indian independence, the palace came under the Kerala state government and now hosts cultural events, exhibitions, and the famous Nishagandhi Dance Festival held in its open-air amphitheatre. The surrounding grounds, known as the Kanakakkunnu Palace Grounds, are a popular public space in the city.",
    tags: ["Palace", "Heritage", "Architecture", "Kerala", "Travancore", "Thiruvananthapuram"]
  },
  {
    title: "Poovar Island",
    category: "Places",
    image: "images/IMG_2465.jpg",
    date: "2025",
    location: "Poovar, Thiruvananthapuram, Kerala, India",
    camera: "Captured at the island",
    description: "Poovar Island — a hidden gem where the backwaters embrace the Arabian Sea. Lush coconut palms lean over still golden waters, and narrow canals wind through dense mangroves to reveal a pristine, secluded beach. The island feels untouched by time, a place where nature still writes all the rules.",
    history: "Poovar is a tiny coastal village about 30 km south of Thiruvananthapuram, sitting at the confluence of the Neyyar River and the Arabian Sea. The island is accessible only by boat, which adds to its secluded charm. For centuries, Poovar was a quiet fishing hamlet known only to locals. Its golden sand estuary, bordered by mangrove forests and coconut groves, remained largely undiscovered until eco-tourism brought visitors seeking an alternative to crowded beaches. The floating cottages on the backwaters have become iconic, offering guests the surreal experience of sleeping above the water surrounded by nothing but sky and palms.",
    tags: ["Island", "Backwaters", "Beach", "Kerala", "Nature", "Poovar"]
  },
  {
    title: "Dhanushkodi Bridge",
    category: "Places",
    image: "images/IMG_4173.jpg",
    date: "2025",
    location: "Dhanushkodi, Rameswaram, Tamil Nadu, India",
    camera: "Captured at the ghost town",
    description: "The ruins of Dhanushkodi Bridge stand as a haunting reminder of nature's fury — skeletal remnants stretching across the narrow strip of land where the Bay of Bengal meets the Indian Ocean. The abandoned bridge, battered by decades of wind and salt, frames a view of endless turquoise water and white sand. It is a landscape that feels like the edge of the world.",
    history: "Dhanushkodi, meaning 'the end of Rama's bow,' is the southeasternmost tip of Pamban Island in Tamil Nadu. According to Hindu mythology, this is where Lord Rama built the legendary bridge (Ram Setu / Adam's Bridge) to Lanka. The town was a thriving settlement with a railway station, post office, and a population of over 5,000 — until the devastating cyclone of December 22, 1964, which wiped it off the map in a single night with winds over 280 km/h and a massive storm surge. The Indian government declared it unfit for habitation. Today, the ghost town's ruins — including this bridge — draw photographers, pilgrims, and history seekers to one of India's most hauntingly beautiful places.",
    tags: ["Ruins", "Bridge", "Dhanushkodi", "Rameswaram", "Tamil Nadu", "India"]
  },
  {
    title: "Sea Sunlight",
    category: "Places",
    image: "images/IMG_4204.jpg",
    date: "2025",
    location: "Indian Coast",
    camera: "Captured at the sea",
    description: "Sunlight piercing through the sky and scattering across the open sea — a dazzling display of golden rays dancing on the water's surface. The ocean transforms into a shimmering canvas of light and shadow, each wave catching and releasing the sun in a fleeting sparkle. It's the kind of moment that stops you mid-step and forces you to just stand and watch.",
    history: "Since the dawn of human civilization, the sight of sunlight meeting the sea has held deep spiritual and artistic significance. Sailors once navigated by the angle of sunlight on water. Painters from Turner to Monet spent lifetimes trying to capture the way light fractures across waves. In Indian coastal tradition, the meeting of light and ocean is considered auspicious — many temples along India's coastline are positioned to align with the sun's path over the sea during festivals and solstices.",
    tags: ["Sea", "Sunlight", "Ocean", "Golden", "Waves", "Nature"]
  },
  {
    title: "Dhanushkodi Church",
    category: "Places",
    image: "images/IMG_4217.jpg",
    date: "2025",
    location: "Dhanushkodi, Rameswaram, Tamil Nadu, India",
    camera: "Captured at the ghost town ruins",
    description: "The haunting skeleton of Dhanushkodi Church stands against an empty sky — roofless walls and hollow windows that once echoed with hymns and prayers. Nature has slowly reclaimed the structure, with sand creeping through the nave and sky replacing the ceiling. It is ruin at its most beautiful and heartbreaking.",
    history: "This church was one of the few standing structures in Dhanushkodi before the catastrophic cyclone of 1964 that destroyed the entire town. Built during the British era to serve the local Christian community, the church survived partially — its walls still stand while everything else around it was flattened. Today, these ruins are among the most photographed landmarks in Dhanushkodi, a symbol of resilience against nature's fury. The ghost town was declared unfit for living after the cyclone, and no reconstruction was ever undertaken.",
    tags: ["Ruins", "Church", "Dhanushkodi", "Heritage", "Tamil Nadu"]
  },
  {
    title: "Dhanushkodi Lighthouse",
    category: "Places",
    image: "images/IMG_4220.jpg",
    date: "2025",
    location: "Dhanushkodi, Rameswaram, Tamil Nadu, India",
    camera: "Captured at the coastline",
    description: "The Dhanushkodi Lighthouse rises from the narrow sand spit like a lone sentinel watching over the meeting point of two seas. Surrounded by nothing but sand, waves, and wind, the lighthouse stands in stark contrast to the desolation around it — a beacon that once guided ships now guides photographers and pilgrims.",
    history: "The lighthouse at Dhanushkodi marks one of the most geographically unique points in India — where the Bay of Bengal and the Indian Ocean visibly merge. The original lighthouse served as a navigational aid for ships passing through the treacherous Palk Strait between India and Sri Lanka. After the 1964 cyclone destroyed the town, the area remained largely abandoned, but the lighthouse continued to serve its purpose. The narrow land strip here is part of the mythological Ram Setu, the bridge Lord Rama is said to have built to cross to Lanka.",
    tags: ["Lighthouse", "Dhanushkodi", "Coastal", "Tamil Nadu", "India"]
  },
  {
    title: "Mateer Memorial Church",
    category: "Places",
    image: "images/IMG_4647.jpg",
    date: "2025",
    location: "Thiruvananthapuram, Kerala, India",
    camera: "Captured at the church grounds",
    description: "The Mateer Memorial CSI Church stands as one of Thiruvananthapuram's most striking architectural landmarks — its Gothic-style spire reaching skyward amid the bustling city. The intricate brickwork, stained glass windows, and towering facade create a sense of reverence that transcends time, blending colonial-era craftsmanship with spiritual grace.",
    history: "Built in 1871 and named after Reverend Samuel Mateer, a London Missionary Society (LMS) missionary who dedicated decades to social and educational reform in Travancore, this church is one of the finest examples of Gothic Revival architecture in South India. Rev. Mateer was instrumental in fighting caste discrimination and promoting education among marginalized communities. The church, located in the heart of Palayam, serves as the cathedral of the CSI South Kerala Diocese. Its red-brick exterior, arched windows, and twin towers make it a city landmark visible from afar.",
    tags: ["Church", "Architecture", "Gothic", "Kerala", "Thiruvananthapuram", "Heritage"]
  },
  {
    title: "New Dubai",
    category: "Places",
    image: "images/IMG_5114.jpg",
    date: "2025",
    location: "Dubai, United Arab Emirates",
    camera: "Captured in New Dubai",
    description: "The futuristic skyline of New Dubai rises from the desert like a mirage made real — glass towers, impossibly tall skyscrapers, and architectural marvels competing to touch the sky. The cityscape gleams under the sun, a testament to human ambition transforming barren sand into one of the world's most dazzling urban landscapes.",
    history: "Just 50 years ago, Dubai was a modest trading port known for pearl diving and fishing. The discovery of oil in 1966 ignited a transformation that has no parallel in modern history. New Dubai — the area beyond the historic Creek — is home to the world's tallest building (Burj Khalifa, 828m), the largest artificial islands, and a skyline that changes every few years. What makes Dubai remarkable isn't just its wealth, but its vision: a city that decided to build its future before oil ran out, investing in tourism, finance, and technology.",
    tags: ["Cityscape", "Skyline", "Dubai", "Modern", "Architecture", "UAE"]
  },
  {
    title: "Dubai Marina",
    category: "Places",
    image: "images/IMG_5200.jpg",
    date: "2025",
    location: "Dubai Marina, Dubai, UAE",
    camera: "Captured at the marina",
    description: "Dubai Marina — a forest of glass and steel towers reflecting in the calm waters of the artificial canal. Luxury yachts line the waterfront while the twisting and spiralling skyscrapers create a canyon of modern architecture. At night or at golden hour, the marina transforms into a glittering spectacle of light and water.",
    history: "Dubai Marina is the world's largest man-made marina, carved from the desert along a 3-kilometre stretch of the Persian Gulf shoreline. Developed in the early 2000s, the area was once empty sand. Today it features over 200 high-rise buildings, including the iconic Cayan Tower (the world's tallest twisted tower at 307m). The canal at its centre was entirely man-made, allowing sea water to flow inland and creating a waterfront lifestyle in the middle of the desert. The Marina Walk promenade has become one of Dubai's most popular destinations.",
    tags: ["Marina", "Dubai", "Skyline", "Urban", "Waterfront", "UAE"]
  },
  {
    title: "Vizhinjam Harbour",
    category: "Places",
    image: "images/IMG_7860.jpg",
    date: "2025",
    location: "Vizhinjam, Thiruvananthapuram, Kerala, India",
    camera: "Captured at the harbour",
    description: "Vizhinjam Harbour — where colourful fishing boats bob gently on turquoise waters against a backdrop of rocky coastline and coconut palms. The harbour buzzes with the daily rhythm of fishermen heading out to sea and returning with their catch. It's a place where tradition meets the vast open ocean.",
    history: "Vizhinjam has been a natural harbour for over a thousand years. Ancient Chera dynasty records mention it as a thriving port. The Chinese traveller Ma Huan described it in the 15th century. Once the capital of the Ay dynasty, Vizhinjam was a major trade centre connecting India to the spice routes of Southeast Asia and the Middle East. Today, apart from its traditional fishing community, Vizhinjam is home to India's first deep-water international transhipment port — a massive infrastructure project that will make it one of the deepest ports in the country. The ancient rock-cut cave temple near the harbour dates back to the 8th century.",
    tags: ["Harbour", "Fishing", "Coastal", "Kerala", "Vizhinjam", "Thiruvananthapuram"]
  },
  {
    title: "Machhapuchhare",
    category: "Places",
    image: "images/IMG_9352.jpg",
    date: "2025",
    location: "Annapurna Range, Nepal",
    camera: "Captured from the trekking trail",
    description: "Machhapuchhare — the sacred 'Fish Tail' mountain — piercing through the clouds with its distinctive twin-peaked summit. The mountain's perfectly symmetrical shape and the way it catches the first and last light of day make it one of the most photographed peaks in the Himalayas. Its beauty is matched only by its mystique.",
    history: "Machhapuchhare (6,993m) is one of the most recognisable mountains in Nepal, named for its double summit that resembles a fish's tail. It is considered sacred to Lord Shiva, and the Nepalese government has declared it completely off-limits to climbers. No one has ever officially stood on its summit. The only attempt was in 1957 by a British team led by Jimmy Roberts, who turned back 50 metres short of the top out of respect for its sacred status. It stands as a guardian at the entrance to the Annapurna Sanctuary, visible from Pokhara city on clear days.",
    tags: ["Mountain", "Himalayas", "Nepal", "Machhapuchhare", "Sacred", "Landscape"]
  },
  {
    title: "Eagle in Flight",
    category: "Dark & Moody",
    image: "images/IMG_9457.jpg",
    date: "2025",
    location: "Indian Skies",
    camera: "Captured in the wild",
    description: "An eagle soaring through the sky with wings fully spread — a breathtaking display of power and grace frozen in a single frame. The bird commands the air with effortless precision, riding thermals and scanning the world below with razor-sharp eyes. There is no more perfect symbol of freedom than a raptor in flight.",
    history: "Eagles have been revered across cultures for millennia as symbols of power, vision, and freedom. In Indian mythology, Garuda — the king of birds and mount of Lord Vishnu — is depicted as a giant eagle. India is home to several eagle species, including the magnificent Indian Spotted Eagle, Bonelli's Eagle, and the Crested Serpent Eagle. Photographing an eagle in flight requires patience, quick reflexes, and often hours of silent waiting. The split-second when the bird banks against the wind with wings fully extended is one of wildlife photography's most rewarding moments.",
    tags: ["Eagle", "Wildlife", "Bird", "Flight", "Nature", "Moody"]
  },
  {
    title: "Beach Friendship",
    category: "Places",
    image: "images/IMG_9863.jpg",
    date: "2025",
    location: "Indian Coastline",
    camera: "Captured at the beach",
    description: "Friends sharing a moment by the sea — silhouettes against the fading sky, laughter mixing with the rhythm of the waves. There's something about the beach that strips away pretence and brings people closer. The sand, the salt air, the endless horizon — it all becomes the backdrop for memories that last forever.",
    history: "Beaches have always been gathering places for communities. Along India's 7,500 km coastline, beaches serve as everything from fishing grounds to festival venues to evening hangout spots. The tradition of friends gathering at the shore during sunset is deeply woven into coastal Indian culture — from Marina Beach in Chennai to Kovalam in Kerala to Juhu in Mumbai. These informal gatherings at the water's edge are where friendships deepen, stories get shared, and the simple act of watching the sun dip below the horizon becomes a ritual of togetherness.",
    tags: ["Beach", "Friendship", "Sunset", "People", "Coastal", "India"]
  },
  {
    title: "Munroe Island",
    category: "Places",
    image: "images/IMG_20220613_185131_Original.jpg",
    date: "2022",
    location: "Munroe Island, Kollam, Kerala, India",
    camera: "Captured at the backwaters",
    description: "Munroe Island — a cluster of tiny islands woven together by canals, backwaters, and lush coconut groves in Kerala's serene Kollam district. The golden light of sunset spills over mirror-still waters, palm fronds sway gently, and country boats glide silently through narrow waterways. Time seems to stop here.",
    history: "Munroe Island (Munroethuruthu) is named after Colonel John Munro, the British Resident of Travancore in the early 19th century, who ordered the construction of canals connecting Ashtamudi Lake to Kallada River. This network of eight small islands sits at the confluence of Ashtamudi Lake and the Kallada River. The island is famous for its coir-making industry, prawn farming, and the spectacular 'Perunthenaruvi' phenomenon where fresh river water and salt backwater visibly meet. Canoe rides through the narrow canals offer one of Kerala's most authentic backwater experiences, far from the tourist crowds of Alleppey.",
    tags: ["Backwaters", "Island", "Kerala", "Kollam", "Sunset", "Nature"]
  }
];
window.photoData = photoData;


// ── CUSTOM CURSOR ──
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
  });

  function followCursor() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.transform = `translate(${fx - 20}px, ${fy - 20}px)`;
    requestAnimationFrame(followCursor);
  }
  followCursor();

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .gallery-item, .polaroid, .cine-slide, input, textarea');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();


// ── LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    // Staggered hero reveal — each element paints in with increasing delay
    document.querySelectorAll('.hero .reveal-text').forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), 600 + i * 220);
    });
  }, 1800);
});


// ── NAVIGATION ──
(function initNav() {
  const nav = document.getElementById('nav');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Mobile menu
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();


// ── ARTISTIC SCROLL REVEAL (GSAP ScrollTrigger) ──
(function initScrollReveal() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Brush-wipe text reveal — stagger siblings within their parent
  var revealGroups = {};
  document.querySelectorAll('.reveal-text:not(.hero .reveal-text)').forEach(function (el) {
    var parent = el.parentElement;
    if (!revealGroups[parent]) revealGroups[parent] = [];
    // Only register trigger per parent once
    if (revealGroups[parent].length === 0) {
      ScrollTrigger.create({
        trigger: parent,
        start: 'top 82%',
        once: true,
        onEnter: function () {
          var children = revealGroups[parent];
          children.forEach(function (child, idx) {
            setTimeout(function () { child.classList.add('revealed'); }, idx * 180);
          });
        },
      });
    }
    revealGroups[parent].push(el);
  });

  // Paint-slide reveal for images
  document.querySelectorAll('.reveal-slide').forEach(function (el) {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 78%',
      once: true,
      onEnter: function () { el.classList.add('revealed'); },
    });
  });

  // Ink-drop reveal for any .reveal-ink elements
  document.querySelectorAll('.reveal-ink').forEach(function (el) {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: function () { el.classList.add('revealed'); },
    });
  });

  // Brush-wipe reveal for .reveal-brush elements
  document.querySelectorAll('.reveal-brush').forEach(function (el) {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: function () { el.classList.add('revealed'); },
    });
  });

  // Gallery items — staggered cascade with artistic timing
  document.querySelectorAll('.gallery-item').forEach(function (item, i) {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 92%',
      once: true,
      onEnter: function () {
        setTimeout(function () { item.classList.add('visible'); }, i * 120);
      },
    });
  });

  // Parallax hero bg — slow paint drift
  gsap.to('.hero-bg-image', {
    yPercent: 15,
    scale: 1.05,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
  });

  // Section headers — subtle parallax float
  document.querySelectorAll('.section-header').forEach(function (header) {
    gsap.to(header, {
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: header,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      }
    });
  });

  // Polaroid wall — stagger-scatter on scroll
  document.querySelectorAll('.polaroid').forEach(function (pol, i) {
    gsap.from(pol, {
      opacity: 0,
      y: 40 + (i % 3) * 15,
      rotation: (i % 2 === 0 ? -5 : 5),
      scale: 0.85,
      duration: 0.7,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: pol,
        start: 'top 90%',
        once: true,
      },
      delay: i * 0.08,
    });
  });

  // Counter animation — artistic count-up
  document.querySelectorAll('.stat-number').forEach(function (el) {
    var target = parseInt(el.textContent);
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        gsap.from(el, {
          textContent: 0,
          duration: 2.5,
          ease: 'power3.out',
          snap: { textContent: 1 },
          onUpdate: function () {
            el.textContent = Math.ceil(parseFloat(el.textContent)) + (el.dataset.suffix || '+');
          }
        });
      }
    });
    el.dataset.suffix = el.textContent.replace(/[0-9]/g, '');
  });
})();


// ── GALLERY FILTER & DESTINATION CARDS ──
(function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  const destinationsGrid = document.getElementById('destinations-grid');
  const galleryGrid = document.getElementById('gallery-grid');
  const backBar = document.getElementById('gallery-back-bar');
  const backBtn = document.getElementById('back-to-destinations');
  const locationTitle = document.getElementById('gallery-location-title');
  const destinationCards = document.querySelectorAll('.destination-card');
  const exploreBtns = document.querySelectorAll('.explore-btn');

  const locationNames = {
    thiruvananthapuram: 'Thiruvananthapuram',
    dhanushkodi: 'Dhanushkodi',
    dubai: 'Dubai',
    himalayas: 'Himalayas & Nepal',
    others: 'Other Places'
  };

  // Animate destination cards on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  destinationCards.forEach(card => observer.observe(card));

  function showDestinations() {
    destinationsGrid.style.display = '';
    galleryGrid.style.display = 'none';
    backBar.style.display = 'none';
    filterBtns.forEach(b => {
      b.classList.remove('active');
      if (b.dataset.filter === 'all') b.classList.add('active');
    });
  }

  function showGallery(location) {
    destinationsGrid.style.display = 'none';
    galleryGrid.style.display = '';
    backBar.style.display = '';
    locationTitle.textContent = locationNames[location] || location;

    items.forEach((item, i) => {
      const matches = location === 'all' || item.dataset.category === location;
      if (matches) {
        item.classList.remove('hidden-filter');
        item.style.transitionDelay = `${i * 50}ms`;
        // Re-trigger visible animation
        item.classList.remove('visible');
        setTimeout(() => item.classList.add('visible'), 50 + i * 80);
      } else {
        item.classList.add('hidden-filter');
        item.classList.remove('visible');
      }
    });

    // Scroll to gallery
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Explore More buttons on destination cards
  exploreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const location = btn.dataset.location;
      filterBtns.forEach(b => {
        b.classList.remove('active');
        if (b.dataset.filter === location) b.classList.add('active');
      });
      showGallery(location);
    });
  });

  // Clicking destination card itself also opens
  destinationCards.forEach(card => {
    card.addEventListener('click', () => {
      const location = card.dataset.location;
      filterBtns.forEach(b => {
        b.classList.remove('active');
        if (b.dataset.filter === location) b.classList.add('active');
      });
      showGallery(location);
    });
  });

  // Back to destinations
  backBtn.addEventListener('click', showDestinations);

  // Filter tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      if (filter === 'all') {
        showDestinations();
      } else {
        showGallery(filter);
      }
    });
  });
})();


// ── PHOTO STORY MODAL ──
(function initStoryModal() {
  const modal = document.getElementById('story-modal');
  const closeBtn = document.getElementById('story-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  function openStory(index) {
    const data = photoData[index];
    if (!data) return;

    document.getElementById('story-img').src = data.image;
    document.getElementById('story-img').alt = data.title;
    document.getElementById('story-category').textContent = data.category;
    document.getElementById('story-title').textContent = data.title;
    document.getElementById('story-date').textContent = data.date;
    document.getElementById('story-location').textContent = data.location;
    document.getElementById('story-camera').textContent = data.camera;
    document.getElementById('story-desc').textContent = data.description;
    document.getElementById('story-history').textContent = data.history;

    const tagsContainer = document.getElementById('story-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeStory() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      openStory(parseInt(item.dataset.index));
    });
  });

  closeBtn.addEventListener('click', closeStory);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeStory();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStory();
  });

  // Also open from polaroid clicks
  document.querySelectorAll('.polaroid').forEach(function (pol) {
    pol.addEventListener('click', function () {
      var alt = pol.querySelector('img').getAttribute('alt') || '';
      var match = window.photoData ? window.photoData.findIndex(function (p) { return p.title === alt; }) : -1;
      if (match >= 0) openStory(match);
    });
  });
})();


// ── CONTACT FORM (validation + success animation) ──
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');
  var feedback = document.getElementById('form-feedback');

  function validateField(input, test, errMsg) {
    var group = input.closest('.form-group');
    var existing = group.querySelector('.error-msg');
    if (!test) {
      group.classList.add('error');
      group.classList.remove('success');
      if (!existing) {
        var msg = document.createElement('div');
        msg.className = 'error-msg';
        msg.textContent = errMsg;
        group.appendChild(msg);
      } else {
        existing.textContent = errMsg;
      }
      return false;
    } else {
      group.classList.remove('error');
      group.classList.add('success');
      if (existing) existing.remove();
      return true;
    }
  }

  // Real-time validation on blur
  if (nameInput) nameInput.addEventListener('blur', function () {
    validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your name');
  });
  if (emailInput) emailInput.addEventListener('blur', function () {
    var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    validateField(emailInput, valid, 'Please enter a valid email');
  });
  if (messageInput) messageInput.addEventListener('blur', function () {
    validateField(messageInput, messageInput.value.trim().length >= 10, 'Message should be at least 10 characters');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var v1 = validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your name');
    var v2 = validateField(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value), 'Please enter a valid email');
    var v3 = validateField(messageInput, messageInput.value.trim().length >= 10, 'Message should be at least 10 characters');

    if (!v1 || !v2 || !v3) {
      if (feedback) {
        feedback.className = 'form-feedback error show';
        feedback.textContent = 'Please fix the errors above';
        setTimeout(function () { feedback.classList.remove('show'); }, 3000);
      }
      return;
    }

    // Simulate sending
    var btn = form.querySelector('.submit-btn');
    btn.classList.add('sending');
    btn.querySelector('span').textContent = 'Sending';

    setTimeout(function () {
      btn.classList.remove('sending');
      btn.querySelector('span').textContent = 'Send Message';
      form.reset();
      form.querySelectorAll('.form-group').forEach(function (g) {
        g.classList.remove('success', 'error');
      });
      if (feedback) {
        feedback.className = 'form-feedback success show';
        feedback.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        setTimeout(function () { feedback.classList.remove('show'); }, 5000);
      }
    }, 1500);
  });
})();


// ── SMOOTH ANCHOR SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── SCROLL PROGRESS BAR ──
(function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + '%';
  }, { passive: true });
})();


// ── NAV ACTIVE SECTION TRACKING ──
(function initNavActiveTracking() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  function updateActive() {
    var scrollY = window.scrollY + 200;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active-section');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active-section');
          }
        });
      }
    });
    // Remove all if at very top (hero)
    if (window.scrollY < 300) {
      navLinks.forEach(function (link) { link.classList.remove('active-section'); });
    }
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();


// ── FOOTER REVEAL ON SCROLL ──
(function initFooterReveal() {
  var footer = document.getElementById('footer');
  if (!footer) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        footer.classList.add('revealed');
        observer.unobserve(footer);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(footer);
})();


// ── HERO LOCATION TAGS STAGGER ──
(function initHeroLocStagger() {
  var locs = document.querySelectorAll('.hero-loc');
  if (!locs.length) return;
  // Wait for loader to finish, then stagger location tags
  setTimeout(function () {
    locs.forEach(function (loc, i) {
      setTimeout(function () {
        loc.classList.add('anim-in');
      }, i * 150);
    });
  }, 3200); // after hero reveal finishes (~1800 loader + ~1400 reveal)
})();


// ── SECTION NUMBER DRAW ANIMATION ──
(function initSectionNumberDraw() {
  if (typeof IntersectionObserver === 'undefined') return;
  var numbers = document.querySelectorAll('.section-number');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-draw');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  numbers.forEach(function (num) { observer.observe(num); });
})();


// ── CONTACT INFO STAGGER REVEAL ──
(function initContactInfoReveal() {
  if (typeof IntersectionObserver === 'undefined') return;
  var items = document.querySelectorAll('.contact-info-item, .contact-social');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Stagger siblings
        var parent = entry.target.parentElement;
        var children = parent.querySelectorAll('.contact-info-item, .contact-social');
        children.forEach(function (child, i) {
          setTimeout(function () {
            child.classList.add('revealed');
          }, i * 200);
        });
        // Unobserve all
        children.forEach(function (c) { observer.unobserve(c); });
      }
    });
  }, { threshold: 0.2 });
  items.forEach(function (item) { observer.observe(item); });
})();


// ── DESTINATION CARD 3D TILT ON MOUSEMOVE ──
(function initCardTilt() {
  var cards = document.querySelectorAll('.destination-card');
  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var img = card.querySelector('.destination-img');
      if (img) {
        img.style.transform = 'rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) scale(1.02)';
      }
    });
    card.addEventListener('mouseleave', function () {
      var img = card.querySelector('.destination-img');
      if (img) {
        img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
      }
    });
  });
})();


// ── GALLERY IMAGE INNER PARALLAX ON MOUSEMOVE ──
(function initGalleryParallax() {
  var items = document.querySelectorAll('.gallery-item');
  items.forEach(function (item) {
    item.addEventListener('mousemove', function (e) {
      var rect = item.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var img = item.querySelector('.gallery-img-wrap img');
      if (img) {
        img.style.transform = 'scale(1.12) translate(' + (x * -10) + 'px, ' + (y * -10) + 'px)';
      }
    });
    item.addEventListener('mouseleave', function () {
      var img = item.querySelector('.gallery-img-wrap img');
      if (img) {
        img.style.transform = '';
      }
    });
  });
})();


// ── FLOATING HERO PARTICLES ──
(function initHeroParticles() {
  var container = document.getElementById('hero-particles');
  if (!container) return;
  var count = 25;
  for (var i = 0; i < count; i++) {
    var p = document.createElement('div');
    p.className = 'particle';
    var size = 2 + Math.random() * 4;
    var dur = 8 + Math.random() * 12;
    var delay = Math.random() * dur;
    var startX = Math.random() * 100;
    var startY = Math.random() * 100;
    var dx = (Math.random() - 0.5) * 150;
    var dy = -(50 + Math.random() * 200);
    var opa = 0.2 + Math.random() * 0.4;
    p.style.cssText =
      'left:' + startX + '%;top:' + startY + '%;' +
      '--size:' + size + 'px;--dur:' + dur + 's;--dx:' + dx + 'px;--dy:' + dy + 'px;--opa:' + opa + ';' +
      'animation-delay:' + delay + 's;';
    container.appendChild(p);
  }
})();


// ── TEXT SCRAMBLE EFFECT ON SECTION TITLES ──
(function initTextScramble() {
  var chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~';
  var titles = document.querySelectorAll('.section-title');
  titles.forEach(function (title) {
    var originalText = title.textContent;
    title.addEventListener('mouseenter', function () {
      var iterations = 0;
      var len = originalText.length;
      var interval = setInterval(function () {
        title.textContent = originalText.split('').map(function (char, i) {
          if (i < iterations) return originalText[i];
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        iterations += 1;
        if (iterations > len) {
          clearInterval(interval);
          title.textContent = originalText;
        }
      }, 35);
    });
  });
})();


// ── IMAGE BLUR-UP LAZY LOADING ──
(function initBlurUp() {
  var images = document.querySelectorAll('.gallery-img-wrap img[loading="lazy"], .destination-img img[loading="lazy"], .polaroid-photo img[loading="lazy"]');
  if (!images.length) return;

  images.forEach(function (img) {
    if (!img.complete) {
      img.classList.add('lazy-blur');
      img.addEventListener('load', function () {
        requestAnimationFrame(function () {
          img.classList.remove('lazy-blur');
          img.classList.add('lazy-loaded');
        });
      }, { once: true });
    } else {
      img.classList.add('lazy-loaded');
    }
  });
})();
