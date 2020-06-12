const todos = [
  {
    id: 1,
    done: false,
    personal: false,
    week: -8,
    category: "Category 1",
    tags: [],
    content:
      "Create a moving file or folder on Google Drive to store quotes and receipts"
  },
  {
    id: 2,
    done: false,
    personal: false,
    week: -8,
    category: "Category 2",
    tags: [],
    content: "Hire a moving company"
  },
  {
    id: 3,
    done: false,
    personal: false,
    week: -8,
    category: "Category 1",
    tags: [],
    content: "Create a realistic budget for moving expenses"
  },
  {
    id: 4,
    done: false,
    personal: false,
    week: -8,
    category: "Category 2",
    tags: [],
    content: "Read over documents from your movers before signing anything"
  },
  {
    id: 5,
    done: false,
    personal: false,
    week: -8,
    category: "Category 1",
    tags: [],
    content: "Request time off work for moving day"
  },
  {
    id: 6,
    done: false,
    personal: false,
    week: -8,
    category: "Category 2",
    tags: [],
    content: "Choose a school for your kids"
  },
  {
    id: 7,
    done: false,
    personal: false,
    week: -8,
    category: "Category 1",
    tags: [],
    content: "Request transcripts for your kids from their old school"
  },
  {
    id: 8,
    done: false,
    personal: false,
    week: -8,
    category: "Category 2",
    tags: [],
    content: "Purge unwanted belongings and plan a garage sale"
  },
  {
    id: 9,
    done: false,
    personal: false,
    week: -8,
    category: "Category 1",
    tags: [],
    content:
      "Plan how to move fragile or unusual items, such as guns pianos, and fine art"
  },
  {
    id: 10,
    done: false,
    personal: false,
    week: -8,
    category: "Category 2",
    tags: [],
    content: "Confirm that the moving company you hired is licensed and insured"
  },
  {
    id: 11,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Make time for friends and relatives before moving day"
  },
  {
    id: 12,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content:
      "Collect free boxes from restaurants, liquor stores, and grocery stores"
  },
  {
    id: 13,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Research packing hacks"
  },
  {
    id: 14,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content: "Label moving boxes with different colors for each room"
  },
  {
    id: 15,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Create an inventory sheet of all your valuables"
  },
  {
    id: 16,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content: "Mark moving boxes that are fragile"
  },
  {
    id: 17,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Take photos of all electronics before unplugging them"
  },
  {
    id: 18,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content: "Put all hardware in labeled baggies"
  },
  {
    id: 19,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Gather socks, T-shirts, towels, and linens to pad fragile items"
  },
  {
    id: 20,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content:
      "If moving into an apartment, find out about any moving day requirements"
  },
  {
    id: 21,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Address minor home repairs before moving out"
  },
  {
    id: 22,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content: "If moving across country, have your vehicles services"
  },
  {
    id: 23,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "If shipping your car, make sure to empty it"
  },
  {
    id: 24,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content:
      "Measure doorways, stairways, and elevators to make sure furniture will fit"
  },
  {
    id: 25,
    done: false,
    personal: false,
    week: -6,
    category: "Category 1",
    tags: [],
    content: "Research your new community for things to do"
  },
  {
    id: 26,
    done: false,
    personal: false,
    week: -6,
    category: "Category 2",
    tags: [],
    content: "Pack a little every day"
  },
  {
    id: 27,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content:
      "Purchase moving insurance to cover all your belongings during the move"
  },
  {
    id: 28,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content:
      "Confirm parking options for moving truck and check if you need a permit"
  },
  {
    id: 29,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content: "Donate items that can't be packed or sold"
  },
  {
    id: 30,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content: "Gather all financial and legal records in one place"
  },
  {
    id: 31,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content: "Gather birth certificates and passports for everyone"
  },
  {
    id: 32,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content: "Find a new landscaper and snow removal service"
  },
  {
    id: 33,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content: "Return books to library"
  },
  {
    id: 34,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content: "Return movie and/or video game rentals"
  },
  {
    id: 35,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content: "Pick up clothes from the dry cleaner"
  },
  {
    id: 36,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content: "Update your voter registration"
  },
  {
    id: 37,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content: "Compile medical, dental, and optical records for everyone"
  },
  {
    id: 38,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content: "If moving out of town, find a new doctor, dentist, and vet"
  },
  {
    id: 39,
    done: false,
    personal: false,
    week: -4,
    category: "Category 1",
    tags: [],
    content: "If moving long distance, plan your routes and book hotels"
  },
  {
    id: 40,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content: "Shop around for cable, internet, and phone bundles"
  },
  {
    id: 41,
    done: false,
    personal: false,
    week: -4,
    category: "Category 3",
    tags: [],
    content: "Make sure pets have updated ID tags for their collars"
  },
  {
    id: 42,
    done: false,
    personal: false,
    week: -4,
    category: "Category 2",
    tags: [],
    content:
      "Request copies of vet records, and optain any necessary pet medication"
  },
  {
    id: 43,
    done: false,
    personal: false,
    week: -4,
    category: "Category 3",
    tags: [],
    content:
      "If moving out of the country, make sure pets have all necessary vaccinations"
  },
  {
    id: 44,
    done: false,
    personal: false,
    week: -4,
    category: "Category 4",
    tags: [],
    content: "Make a moving day playlist to enjoy while moving and unpacking"
  },
  {
    id: 45,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Recycle or dispose of corrosives, flammables, and poisonous items"
  },
  {
    id: 46,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content:
      "Prepare two-weeks worth of meals, and use everything in the freezer"
  },
  {
    id: 47,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Return borrowed items from friends and family"
  },
  {
    id: 48,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Back up your computer"
  },
  {
    id: 49,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content:
      "Set up trash removal and recycling for your new home, and cancel your current service"
  },
  {
    id: 50,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Remove light bulbs from all lamps you plan to move"
  },
  {
    id: 51,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Clean out safe deposit box and gym lockers"
  },
  {
    id: 52,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Fill all your prescriptions"
  },
  {
    id: 53,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content:
      "Prepare a list of emergency service technicians and preferred providers"
  },
  {
    id: 54,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content:
      "For moving day, line up a babysitter or make arrangements for a playdate"
  },
  {
    id: 55,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Find somewhere safe for pets to go during the move"
  },
  {
    id: 56,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Send out moving announcements"
  },
  {
    id: 57,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content:
      "Use Google Maps to plan your new route to work by car or public transportation"
  },
  {
    id: 58,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Clean outdoor furniture before it's moved"
  },
  {
    id: 59,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Address change: all financial institutions, and employer"
  },
  {
    id: 60,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Address change: USPS for mail forwarding"
  },
  {
    id: 61,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Address change: all government offices"
  },
  {
    id: 62,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Address change: newspaper and magazine subscriptions"
  },
  {
    id: 63,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Address change: DMV for driver's license"
  },
  {
    id: 64,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Address change: Amazon and monthly subscription boxes"
  },
  {
    id: 65,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Address change: auto insurance and car registration"
  },
  {
    id: 66,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content: "Transfer accounts: homewoners or renters insurance"
  },
  {
    id: 67,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Transfer accounts: gym membership—or cancel it"
  },
  {
    id: 68,
    done: false,
    personal: false,
    week: -2,
    category: "Category 4",
    tags: [],
    content:
      "Transfer accounts: utilities—including water, electricity, and gas"
  },
  {
    id: 69,
    done: false,
    personal: false,
    week: -2,
    category: "Category 3",
    tags: [],
    content: "Transfer accounts: prescriptions to a new pharmacy"
  },
  {
    id: 70,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content: "Donate unopened food"
  },
  {
    id: 71,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content:
      "Make sure scheduled deliveries have been canceled and/or redirected"
  },
  {
    id: 72,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content: "Clean your current home for next residents"
  },
  {
    id: 73,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content: "Unplug the fridge and freezer to defrost the night before"
  },
  {
    id: 74,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content: "Fill nail holes with a bar of soap"
  },
  {
    id: 75,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content: "Drain water hoses to washing machine and ice maker"
  },
  {
    id: 76,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content:
      "Empty oil and gas from grills, heaters, lawn mowers, and snow blowers"
  },
  {
    id: 77,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content: "Leave a note or small gift for new residents"
  },
  {
    id: 78,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content:
      "Conduct a final walkthrough for anything hidden onshelves or in closets"
  },
  {
    id: 79,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content: "Watch the weather channel and be prepared for rain or snow"
  },
  {
    id: 80,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content:
      "Pack an essential box with everything you'll need for your first 24 hours in your new home"
  },
  {
    id: 81,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content: "Make a worst-case scenario plan in case your movers run late"
  },
  {
    id: 82,
    done: false,
    personal: false,
    week: -1,
    category: "Category 4",
    tags: [],
    content:
      "Take photographs of your empty place to prove it's in move-out condition"
  },
  {
    id: 83,
    done: false,
    personal: false,
    week: -1,
    category: "Category 3",
    tags: [],
    content: "Thoroughly clean your new place"
  },
  {
    id: 84,
    done: false,
    personal: false,
    week: 0,
    category: "Category 4",
    tags: [],
    content: "Set an alarm and get up early"
  },
  {
    id: 85,
    done: false,
    personal: false,
    week: 0,
    category: "Category 5",
    tags: [],
    content: "Protect your floor and carpets during move"
  },
  {
    id: 86,
    done: false,
    personal: false,
    week: 0,
    category: "Category 6",
    tags: [],
    content: "Tip your movers"
  },
  {
    id: 87,
    done: false,
    personal: false,
    week: 0,
    category: "Category 5",
    tags: [],
    content: "Make your bed and unpack your shower curtain and toiletries"
  },
  {
    id: 88,
    done: false,
    personal: false,
    week: 0,
    category: "Category 6",
    tags: [],
    content: "Get to know your neighbors"
  },
  {
    id: 89,
    done: false,
    personal: false,
    week: 0,
    category: "Category 5",
    tags: [],
    content: "Go grocery shopping"
  },
  {
    id: 90,
    done: false,
    personal: false,
    week: 0,
    category: "Category 6",
    tags: [],
    content: "Cover your windows with sheets for privacy for your first night"
  },
  {
    id: 91,
    done: false,
    personal: false,
    week: 0,
    category: "Category 5",
    tags: [],
    content: "Thank your real estate agent or broker"
  },
  {
    id: 92,
    done: false,
    personal: false,
    week: 1,
    category: "Category 6",
    tags: [],
    content: "Leave a review for your moving company"
  },
  {
    id: 93,
    done: false,
    personal: false,
    week: 1,
    category: "Category 5",
    tags: [],
    content: "Post leftover moving boxes or unwanted furniture on Craigslist"
  },
  {
    id: 94,
    done: false,
    personal: false,
    week: 1,
    category: "Category 6",
    tags: [],
    content: "Clean the carpets in your new home"
  },
  {
    id: 95,
    done: false,
    personal: false,
    week: 1,
    category: "Category 5",
    tags: [],
    content: "Swwp your chimney before using it"
  },
  {
    id: 96,
    done: false,
    personal: false,
    week: 1,
    category: "Category 6",
    tags: [],
    content: "Make sure your home's address is visible from the street"
  },
  {
    id: 97,
    done: false,
    personal: false,
    week: 1,
    category: "Category 5",
    tags: [],
    content: "Install a new home security system"
  },
  {
    id: 98,
    done: false,
    personal: false,
    week: 1,
    category: "Category 6",
    tags: [],
    content: "Explore your new neighborhood"
  },
  {
    id: 99,
    done: false,
    personal: false,
    week: 1,
    category: "Category 5",
    tags: [],
    content: "Send thank you notes to friends and family who helped you move"
  },
  {
    id: 100,
    done: false,
    personal: false,
    week: 1,
    category: "Category 6",
    tags: [],
    content: "Unpack all your belongings within two weeks of moving in"
  },
  {
    id: 101,
    done: false,
    personal: false,
    week: 1,
    category: "Category 5",
    tags: [],
    content: "Make spare copies of new keys"
  },
  {
    id: 102,
    done: false,
    personal: false,
    week: 1,
    category: "Category 6",
    tags: [],
    content: "Celebrate!!!"
  }
];

export default todos;
