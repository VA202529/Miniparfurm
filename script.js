
  <script>
    // Default configuration
    const defaultConfig = {
      background_color: '#FFF8F0',
      surface_color: '#F5C9B8',
      text_color: '#A6563F',
      primary_action_color: '#A6563F',
      secondary_action_color: '#D4A574',
      font_family: 'Cormorant Garamond',
      font_size: 16,
      brand_name: 'Mini Parfums',
      tagline: 'Elegantie in Miniatuur',
      hero_heading: 'Ontdek Jouw Signatuur Geur',
      hero_subtext: 'Luxe parfumerie in de perfecte maat. Elke druppel is vakmanschap, elke geur een verhaal.',
      collection_title: 'Onze Collectie',
      about_title: 'Ons Verhaal',
      about_text: 'We geloven in de macht van kleine, perfecte dingen. Ons mini-parfum collectie is het resultaat van jaren research naar de ideale formule — luxe concentratie in de meest elegante maat. Handgekozen ingrediënten van wereldklasse, gemengd met passie, geflest met trots.',
      cta_button_text: 'Ontdek de Collectie'
    };

    function applyConfig(config) {
      const bg = config.background_color || defaultConfig.background_color;
      const surface = config.surface_color || defaultConfig.surface_color;
      const text = config.text_color || defaultConfig.text_color;
      const primary = config.primary_action_color || defaultConfig.primary_action_color;
      const accent = config.secondary_action_color || defaultConfig.secondary_action_color;
      const fontHeading = (config.font_family || defaultConfig.font_family) + ', Georgia, serif';
      const fontBody = 'Lato, sans-serif';
      const baseSize = config.font_size || defaultConfig.font_size;

      // Background
      document.body.style.backgroundColor = bg;

      // Apply text color to body
      document.body.style.color = text;

      // Navbar
      const nav = document.getElementById('navbar');
      nav.style.background = `rgba(${hexToRgb(bg)}, 0.85)`;

      // Brand
      const navBrand = document.getElementById('nav-brand');
      navBrand.textContent = config.brand_name || defaultConfig.brand_name;
      navBrand.style.color = primary;
      navBrand.style.fontFamily = fontHeading;
      navBrand.style.fontSize = `${baseSize * 1.3}px`;

      const footerBrand = document.getElementById('footer-brand');
      footerBrand.textContent = config.brand_name || defaultConfig.brand_name;
      footerBrand.style.fontFamily = fontHeading;
      footerBrand.style.color = surface;

      // Hero
      const heroTagline = document.getElementById('hero-tagline');
      heroTagline.textContent = config.tagline || defaultConfig.tagline;
      heroTagline.style.color = primary;
      heroTagline.style.fontSize = `${baseSize * 0.8}px`;

      const heroHeading = document.getElementById('hero-heading');
      const headingText = config.hero_heading || defaultConfig.hero_heading;
      // Wrap last word in shimmer
      const words = headingText.split(' ');
      if (words.length > 2) {
        heroHeading.innerHTML = words.slice(0, -2).join(' ') + ' <span class="shimmer-text">' + words.slice(-2).join(' ') + '</span>';
      } else {
        heroHeading.innerHTML = '<span class="shimmer-text">' + headingText + '</span>';
      }
      heroHeading.style.fontFamily = fontHeading;
      heroHeading.style.color = '#6B3347';
      heroHeading.style.fontSize = `${baseSize * 3.5}px`;

      const heroSub = document.getElementById('hero-subtext');
      heroSub.textContent = config.hero_subtext || defaultConfig.hero_subtext;
      heroSub.style.fontSize = `${baseSize}px`;

      // CTA button
      const ctaBtn = document.getElementById('cta-btn');
      ctaBtn.textContent = config.cta_button_text || defaultConfig.cta_button_text;
      ctaBtn.style.backgroundColor = primary;
      ctaBtn.style.fontSize = `${baseSize * 0.8}px`;

      // Collection
      const colTitle = document.getElementById('collection-title');
      colTitle.textContent = config.collection_title || defaultConfig.collection_title;
      colTitle.style.fontFamily = fontHeading;
      colTitle.style.color = '#6B3347';
      colTitle.style.fontSize = `${baseSize * 2.5}px`;

      // About
      const aboutTitle = document.getElementById('about-title');
      aboutTitle.textContent = config.about_title || defaultConfig.about_title;
      aboutTitle.style.fontFamily = fontHeading;
      aboutTitle.style.color = '#6B3347';
      aboutTitle.style.fontSize = `${baseSize * 2.5}px`;

      const aboutText = document.getElementById('about-text');
      aboutText.textContent = config.about_text || defaultConfig.about_text;
      aboutText.style.fontSize = `${baseSize}px`;

      // Product buttons
      document.querySelectorAll('.card-hover .btn-primary').forEach(btn => {
        btn.style.backgroundColor = primary;
      });

      // Prices
      document.querySelectorAll('.card-hover .font-heading[style*="color"]').forEach(el => {
        if (el.textContent.includes('€')) {
          el.style.color = accent;
        }
      });

      // All heading fonts
      document.querySelectorAll('.font-heading').forEach(el => {
        el.style.fontFamily = fontHeading;
      });

      // Accent colored icons
      document.querySelectorAll('[style*="color: #D4A574"]').forEach(el => {
        el.style.color = accent;
      });
    }

    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r},${g},${b}`;
    }

    // Element SDK init
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => { applyConfig(config); },
      mapToCapabilities: (config) => ({
        recolorables: [
          { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
          { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
          { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
          { get: () => config.primary_action_color || defaultConfig.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
          { get: () => config.secondary_action_color || defaultConfig.secondary_action_color, set: (v) => { config.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
      }),
      mapToEditPanelValues: (config) => new Map([
        ['brand_name', config.brand_name || defaultConfig.brand_name],
        ['tagline', config.tagline || defaultConfig.tagline],
        ['hero_heading', config.hero_heading || defaultConfig.hero_heading],
        ['hero_subtext', config.hero_subtext || defaultConfig.hero_subtext],
        ['collection_title', config.collection_title || defaultConfig.collection_title],
        ['about_title', config.about_title || defaultConfig.about_title],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['cta_button_text', config.cta_button_text || defaultConfig.cta_button_text]
      ])
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    // Newsletter form
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      msg.textContent = 'Bedankt! Je ontvangt binnenkort ons geuradvies.';
      msg.classList.remove('hidden');
      e.target.reset();
      setTimeout(() => msg.classList.add('hidden'), 4000);
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.scroll-section').forEach(el => observer.observe(el));

    // Init icons
    lucide.createIcons();
  </script>
