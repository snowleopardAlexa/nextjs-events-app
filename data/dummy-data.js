const DUMMY_DATA = [
  {
    id: "1",
    title: "Pets Lovers unite!",
    description:
      "All Pets Lovers and Pets Owners from New York City - come and join us!",
    location: "Wall Street 5, 98765 New York City, NY",
    date: "2022-08-30",
    image: "images/pets.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Parrots love to sing!",
    description:
      "Parrots love to flock together! Bring your parrot to our Parrot House!",
    location: "5th Avenue 77th Street, New York City, NY ",
    date: "2022-04-10",
    image: "images/parrots.jpg",
    isFeatured: true,
  },
  {
    id: "3",
    title: "Cats Lovers You Are Awesome!",
    description:
      "Bring your cats with you! We will show dogs owners that cats can do it too! Yes, we are social creatures, so our kitties!",
    location: "183 Eldert Street, Brooklyn, NY",
    date: "2022-06-06",
    image: "images/cat.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_DATA.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_DATA;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_DATA.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_DATA.find((event) => event.id === id);
}
