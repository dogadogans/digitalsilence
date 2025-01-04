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
    {
        url: "/images/persistance.jpg",
        title: "Persistance",
        date: "2024-12-28",
        tags: ["motivation" , "meme"]
    },
    {
        url: "/images/lifethe.jpg",
        title: "Ran(1985)",
        date: "2024-12-28",
        tags: ["quotes"]
    },
    {
        url: "/images/cityscapepix.jpg",
        title: "item on instagram",
        href: "https://www.instagram.com/p/BokGOBIBXnm/",
        date: "2024-12-28",
        tags: ["visuals"]
    },
    {
        url: "/images/signoftimes.jpg",
        title: "billboards everywhere",
        date: "2024-12-28",
        tags: ["visuals"]
    },
    {
        url: "/images/selfsoot.jpeg",
        title: "Meditation",
        date: "2024-12-29",
        tags: ["meme"]
    },
    {
        url: "/images/nowdeath.jpeg",
        title: "Plague in the dark",
        href: "https://www.lucasgarcete.com/heraldos-de-la-peste",
        date: "2024-12-29",
        tags: ["visuals"]
    },
    {
        url: "/images/questions.jpg",
        title: "Design process",
        date: "2024-12-30",
        tags: ["design"]
    },
    {
        url: "/images/faile.jpg",
        title: "Fail forward",
        date: "2024-12-30",
        tags: ["quotes","meme"]
    },
    {
        url: "/images/nolunch.jpg",
        title: ".caffeinePower",
        date: "2024-12-30",
        tags: ["mood","meme"]
    },
    {
        url: "/images/rotsave.jpg",
        title: "Rothko everywhere",
        date: "2024-12-30",
        tags: ["visuals"]
    },
    {
        url: "/images/ionlydrink.jpg",
        title: "I never drink... wine.",
        date: "2024-12-31",
        tags: ["visuals","movies"]
    },
    {
        url: "/images/bubble2.jpg",
        title: "Bubble x2",
        date: "2024-12-31",
        tags: ["games"]
    },
    {
        url: "/images/powermove.jpg",
        title: "Spotlight",
        date: "2024-12-31",
        tags: ["movies"]
    },
    {
        url: "/images/tired.jpg",
        title: "[..........] 0% Energy",
        date: "2024-12-31",
        tags: ["movies"]
    },
        {
        url: "/images/vs.jpg",
        title: "Black sheep",
        date: "2024-12-31",
        tags: ["movies"]
    },
    {
        url: "/images/digitalrealm.jpeg",
        title: "PlayStation",
        date: "2025-01-04",
        tags: ["visuals","games"]
    },
    {
        url: "/images/endisnigh.png",
        title: "End is nigh",
        date: "2025-01-04",
        tags: ["visuals","quotes"]
    },
    {
        url: "/images/ladyjanegrey.jpg",
        title: "Lady J.",
        date: "2025-01-04",
        tags: ["art"]
    },
    {
        url: "/images/galaxy.jpeg",
        title: "Are we there yet?",
        href: "https://www.instagram.com/p/C0m8gC_oSH2/",
        date: "2025-01-04",
        tags: ["visuals","mood"]
    },
    {
        url: "/images/trash.jpeg",
        title: "Toss it.",
        date: "2025-01-04",
        tags: ["visuals","design"]
    },


];
