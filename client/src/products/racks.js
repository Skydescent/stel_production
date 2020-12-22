export const racksProps = {
  shelf: [
    { depth: 30, width: 70, price: 285 },
    { depth: 30, width: 100, price: 370 },
    { depth: 30, width: 120, price: 515 },
    { depth: 30, width: 150, price: 650 },
    { depth: 40, width: 70, price: 360 },
    { depth: 40, width: 100, price: 460 },
    { depth: 40, width: 120, price: 610 },
    { depth: 40, width: 150, price: 780 },
    { depth: 40, width: 9100, price: 630 },
    { depth: 50, width: 70, price: 410 },
    { depth: 50, width: 100, price: 535 },
    { depth: 50, width: 120, price: 750 },
    { depth: 50, width: 150, price: 920 },
    { depth: 50, width: 9100, price: 740 },
    { depth: 60, width: 70, price: 500 },
    { depth: 60, width: 100, price: 630 },
    { depth: 60, width: 120, price: 860 },
    { depth: 60, width: 150, price: 1140 },
    { depth: 60, width: 9100, price: 820 },
    { depth: 70, width: 100, price: 755 },
    { depth: 80, width: 70, price: 840 },
    { depth: 80, width: 100, price: 815 },
  ],
  bar: [
    { height: 50, load: 750, price: 170 },
    { height: 100, load: 500, price: 200 },
    { height: 100, load: 750, price: 220 },
    { height: 120, load: 750, price: 230 },
    { height: 150, load: 500, price: 180 },
    { height: 150, load: 750, price: 210 },
    { height: 180, load: 500, price: 205 },
    { height: 180, load: 750, price: 235 },
    { height: 180, load: 900, price: 295 },
    { height: 200, load: 500, price: 220 },
    { height: 200, load: 750, price: 255 },
    { height: 200, load: 900, price: 330 },
    { height: 220, load: 750, price: 290 },
    { height: 220, load: 900, price: 365 },
    { height: 230, load: 750, price: 315 },
    { height: 230, load: 900, price: 390 },
    { height: 240, load: 750, price: 310 },
    { height: 240, load: 900, price: 400 },
    { height: 250, load: 750, price: 325 },
    { height: 250, load: 900, price: 410 },
    { height: 300, load: 750, price: 400 },
    { height: 300, load: 900, price: 500 },
  ],
};

export const initialRack = {
  shelf: {
    depth: {
      value: 40,
      active: [30, 40, 50, 60, 70, 80],
    },
    width: {
      value: 100,
      active: [70, 100, 120, 150],
    },
  },
  bar: {
    height: {
      value: 100,
      active: [50, 100, 120, 150, 180, 200, 220, 230, 240, 250, 300],
    },
    load: {
      value: 750,
      active: [500, 750],
    },
  },
  shelfQnt: 4,
  barQnt: 4,
  itemsQnt: 1,
  installation: "self_install",
  delivery: "self_delivery",
  subDelivery: "to_flat",
  total: 2720,
};
