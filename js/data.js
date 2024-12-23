  // Configuration
  const ITEMS_PER_PAGE = 12;
  const INITIAL_TAGS_TO_SHOW = 8;
  let currentPage = 1;
  let isLoading = false;

// This is where you store your image data
const images = [
    {
        url: "/images/toseen1.png",
        title: "Nintendo rules",
        date: "2024-12-21",
        tags: ["quotes"]
    },
    {
        url: "/images/me2ux.jpg",
        title: "me 2 UX:",
        date: "2024-12-21",
        tags: ["quotes"]
    },
    {
        url: "/images/dvd.jpg",
        title: "One more with the feeling:",
        date: "2024-12-21",
        tags: ["quotes", "mood"]
    },
    {
        url: "/images/walk.png",
        title: "take a walk",
        date: "2024-12-21",
        tags: ["meme", "mood"]
    },
    {
        url: "/images/unlimitedpowert.jpg",
        title: "With great power",
        date: "2024-12-21",
        tags: ["meme", "mood"]
    },
    {
        url: "/images/dream.png",
        title: "Dream on",
        date: "2024-12-21",
        tags: ["motivation", "mood"]
    },
    {
        url: "/images/castlehill.jpg",
        title: "One step at a time",
        date: "2024-12-21",
        tags: ["motivation", "illustration"]
    },
    {
        url: "/images/opendoor.jpg",
        title: "Open door",
        date: "2024-12-21",
        tags: ["design", "meme"]
    },
    {
        url: "/images/nothere.jpg",
        title: "Not really",
        date: "2024-12-21",
        tags: ["mood"]
    },
    {
        url: "/images/work.jpg",
        title: "Projects",
        date: "2024-12-21",
        tags: ["motivation"]
    },
    {
        url: "/images/evolve.png",
        title: "Make a choice",
        date: "2024-12-21",
        tags: ["motivation" , "mood"]
    },
    {
        url: "/images/want.jpeg",
        title: "Want more",
        date: "2024-12-21",
        tags: ["quotes" , "mood"]
    },
    {
        url: "/images/bye.png",
        title: "Want more",
        date: "2024-12-21",
        tags: ["quotes" , "mood"]
    },
    {
        url: "/images/chosenone.jpg",
        title: "You were the chosen one Anakin",
        date: "2024-12-23",
        tags: ["quotes" , "mood" ,"design"]
    },
    {
        url: "/images/selfadvice.jpg",
        title: "Motivation",
        date: "2024-12-23",
        tags: ["advice" ,"motivation"]
    },
    {
        url: "/images/struggle.jpg",
        title: "TV knows the best",
        date: "2024-12-23",
        tags: ["quotes" ,"mood"]
    },
    {
        url: "/images/livingt.png",
        title: "TV knows the best",
        date: "2024-12-23",
        tags: ["mood"]
    },
    {
        url: "/images/workmail.jpg",
        title: "Work",
        date: "2024-12-23",
        tags: ["mood"]
    },
    {
        url: "/images/neverever.jpg",
        title: "Believe",
        date: "2024-12-23",
        tags: ["motivation" , "meme"]
    },
];
