const { PrismaClient } = require("../lib/generated/prisma");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.whyBuy.deleteMany();
  await prisma.featureDetail.deleteMany();
  await prisma.productFeature.deleteMany();
  await prisma.product.deleteMany();
  await prisma.feature.deleteMany();
  await prisma.category.deleteMany();

  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "Category_id_seq" RESTART WITH 1;`
  );
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "Feature_id_seq" RESTART WITH 1;`
  );
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "FeatureDetail_id_seq" RESTART WITH 1;`
  );
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "Product_id_seq" RESTART WITH 1;`
  );
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "WhyBuy_id_seq" RESTART WITH 1;`
  );

  // Create categories
  const iphoneCat = await prisma.category.create({ data: { name: "iPhone" } });
  const ipadCat = await prisma.category.create({ data: { name: "iPad" } });
  const watchCat = await prisma.category.create({ data: { name: "Watch" } });
  const airpodsCat = await prisma.category.create({
    data: { name: "AirPods" },
  });

  // ---------------- iPhone ----------------
  // FEATURES SECTION
  const features = [
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Apple Intelligence",
      headline: "AI‑opening possibilities.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_1.jpg",
      theme: "dark",
      details: [
        {
          text: "Now that’s smart. Our latest iPhone models are built for Apple Intelligence, the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_1_1.jpg",
        },
        {
          text: "Find just the right words. Writing Tools can proofread your text and rewrite different versions until the tone is just right, and summarize selected text with a simple tap. They're available nearly everywhere you write, including third‑party apps.",
          textBreak: false,
          textPosition: "right",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_1_2.jpg",
        },
        {
          text: "Express yourself visually. Make a Genmoji right in the keyboard to match any conversation. Want to create a rainbow cactus? You got it. Just provide a description to see a preview.",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_1_3.jpg",
        },
        {
          text: "The start of a new era for Siri. With an all‑new design, richer language understanding and expansive product knowledge about your devices, Siri is more helpful than ever. Siri can even tap into ChatGPT to bring additional answers right to you.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_1_4.jpg",
        },
        {
          text: "Designed to protect your privacy at every step. With Private Cloud Compute, Apple Intelligence can draw on larger, Apple‑designed server‑based models, running on Apple silicon, to handle more complex requests while protecting your privacy.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_1_5.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Cutting‑Edge Cameras",
      headline: "Picture your best photos and videos.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_2.jpg",
      theme: "dark",
      details: [
        {
          text: "Stunning made simple. The advanced cameras in iPhone automatically capture phenomenal photos with great detail and colour. Want to take the perfect shot in record time? iPhone 16 and iPhone 16 Pro have Camera Control, giving you an easier way to quickly access camera tools.",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_2_1.jpg",
        },
        {
          text: "Keep on zoomin’. With a wide range of focal lengths, you can zoom way in or way out to frame the perfect shot — all without sacrificing image quality. The new iPhone 16 Pro even has the equivalent of seven pro lenses, including a 5x Telephoto.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_2_2.jpg",
        },
        {
          text: "Make movies like the movies. Get artful depth effects when you film in Cinematic mode. Use Action mode to steady shaky scenes as you shoot. Boost the voices of the people in your video with Audio Zoom. And with iPhone 16 and iPhone 16 Pro, quickly access camera tools with Camera Control.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_2_3.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Chip and Battery Life",
      headline: "Fast that lasts.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_3.jpg",
      theme: "dark",
      details: [
        {
          text: "Super smart, super speedy Apple silicon. iPhone chips enhance everything you do. Our latest chips unlock Apple Intelligence, power advanced photo features like next‑generation Photographic Styles, and enable AAA gaming.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_3_1.jpg",
        },
        {
          text: "Long‑lasting battery life? 100%. Our hardware and software are designed to work together efficiently, so you can do more on a single charge — like watching up to 33 hours of video on iPhone 16 Pro Max.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_3_2.jpg",
        },
        {
          text: "Made for 5G. iPhone + 5G = a super fast experience.4 And when you don’t need all that speed, iPhone shifts into Smart Data mode to preserve battery life.",
          textBreak: false,
          textPosition: "right",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_3_3.jpg",
        },
        {
          text: "Power. Fully. Fast. Snap on a MagSafe Charger.5 Or plug in a USB‑C Power Adapter. iPhone 15 and later have USB‑C, so you can charge your iPhone with the same cable as your Mac and iPad.6",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_3_4.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Innovation",
      headline: "Beautiful and durable, by design.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_4.jpg",
      theme: "light",
      details: [
        {
          text: "Second to none. iPhone is known for its iconic design and premium materials — like iPhone 16 Pro, which is forged in titanium. On the brilliant display, Dynamic Island bubbles up important info so you don’t miss a beat.",
          textBreak: false,
          textPosition: "right",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_4_1.jpg",
        },
        {
          text: "Last phone standing. iPhone is protected by Ceramic Shield, which is tougher than any smartphone glass. Little spill? No biggie — iPhone also stands up to splashes from everyday liquids like water, coffee and soda.7",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_4_2.jpg",
        },
        {
          text: "Ease of use. We design our hardware and software together for a seamless experience. Want to share your contact info? Hold your iPhone close to theirs. New AirPods? It’s a one‑tap setup. And regular iOS updates keep your iPhone feeling new for years to come.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_4_3.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Environment",
      headline: "Recycle. Reuse. Repeat.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_5.jpg",
      theme: "light",
      details: [
        {
          text: "Innovation in conservation. Our disassembly robots — Daisy, Dave and Taz — recover crucial materials like gold, cobalt, tungsten and rare earth elements from recycled iPhone devices, so they can be used to make new ones.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_5_1.jpg",
        },
        {
          text: "More recycled content? Naturally. We’re significantly expanding the use of key recycled metals in iPhone batteries, magnets and circuit boards. Case in point: Our latest models contain 95 percent recycled lithium in the battery cathode — a first for Apple.8",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_5_2.jpg",
        },
        {
          text: "Apple Trade In. When you’re ready to buy a new iPhone, you can trade in your current iPhone or Android device and apply any credit toward your purchase. If your device isn’t eligible for credit, we’ll recycle it for free.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_5_3.jpg",
        },
        {
          text: "Planet-worthy packaging. For the first time, iPhone packaging is 100 percent fibre-based.9 And there’s no plastic wrap in or around the box.",
          textBreak: false,
          textPosition: "right",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_5_4.jpg",
        },
        {
          text: "On track to carbon-neutral. Our stores, offices and data centres are already carbon-neutral. By 2030, Apple will be carbon-neutral across our entire carbon footprint.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_5_5.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Privacy",
      headline: "Your data. Just where you want it.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_6.jpg",
      theme: "dark",
      details: [
        {
          text: "Groundbreaking privacy protections. Apple Intelligence is integrated into your iPhone through on-device processing. With Private Cloud Compute, it can draw on larger, Apple-designed server-based models, running on Apple silicon, to handle more complex requests while protecting your privacy.",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_6_1.jpg",
        },
        {
          text: "Sign in safely. The Passwords app makes it easier to access account passwords, passkeys, Wi‑Fi passwords and two‑factor authentication codes stored securely on your device or synced with iCloud Keychain.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_6_2.jpg",
        },
        {
          text: "Browse securely. Private Browsing in Safari locks browsing windows when they’re not being used, blocks known trackers from loading on pages and removes tracking added to URLs as you browse.",
          textBreak: false,
          textPosition: "right",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_6_3.jpg",
        },
        {
          text: "Share privately. All messages sent with iMessage use end-to-end encryption between devices, so they’re only seen by those you send them to. And Mail Privacy Protection hides your IP address, so senders can’t determine your location.",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_6_4.jpg",
        },
        {
          text: "Pay the Apple Pay way. When you make a purchase with Apple Pay, your card numbers are never stored on your device or on Apple servers — and they’re never shared by Apple with merchants, either.",
          textBreak: false,
          textPosition: "right",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_6_2.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Customize Your iPhone",
      headline: "Make it you.Through and through.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_7.jpg",
      theme: "dark",
      details: [
        {
          text: "Customization on Lock. Home. And beyond. Swap out your Lock Screen controls for ones you use more often — you can even assign a control to the Action button. Tint your Home Screen icons and widgets or let iOS choose a colour to match your wallpaper.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_7_1.jpg",
        },
        {
          text: "iPhone for all. Built-in accessibility features help you do what you love in the ways that work best for you. For example, Eye Tracking lets you navigate iPhone with just your eyes, thanks to the power of on-device machine learning and the front-facing camera.",
          textBreak: false,
          textPosition: "top",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_7_2.jpg",
        },
      ],
    },
    {
      categoryId: iphoneCat.id,
      sectionTitle: "Peace of Mind",
      headline: "Helpful features.On and off the grid.",
      image:
        "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_8.jpg",
      theme: "dark",
      details: [
        {
          text: "Out of range. Not out of reach. Unique safety features allow iPhone to connect to satellite frequencies — so you can send and receive messages via satellite or text emergency services when you don’t have cell service or Wi‑Fi.10",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_8_1.jpg",
        },
        {
          text: "Everyday reassurance. With Find My, you can securely share your location with friends and family. And in Messages, you can use Check In to automatically let someone know when you’ve reached your destination safely.",
          textBreak: false,
          textPosition: "left",
          image:
            "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/iphone/feature_8_2.jpg",
        },
      ],
    },
  ];
  for (const feature of features) {
    const createdFeature = await prisma.feature.create({
      data: {
        categoryId: feature.categoryId,
        sectionTitle: feature.sectionTitle,
        headline: feature.headline,
        image: feature.image,
        theme: feature.theme,
      },
    });

    if (feature.details && feature.details.length) {
      await prisma.featureDetail.createMany({
        data: feature.details.map((d) => ({
          featureId: createdFeature.id,
          text: d.text,
          textBreak: d.textBreak,
          textPosition: d.textPosition,
          image: d.image,
        })),
      });
    }
  }

  // COMPARE SECTIONS + PRODUCT
  const productsData = [
    {
      categoryId: iphoneCat.id,
      name: "iPhone 16 Pro",
      description: "The ultimate iPhone.",
      price: "From $1449 or $60.37/mo. for 24 mos. at 0.00% APR‡",
      variants: ["Desert", "Natural", "White", "Black"],
    },
    {
      categoryId: iphoneCat.id,
      name: "iPhone 16",
      description: "A total powerhouse.",
      price: "From $1129 or $47.04/mo. for 24 mos. at 0.00% APR‡",
      variants: ["Ultramarine", "Teal", "Pink", "White", "Black"],
    },
    {
      categoryId: iphoneCat.id,
      name: "iPhone 16e",
      description: "Latest iPhone. Greatest price.",
      price: "From $899 or $37.46/mo. for 24 mos. at 0.00% APR‡",
      variants: ["White", "Black"],
    },
    {
      categoryId: iphoneCat.id,
      name: "iPhone 15",
      description: "As amazing as ever.",
      price: "From $999 or $41.62/mo. for 24 mos. at 0.00% APR‡",
      variants: ["Pink", "Yellow", "Green", "Blue", "Black"],
    },
  ];

  // 2. Define features for each product (featuresData[i] is for productsData[i])
  const featuresData = [
    // Features for iPhone 16 Pro
    [
      {
        name: "Apple Intelligence",
        description: "Apple Intelligence",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/apple_intelligence.png",
      },
      {
        name: "Chip",
        description: "A18 Pro chip with 6‑core GPU",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/chip_a18_pro.png",
      },
      {
        name: "Camera Control",
        description: "Camera Control",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/camera_control.png",
      },
      {
        name: "Pro camera system",
        description:
          "Our most advanced 48MP Fusion camera\n5x Telephoto camera\n48MP Ultra Wide camera\nVisual intelligence, to learn about your surroundings",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/ip16_pro_cam.png",
      },
      {
        name: "Battery",
        description: "Up to 33 hours video playback",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/battery.png",
      },
    ],
    // Features for iPhone 16
    [
      {
        name: "Apple Intelligence",
        description: "Apple Intelligence",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/apple_intelligence.png",
      },
      {
        name: "Chip",
        description: "A18 chip with 5‑core GPU",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/chip_a18.png",
      },
      {
        name: "Camera Control",
        description: "Camera Control",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/camera_control.png",
      },
      {
        name: "Advanced dual‑camera system",
        description:
          "48MP Fusion camera\n2x Telephoto\n12MP Ultra Wide camera\nVisual intelligence, to learn about your surroundings",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/ip16_cam.png",
      },
      {
        name: "Battery",
        description: "Up to 27 hours video playback",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/battery.png",
      },
    ],
    // Features for iPhone 16e
    [
      {
        name: "Apple Intelligence",
        description: "Apple Intelligence",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/apple_intelligence.png",
      },
      {
        name: "Chip",
        description: "A18 chip with 4‑core GPU",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/chip_a18.png",
      },
      {
        name: "Camera Control",
        description: "",
        icon: "",
      },
      {
        name: "2-in-1 camera system",
        description:
          "48MP Fusion camera\n2x Telephoto\n—\nVisual intelligence, to learn about your surroundings",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/ip16_e_cam.png",
      },
      {
        name: "Battery",
        description: "Up to 26 hours video playback",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/battery.png",
      },
    ],
    // Features for iPhone 15
    [
      {
        name: "Apple Intelligence",
        description: "",
        icon: "",
      },
      {
        name: "Chip",
        description: "A16 Bionic chip with 5‑core GPU",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/chip_a16.svg",
      },
      {
        name: "Camera Control",
        description: "",
        icon: "",
      },
      {
        name: "Dual-camera system",
        description: "48MP Main camera\n2x Telephoto\nUltra Wide camera\n—",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/ip15_cam.png",
      },
      {
        name: "Battery",
        description: "Up to 26 hours video playback",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/battery.png",
      },
    ],
  ];

  // 3. Insert products first
  const createdProducts = [];
  for (const prod of productsData) {
    const created = await prisma.product.create({ data: prod });
    createdProducts.push(created);
  }

  // 4. Insert features for each product
  for (let i = 0; i < createdProducts.length; i++) {
    const product = createdProducts[i];
    const productFeatures = featuresData[i];

    for (const feature of productFeatures) {
      await prisma.productFeature.create({
        data: {
          ...feature,
          productId: product.id,
        },
      });
    }
  }

  // WHY BUY
  await prisma.whyBuy.createMany({
    data: [
      {
        categoryId: iphoneCat.id,
        title: "Save with Apple Trade In.",
        description:
          "Get $180–$865 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.*",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/trade_in.png",
      },
      {
        categoryId: iphoneCat.id,
        title: "Get 0% APR monthly payments.",
        description:
          "Choose an easy way to finance your new iPhone with convenient monthly payment options.",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/card.png",
      },
      {
        categoryId: iphoneCat.id,
        title: "Get flexible delivery and easy pickup.",
        description:
          "Choose two-hour delivery from an Apple Store, free delivery or easy pickup options.",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/delivery.png",
      },
      {
        categoryId: iphoneCat.id,
        title: "Shop one on one with a Specialist.",
        description: "Online or in a store.",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/chat.png",
      },
      {
        categoryId: iphoneCat.id,
        title: "Join an online Personal Setup session.",
        description:
          "Talk one on one with a Specialist to set up your iPhone and discover new features.",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/interpersonal.png",
      },
      {
        categoryId: iphoneCat.id,
        title: "Explore a shopping experience designed around you.",
        description: "When you shop in the Apple Store app.",
        icon: "https://ejskqctttkujykxlbmbk.supabase.co/storage/v1/object/public/product-asset/asset/icons/apple_store.png",
      },
    ],
  });

  // // ---------------- iPad ----------------
  // // FEATURES SECTION
  // await prisma.feature.createMany({
  //   data: [
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "Apple Intelligence",
  //       headline: "Personal, private, powerful.",
  //       descriptions: [
  //         "Tap into smart. The latest iPad Pro, iPad Air ...",
  //         "The start of a new era for Siri. With an all‑new design ...",
  //         "Designed to protect your privacy at every step. With Private Cloud Compute ...",
  //       ],
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "Productivity",
  //       headline: "Your workplace can be any place.",
  //       descriptions: [],
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "Creativity",
  //       headline: "Take your inner artist out and about.",
  //       descriptions: [],
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "Learning",
  //       headline: "Your classroom can be anywhere.",
  //       descriptions: [],
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "Entertainment",
  //       headline: "Kick back. Tune in. Game on.",
  //       descriptions: [],
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "Apple Pencil",
  //       headline: "Dream it up. Jot it down.",
  //       descriptions: [],
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       sectionTitle: "iPadOS + Apps",
  //       headline: "Everyday superpowers. Built right in.",
  //       descriptions: [],
  //     },
  //   ],
  // });

  // // iPad Products
  // await prisma.product.createMany({
  //   data: [
  //     {
  //       categoryId: ipadCat.id,
  //       name: "iPad Pro",
  //       variants: ["13”", "11”", "space black", "silver"],
  //       specs: {
  //         chip: "M4",
  //         features: [
  //           "Ultra Retina XDR display",
  //           "ProMotion technology",
  //           "12MP Wide camera",
  //           "4K video ProRes",
  //           "Landscape 12MP Center Stage",
  //           "TrueDepth",
  //           "Supports Apple Pencil Pro",
  //           "Supports Magic Keyboard",
  //         ],
  //       },
  //       featureFlags: {
  //         hasProMotion: true,
  //         hasCenterStage: true,
  //         hasProRes: true,
  //         hasApplePencilPro: true,
  //       },
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       name: "iPad Air",
  //       variants: ["13”", "11”", "space gray", "blue", "purple", "starlight"],
  //       specs: {
  //         chip: "M3",
  //         features: [
  //           "Liquid Retina display",
  //           "12MP Wide camera",
  //           "4K video",
  //           "Center Stage",
  //           "Supports Apple Pencil Pro",
  //           "Supports Magic Keyboard",
  //         ],
  //       },
  //       featureFlags: {
  //         hasCenterStage: true,
  //         hasApplePencilPro: true,
  //       },
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       name: "iPad",
  //       variants: ["11”"],
  //       specs: {
  //         chip: "A16",
  //         features: [
  //           "Liquid Retina display",
  //           "12MP Wide camera",
  //           "4K video",
  //           "Center Stage",
  //           "Supports Apple Pencil (USB‑C)",
  //           "Supports Magic Keyboard Folio",
  //         ],
  //       },
  //       featureFlags: {
  //         hasCenterStage: true,
  //       },
  //     },
  //     {
  //       categoryId: ipadCat.id,
  //       name: "iPad mini",
  //       variants: ["8.3”", "space gray", "blue", "purple", "starlight"],
  //       specs: {
  //         chip: "A17 Pro",
  //         features: [
  //           "Liquid Retina display",
  //           "12MP Wide camera",
  //           "4K video",
  //           "Center Stage",
  //           "Supports Apple Pencil Pro",
  //         ],
  //       },
  //       featureFlags: {
  //         hasCenterStage: true,
  //         hasApplePencilPro: true,
  //       },
  //     },
  //   ],
  // });

  // // ---------------- Watch Features ----------------
  // await prisma.feature.createMany({
  //   data: [
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Apple Watch For Your Kids",
  //       headline: "Stay connected. Wherever they go.",
  //       descriptions: [
  //         "All in the family. Kids can enjoy all the connectivity of an Apple Watch, even if they don’t have their own phone.",
  //         "Has everyone talking. Set up and manage watches for your children with your iPhone so they can make calls and send texts.",
  //         "Keep close watch. Your kids can share their location on Apple Watch, so you can receive alerts.",
  //       ],
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Health",
  //       headline: "Knows you by heart.",
  //       descriptions: [
  //         "Never miss a beat. The ECG app ...",
  //         "You snooze. You win. Track your sleep stages and get notifications.",
  //         "Better understand your daily health status with the Vitals app.",
  //       ],
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Fitness",
  //       headline: "Every move counts.",
  //       descriptions: [
  //         "Close your rings. Daily Move, Exercise, Stand goals.",
  //         "Works for all your workouts—cycling, HIIT, yoga.",
  //         "Hit the ground running with metrics like Heart Rate Zones and Pacer.",
  //       ],
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Connectivity",
  //       headline: "The right call for staying in touch.",
  //       descriptions: [
  //         "Stay connected from your wrist: call, text, music.",
  //         "Your wallet. Without the wallet — Apple Pay, Wallet features.",
  //         "Music and podcasts from Apple Music and downloads.",
  //       ],
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Safety",
  //       headline: "Good help is easy to find.",
  //       descriptions: [
  //         "Emergency services when you need them — fall/crash detection.",
  //         "Peace of mind with Check In and Find My.",
  //         "Sound the alarm with Siren on Ultra models.",
  //       ],
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Apple Watch + iPhone",
  //       headline: "Dynamic duo.",
  //       descriptions: [
  //         "Lost and pinged: find your iPhone via Watch.",
  //         "Lights. Camera. Remote — remote camera control.",
  //         "Turn‑by‑turn directions on your wrist.",
  //       ],
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       sectionTitle: "Personalization",
  //       headline: "Make it you‑nique.",
  //       descriptions: [
  //         "Rock your favourite bands — bands come in many colors.",
  //         "Dial up the faces — endless face combinations.",
  //         "App Store on Wrist— thousands of apps.",
  //       ],
  //     },
  //   ],
  // });

  // // Watch Products
  // await prisma.product.createMany({
  //   data: [
  //     {
  //       categoryId: watchCat.id,
  //       name: "Apple Watch SE",
  //       variants: ["Midnight", "Starlight", "Silver"],
  //       specs: {
  //         chip: "S8 SiP",
  //         features: [
  //           "Retina display (44/40 mm)",
  //           "Siri",
  //           "Find iPhone",
  //           "Low Power Mode",
  //         ],
  //       },
  //       featureFlags: {
  //         hasRetinaDisplay: true,
  //         hasSiri: true,
  //         hasFindMy: true,
  //         hasLowPowerMode: true,
  //       },
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       name: "Apple Watch Series 10",
  //       variants: [
  //         "Jet Black",
  //         "Rose Gold",
  //         "Silver",
  //         "Slate",
  //         "Gold",
  //         "Natural",
  //       ],
  //       specs: {
  //         chip: "S10 SiP",
  //         features: [
  //           "Always‑On Retina display",
  //           "Double tap gesture",
  //           "Blood Oxygen",
  //           "ECG",
  //           "Faster Siri",
  //         ],
  //       },
  //       featureFlags: {
  //         hasAlwaysOn: true,
  //         hasECG: true,
  //         hasBloodOxygen: true,
  //         hasDoubleTap: true,
  //       },
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       name: "Apple Watch Ultra 2",
  //       variants: ["Black", "Natural"],
  //       specs: {
  //         chip: "S9 SiP",
  //         features: [
  //           "Always‑On Retina 3000 nits",
  //           "Precision GPS",
  //           "Siren",
  //           "36 hr battery",
  //         ],
  //       },
  //       featureFlags: {
  //         hasAlwaysOn: true,
  //         hasGPS: true,
  //         hasSiren: true,
  //         hasLongBattery: true,
  //       },
  //     },
  //   ],
  // });

  // // Watch WhyBuy
  // await prisma.whyBuy.createMany({
  //   data: [
  //     {
  //       categoryId: watchCat.id,
  //       title: "Monthly payment options available.",
  //       description:
  //         "Choose an easy way to finance with convenient monthly payment options.",
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       title: "Save with Apple Trade‑In.",
  //       description:
  //         "Get credit toward your new Apple Watch when you trade in an eligible device.",
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       title: "Flexible delivery and pickup options.",
  //       description:
  //         "Choose two‑hour delivery, free delivery, or easy pickup options.",
  //     },
  //     {
  //       categoryId: watchCat.id,
  //       title: "Personal Setup sessions available.",
  //       description:
  //         "Join an online one‑on‑one session to set up your Apple Watch.",
  //     },
  //   ],
  // });

  // // ---------------- AirPods Features ----------------
  // await prisma.feature.createMany({
  //   data: [
  //     {
  //       categoryId: airpodsCat.id,
  //       sectionTitle: "Active Noise Cancellation",
  //       headline: "Control what you hear. And what you don’t.",
  //       descriptions: [
  //         "Active Noise Cancellation reduces unwanted sounds ... Transparency mode lets you comfortably hear the world around you.",
  //       ],
  //     },
  //     {
  //       categoryId: airpodsCat.id,
  //       sectionTitle: "Personalized Spatial Audio",
  //       headline: "Immersive sound. Fine‑tuned to you.",
  //       descriptions: [
  //         "Personalized Spatial Audio brings you 3D sound suited to your specific ear shape for a theatre‑like experience.",
  //       ],
  //     },
  //     {
  //       categoryId: airpodsCat.id,
  //       sectionTitle: "Hearing Health",
  //       headline: "Active Hearing Protection for safer listening.",
  //       descriptions: [
  //         "AirPods Pro 2 includes Hearing Protection, Conversation Boost and Background Sounds — available via free software update.",
  //       ],
  //     },
  //     {
  //       categoryId: airpodsCat.id,
  //       sectionTitle: "Siri",
  //       headline: "Your always‑on intelligent assistant.",
  //       descriptions: [
  //         "Control your audio, get directions, check weather, Announce Notifications, and Siri Interactions.",
  //       ],
  //     },
  //     {
  //       categoryId: airpodsCat.id,
  //       sectionTitle: "Magical Experience",
  //       headline: "Simply effortless.",
  //       descriptions: [
  //         "With one‑tap setup, Automatic Switching, Audio Sharing and more, AirPods make the listening experience completely fluid.",
  //       ],
  //     },
  //   ],
  // });

  // // AirPods Products
  // await prisma.product.createMany({
  //   data: [
  //     {
  //       categoryId: airpodsCat.id,
  //       name: "AirPods 4",
  //       variants: [],
  //       specs: {
  //         chip: "H2",
  //         features: [
  //           "Active Noise Cancellation",
  //           "Personalized Spatial Audio",
  //           "Voice Isolation",
  //           "Hey Siri",
  //           "USB‑C Charging Case",
  //         ],
  //       },
  //       featureFlags: {
  //         hasANC: true,
  //         hasSpatialAudio: true,
  //         hasVoiceIsolation: true,
  //         hasHeySiri: true,
  //       },
  //     },
  //     {
  //       categoryId: airpodsCat.id,
  //       name: "AirPods Pro 2",
  //       variants: [],
  //       specs: {
  //         chip: "H2",
  //         features: [
  //           "Up to 2× ANC",
  //           "Adaptive Audio",
  //           "Personalized Spatial Audio",
  //           "Hearing Protection",
  //           "MagSafe Case",
  //           "Precision Finding",
  //         ],
  //       },
  //       featureFlags: {
  //         hasANC: true,
  //         hasSpatialAudio: true,
  //         hasHearingProtection: true,
  //         hasPrecisionFinding: true,
  //       },
  //     },
  //     {
  //       categoryId: airpodsCat.id,
  //       name: "AirPods Max",
  //       variants: [],
  //       specs: {
  //         chip: "H2",
  //         features: [
  //           "Active Noise Cancellation",
  //           "Transparency mode",
  //           "Spatial Audio",
  //           "Smart Case",
  //         ],
  //       },
  //       featureFlags: {
  //         hasANC: true,
  //         hasSpatialAudio: true,
  //       },
  //     },
  //   ],
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
