new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 5,
  breakpoint: {
    991: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
}).mount();
