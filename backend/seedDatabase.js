const mongoose = require("mongoose");
const Festival = require("./models/Festival");
require("dotenv").config();

// Sample festival data
const festivalData = [
  {
    name: "Mage Parab",
    month: "February-March",
    description:
      "Mage Parab, also known as Mage Sail or Maghe, is the most important festival of the HO tribe. It marks the beginning of the spring season and the start of the new agricultural year. The festival is celebrated to welcome new crops and express gratitude to nature.",
    significence:
      "Mage Parab celebrates the New Year and the beginning of the sowing season. It is a time of renewal, joy, and community bonding. The festival strengthens family ties and celebrates the agricultural cycle.",
    danceTypes: ["Mage Dance", "Spring Dance", "Festival Dance"],
    activities: [
      "Traditional singing and dancing",
      "Feasting with community",
      "Youth performances",
      "Family gatherings",
    ],
    foods: [
      "Rice cakes",
      "Traditional bread",
      "Special curries",
      "Locally made sweets",
    ],
    traditions: [
      "Lighting of lamps",
      "Wearing traditional clothes",
      "Exchange of greetings",
      "Blessings from elders",
    ],
    imageUrl: "mage-parab.jpg",
  },
  {
    name: "Baha Parab",
    month: "March-April",
    description:
      "Baha Parab is the flower festival celebrated when flowers bloom in spring. It is a joyous occasion where the entire community celebrates the beauty of nature and new beginnings. Young people participate in various activities and games.",
    significence:
      "Baha Parab celebrates the blooming of flowers and new growth. It strengthens community bonds and is marked by singing, dancing, and traditional games that bring young and old together.",
    danceTypes: ["Flower Dance", "Youth Dance", "Group Circle Dance"],
    activities: [
      "Traditional games",
      "Youth competitions",
      "Community feasts",
      "Flower decorations",
    ],
    foods: [
      "Flower-based dishes",
      "Fresh produce",
      "Traditional sweets",
      "Herbal drinks",
    ],
    traditions: [
      "Wearing flower garlands",
      "Community gathering",
      "Youth participation",
      "Traditional rituals",
    ],
    imageUrl: "baha-parab.jpg",
  },
  {
    name: "Chuti Para",
    month: "September-October",
    description:
      "Chuti Para is the harvest festival celebrated after the main harvest season. It is a time to thank nature and ancestors for the bountiful harvest. Families come together to celebrate and share the abundance of the harvest.",
    significence:
      "Chuti Para celebrates the harvest and expresses gratitude to nature and ancestors for the bounty. It is a time of prosperity, community sharing, and family gatherings to celebrate the fruits of labor.",
    danceTypes: [
      "Harvest Dance",
      "Celebration Dance",
      "Traditional Harvest Dance",
    ],
    activities: [
      "Harvest celebrations",
      "Family feasts",
      "Traditional performances",
      "Community gatherings",
    ],
    foods: [
      "Harvested grains",
      "Rice dishes",
      "Traditional sweets",
      "Seasonal vegetables",
    ],
    traditions: [
      "First offering to nature",
      "Community sharing",
      "Family blessings",
      "Gratitude rituals",
    ],
    imageUrl: "chuti-para.jpg",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");

    // Clear existing data
    await Festival.deleteMany({});
    console.log("Cleared existing festivals");

    // Insert festival data
    const festivals = await Festival.insertMany(festivalData);
    console.log(`${festivals.length} festivals seeded successfully!`);

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
}

seedDatabase();
