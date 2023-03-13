"use strict";

const planets = {
  mercury: {
    name: "mercury",
    overview:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    structure:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    surface:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    rotation: "58.6 days",
    revolution: "87.97 days",
    radius: "2,4739.7 KM",
    temperature: "430°C",
    image: "IMG/planet-mercury.svg",
    internal: "IMG/planet-mercury-internal.svg",
    geology: "IMG/geology-mercury.png",
    color: "#419EBB",
  },

  venus: {
    name: "venus",
    overview:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
    structure:
      "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
    surface:
      "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
    rotation: "243 Days",
    revolution: "224.7 Days",
    radius: "6,051.8 KM",
    temperature: "471°C",
    image: "IMG/planet-venus.svg",
    internal: "IMG/planet-venus-internal.svg",
    geology: "IMG/geology-venus.png",
    color: "#EDA249",
  },

  earth: {
    name: "earth",
    overview:
      "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
    structure:
      "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
    surface:
      "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
    rotation: "0.99 Days",
    revolution: "365.26 Days",
    radius: "6,371 KM",
    temperature: "16°C",
    image: "IMG/planet-earth.svg",
    internal: "IMG/planet-earth-internal.svg",
    geology: "IMG/geology-earth.png",
    color: "#6D2ED5",
  },

  mars: {
    name: "mars",
    overview:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'.",
    structure:
      "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
    surface:
      "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
    rotation: "1.03 Days",
    revolution: "1.89 years",
    radius: "3,389.5 KM",
    temperature: "-28°C",
    image: "IMG/planet-mars.svg",
    internal: "IMG/planet-mars-internal.svg",
    geology: "IMG/geology-mars.png",
    color: "#D14C32",
  },

  jupiter: {
    name: "jupiter",
    overview:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
    structure:
      "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
    surface:
      "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
    rotation: "9.93 hours",
    revolution: "11.86 Years",
    radius: "69,911 KM",
    temperature: "-108°C",
    image: "IMG/planet-jupiter.svg",
    internal: "IMG/planet-jupiter-internal.svg",
    geology: "IMG/geology-jupiter.png",
    color: "#D83A34",
  },

  saturn: {
    name: "saturn",
    overview:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
    structure:
      "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
    surface:
      "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
    rotation: "10.8 Hours",
    revolution: "29.46 Years",
    radius: "58,232 KM",
    temperature: "-138°c",
    image: "IMG/planet-saturn.svg",
    internal: "IMG/planet-saturn-internal.svg",
    geology: "IMG/geology-saturn.png",
    color: "#CD5120",
  },

  uranus: {
    name: "uranus",
    overview:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
    structure:
      "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
    surface:
      "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
    rotation: "17.2 Hours",
    revolution: "84 Years",
    radius: "25,362 KM",
    temperature: "-195°c",
    image: "IMG/planet-uranus.svg",
    internal: "IMG/planet-uranus-internal.svg",
    geology: "IMG/geology-uranus.png",
    color: "#1EC1A2",
  },

  neptune: {
    name: "neptune",
    overview:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
    structure:
      "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
    surface:
      "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
    rotation: "16.08 Hours",
    revolution: "164.79 Years",
    radius: "24,622 KM",
    temperature: "-201°c",
    image: "IMG/planet-neptune.svg",
    internal: "IMG/planet-neptune-internal.svg",
    geology: "IMG/geology-neptune.png",
    color: "#2D68F0",
  },
};

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

let allPlanets = document.querySelectorAll(".main-nav-link");
let planetImage = document.querySelector(".planet-image");
let geologyImage = document.querySelector(".planet-geology");
let planetName = document.querySelector(".planet-name");
let planetText = document.querySelector(".description");
let srcLink = document.querySelector(".src-link");
let overviewBtn = document.querySelector(".overview-dt");
let structureBtn = document.querySelector(".structure-dt");
let surfaceBtn = document.querySelector(".surface-dt");
let activeBtn = document.querySelector(".active-btn");
let rotateInfo = document.querySelector(".rotate-info");
let revolutionInfo = document.querySelector(".revolution-info");
let temperatureInfo = document.querySelector(".temp-info");
let radiusInfo = document.querySelector(".radius-info");
let overviewMobile = document.querySelector(".overview-mobile");
let structureMobile = document.querySelector(".structure-mobile");
let surfaceMobile = document.querySelector(".surface-mobile");

let mercuryPlanet = document.querySelector(".mercury");
let venusPlanet = document.querySelector(".venus");
let earthPlanet = document.querySelector(".earth");
let marsPlanet = document.querySelector(".mars");
let jupiterPlanet = document.querySelector(".jupiter");
let saturnPlanet = document.querySelector(".saturn");
let uranusPlanet = document.querySelector(".uranus");
let neptunePlanet = document.querySelector(".neptune");
const logoBtn = document.querySelector(".logo");

mercuryPlanet.classList.add("active-link");
venusPlanet.classList.remove("active-link");
earthPlanet.classList.remove("active-link");
marsPlanet.classList.remove("active-link");
jupiterPlanet.classList.remove("active-link");
saturnPlanet.classList.remove("active-link");
uranusPlanet.classList.remove("active-link");
neptunePlanet.classList.remove("active-link");
planetName.textContent = planets.mercury.name;
planetText.textContent = planets.mercury.overview;
planetImage.src = planets.mercury.image;
activeBtn.style.backgroundColor = planets.mercury.color;
activeBtn.style.borderColor = planets.mercury.color;
rotateInfo.textContent = planets.mercury.rotation;
revolutionInfo.textContent = planets.mercury.revolution;
radiusInfo.textContent = planets.mercury.radius;
temperatureInfo.textContent = planets.mercury.temperature;
overviewBtn.style.backgroundColor = planets.mercury.color;
overviewBtn.style.borderColor = planets.mercury.color;
overviewMobile.style.borderBottom = "4px solid #419EBB";
structureBtn.style.backgroundColor = "transparent";
structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
surfaceBtn.style.backgroundColor = "transparent";
surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

overviewBtn.addEventListener("click", () => {
  planetText.textContent = planets.mercury.overview;
  planetImage.src = planets.mercury.image;
  geologyImage.classList.add("hidden");
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  overviewBtn.style.backgroundColor = planets.mercury.color;
  overviewBtn.style.borderColor = planets.mercury.color;
});

structureBtn.addEventListener("click", () => {
  planetText.textContent = planets.mercury.structure;
  planetImage.src = planets.mercury.internal;
  geologyImage.classList.add("hidden");
  overviewBtn.style.backgroundColor = "transparent";
  overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  structureBtn.style.backgroundColor = planets.mercury.color;
  structureBtn.style.borderColor = planets.mercury.color;
});

surfaceBtn.addEventListener("click", () => {
  planetText.textContent = planets.mercury.surface;
  planetImage.src = planets.mercury.image;
  geologyImage.src = planets.mercury.geology;
  geologyImage.classList.remove("hidden");
  overviewBtn.style.backgroundColor = "transparent";
  overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = planets.mercury.color;
  surfaceBtn.style.borderColor = planets.mercury.color;
});

overviewMobile.addEventListener("click", () => {
  planetText.textContent = planets.mercury.overview;
  planetImage.src = planets.mercury.image;
  geologyImage.classList.add("hidden");
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";
  // structureMobile.style.backgroundColor = planets.mercury.color;
  overviewMobile.style.borderBottom = "4px solid #419EBB";
});

structureMobile.addEventListener("click", () => {
  planetText.textContent = planets.mercury.structure;
  planetImage.src = planets.mercury.internal;
  geologyImage.classList.add("hidden");
  overviewMobile.style.backgroundColor = "transparent";
  overviewMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";
  // structureMobile.style.backgroundColor = planets.mercury.color;
  structureMobile.style.borderBottom = "4px solid #419EBB";
});

surfaceMobile.addEventListener("click", () => {
  planetText.textContent = planets.mercury.surface;
  planetImage.src = planets.mercury.image;
  geologyImage.classList.remove("hidden");
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  overviewMobile.style.backgroundColor = "transparent";
  overviewMobile.style.border = "none";
  // structureMobile.style.backgroundColor = planets.mercury.color;
  surfaceMobile.style.borderBottom = "4px solid #419EBB";
});

logoBtn.addEventListener("click", () => {
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.add("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.mercury.name;
  planetText.textContent = planets.mercury.overview;
  planetImage.src = planets.mercury.image;
  activeBtn.style.backgroundColor = planets.mercury.color;
  activeBtn.style.borderColor = planets.mercury.color;
  rotateInfo.textContent = planets.mercury.rotation;
  revolutionInfo.textContent = planets.mercury.revolution;
  radiusInfo.textContent = planets.mercury.radius;
  temperatureInfo.textContent = planets.mercury.temperature;
  overviewBtn.style.backgroundColor = planets.mercury.color;
  overviewBtn.style.borderColor = planets.mercury.color;
  overviewMobile.style.borderBottom = "4px solid #419EBB";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.mercury.overview;
    planetImage.src = planets.mercury.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.mercury.color;
    overviewBtn.style.borderColor = planets.mercury.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.mercury.structure;
    planetImage.src = planets.mercury.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.mercury.color;
    structureBtn.style.borderColor = planets.mercury.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.mercury.surface;
    planetImage.src = planets.mercury.image;
    geologyImage.src = planets.mercury.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.mercury.color;
    surfaceBtn.style.borderColor = planets.mercury.color;
  });

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.mercury.overview;
    planetImage.src = planets.mercury.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #419EBB";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.mercury.structure;
    planetImage.src = planets.mercury.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #419EBB";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.mercury.surface;
    planetImage.src = planets.mercury.image;
    geologyImage.src = planets.mercury.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #419EBB";
  });
});

mercuryPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.add("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.mercury.name;
  planetText.textContent = planets.mercury.overview;
  planetImage.src = planets.mercury.image;
  activeBtn.style.backgroundColor = planets.mercury.color;
  activeBtn.style.borderColor = planets.mercury.color;
  rotateInfo.textContent = planets.mercury.rotation;
  revolutionInfo.textContent = planets.mercury.revolution;
  radiusInfo.textContent = planets.mercury.radius;
  temperatureInfo.textContent = planets.mercury.temperature;
  overviewBtn.style.backgroundColor = planets.mercury.color;
  overviewBtn.style.borderColor = planets.mercury.color;
  overviewMobile.style.borderBottom = "4px solid #419EBB";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.mercury.overview;
    planetImage.src = planets.mercury.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.mercury.color;
    overviewBtn.style.borderColor = planets.mercury.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.mercury.structure;
    planetImage.src = planets.mercury.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.mercury.color;
    structureBtn.style.borderColor = planets.mercury.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.mercury.surface;
    planetImage.src = planets.mercury.image;
    geologyImage.src = planets.mercury.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.mercury.color;
    surfaceBtn.style.borderColor = planets.mercury.color;
  });

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.mercury.overview;
    planetImage.src = planets.mercury.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #419EBB";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.mercury.structure;
    planetImage.src = planets.mercury.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #419EBB";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.mercury.surface;
    planetImage.src = planets.mercury.image;
    geologyImage.src = planets.mercury.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #419EBB";
  });
});

venusPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.add("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.venus.name;
  planetText.textContent = planets.venus.overview;
  planetImage.src = planets.venus.image;
  activeBtn.style.backgroundColor = planets.venus.color;
  activeBtn.style.borderColor = planets.venus.color;
  rotateInfo.textContent = planets.venus.rotation;
  revolutionInfo.textContent = planets.venus.revolution;
  radiusInfo.textContent = planets.venus.radius;
  temperatureInfo.textContent = planets.venus.temperature;
  overviewMobile.style.borderBottom = "4px solid #EDA249";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";
  overviewBtn.style.backgroundColor = planets.venus.color;
  overviewBtn.style.borderColor = planets.venus.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.venus.overview;
    planetImage.src = planets.venus.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.venus.color;
    overviewBtn.style.borderColor = planets.venus.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.venus.structure;
    planetImage.src = planets.venus.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.venus.color;
    structureBtn.style.borderColor = planets.venus.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.venus.surface;
    planetImage.src = planets.venus.image;
    geologyImage.src = planets.venus.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.venus.color;
    surfaceBtn.style.borderColor = planets.venus.color;
  });

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.venus.overview;
    planetImage.src = planets.venus.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #EDA249";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.venus.structure;
    planetImage.src = planets.venus.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #EDA249";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.venus.surface;
    planetImage.src = planets.venus.image;
    geologyImage.src = planets.venus.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #EDA249";
  });
});

earthPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.add("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.earth.name;
  planetText.textContent = planets.earth.overview;
  planetImage.src = planets.earth.image;
  activeBtn.style.backgroundColor = planets.earth.color;
  activeBtn.style.borderColor = planets.earth.color;
  rotateInfo.textContent = planets.earth.rotation;
  revolutionInfo.textContent = planets.earth.revolution;
  radiusInfo.textContent = planets.earth.radius;
  temperatureInfo.textContent = planets.earth.temperature;
  overviewBtn.style.backgroundColor = planets.earth.color;
  overviewBtn.style.borderColor = planets.earth.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.earth.overview;
    planetImage.src = planets.earth.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.earth.color;
    overviewBtn.style.borderColor = planets.earth.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.earth.structure;
    planetImage.src = planets.earth.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.earth.color;
    structureBtn.style.borderColor = planets.earth.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.earth.surface;
    planetImage.src = planets.earth.image;
    geologyImage.src = planets.earth.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.earth.color;
    surfaceBtn.style.borderColor = planets.earth.color;
  });

  overviewMobile.style.borderBottom = "4px solid #6D2ED5";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.earth.overview;
    planetImage.src = planets.earth.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #6D2ED5";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.earth.structure;
    planetImage.src = planets.earth.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #6D2ED5";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.earth.surface;
    planetImage.src = planets.earth.image;
    geologyImage.src = planets.earth.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #6D2ED5";
  });
});

marsPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.add("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.mars.name;
  planetText.textContent = planets.mars.overview;
  planetImage.src = planets.mars.image;
  activeBtn.style.backgroundColor = planets.mars.color;
  activeBtn.style.borderColor = planets.mars.color;
  rotateInfo.textContent = planets.mars.rotation;
  revolutionInfo.textContent = planets.mars.revolution;
  radiusInfo.textContent = planets.mars.radius;
  temperatureInfo.textContent = planets.mars.temperature;
  overviewBtn.style.backgroundColor = planets.mars.color;
  overviewBtn.style.borderColor = planets.mars.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.mars.overview;
    planetImage.src = planets.mars.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.mars.color;
    overviewBtn.style.borderColor = planets.mars.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.mars.structure;
    planetImage.src = planets.mars.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.mars.color;
    structureBtn.style.borderColor = planets.mars.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.mars.surface;
    planetImage.src = planets.mars.image;
    geologyImage.src = planets.mars.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.mars.color;
    surfaceBtn.style.borderColor = planets.mars.color;
  });

  overviewMobile.style.borderBottom = "4px solid #D14C32";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.mars.overview;
    planetImage.src = planets.mars.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #D14C32";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.mars.structure;
    planetImage.src = planets.mars.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #D14C32";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.mars.surface;
    planetImage.src = planets.mars.image;
    geologyImage.src = planets.mars.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #D14C32";
  });
});

jupiterPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.add("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.jupiter.name;
  planetText.textContent = planets.jupiter.overview;
  planetImage.src = planets.jupiter.image;
  activeBtn.style.backgroundColor = planets.jupiter.color;
  activeBtn.style.borderColor = planets.jupiter.color;
  rotateInfo.textContent = planets.jupiter.rotation;
  revolutionInfo.textContent = planets.jupiter.revolution;
  radiusInfo.textContent = planets.jupiter.radius;
  temperatureInfo.textContent = planets.jupiter.temperature;
  overviewBtn.style.backgroundColor = planets.jupiter.color;
  overviewBtn.style.borderColor = planets.jupiter.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.jupiter.overview;
    planetImage.src = planets.jupiter.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.jupiter.color;
    overviewBtn.style.borderColor = planets.jupiter.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.jupiter.structure;
    planetImage.src = planets.jupiter.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.jupiter.color;
    structureBtn.style.borderColor = planets.jupiter.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.jupiter.surface;
    planetImage.src = planets.jupiter.image;
    geologyImage.src = planets.jupiter.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.jupiter.color;
    surfaceBtn.style.borderColor = planets.jupiter.color;
  });

  overviewMobile.style.borderBottom = "4px solid #D83A34";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.jupiter.overview;
    planetImage.src = planets.jupiter.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #D83A34";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.jupiter.structure;
    planetImage.src = planets.jupiter.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #D83A34";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.jupiter.surface;
    planetImage.src = planets.jupiter.image;
    geologyImage.src = planets.jupiter.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #D83A34";
  });
});

saturnPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.add("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.saturn.name;
  planetText.textContent = planets.saturn.overview;
  planetImage.src = planets.saturn.image;
  activeBtn.style.backgroundColor = planets.saturn.color;
  activeBtn.style.borderColor = planets.saturn.color;
  rotateInfo.textContent = planets.saturn.rotation;
  revolutionInfo.textContent = planets.saturn.revolution;
  radiusInfo.textContent = planets.saturn.radius;
  temperatureInfo.textContent = planets.saturn.temperature;
  overviewBtn.style.backgroundColor = planets.saturn.color;
  overviewBtn.style.borderColor = planets.saturn.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.saturn.overview;
    planetImage.src = planets.saturn.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.saturn.color;
    overviewBtn.style.borderColor = planets.saturn.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.saturn.structure;
    planetImage.src = planets.saturn.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.saturn.color;
    structureBtn.style.borderColor = planets.saturn.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.saturn.surface;
    planetImage.src = planets.saturn.image;
    geologyImage.src = planets.saturn.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.saturn.color;
    surfaceBtn.style.borderColor = planets.saturn.color;
  });

  overviewMobile.style.borderBottom = "4px solid #CD5120";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.saturn.overview;
    planetImage.src = planets.saturn.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #CD5120";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.saturn.structure;
    planetImage.src = planets.saturn.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #CD5120";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.saturn.surface;
    planetImage.src = planets.saturn.image;
    geologyImage.src = planets.saturn.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #CD5120";
  });
});

uranusPlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.add("active-link");
  neptunePlanet.classList.remove("active-link");
  planetName.textContent = planets.uranus.name;
  planetText.textContent = planets.uranus.overview;
  planetImage.src = planets.uranus.image;
  activeBtn.style.backgroundColor = planets.uranus.color;
  activeBtn.style.borderColor = planets.uranus.color;
  rotateInfo.textContent = planets.uranus.rotation;
  revolutionInfo.textContent = planets.uranus.revolution;
  radiusInfo.textContent = planets.uranus.radius;
  temperatureInfo.textContent = planets.uranus.temperature;
  overviewBtn.style.backgroundColor = planets.uranus.color;
  overviewBtn.style.borderColor = planets.uranus.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.uranus.overview;
    planetImage.src = planets.uranus.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.uranus.color;
    overviewBtn.style.borderColor = planets.uranus.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.uranus.structure;
    planetImage.src = planets.uranus.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.uranus.color;
    structureBtn.style.borderColor = planets.uranus.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.uranus.surface;
    planetImage.src = planets.uranus.image;
    geologyImage.src = planets.uranus.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.uranus.color;
    surfaceBtn.style.borderColor = planets.uranus.color;
  });

  overviewMobile.style.borderBottom = "4px solid #1EC1A2";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.uranus.overview;
    planetImage.src = planets.uranus.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #1EC1A2";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.uranus.structure;
    planetImage.src = planets.uranus.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #1EC1A2";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.uranus.surface;
    planetImage.src = planets.uranus.image;
    geologyImage.src = planets.uranus.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #1EC1A2";
  });
});

neptunePlanet.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
  geologyImage.classList.add("hidden");
  mercuryPlanet.classList.remove("active-link");
  venusPlanet.classList.remove("active-link");
  earthPlanet.classList.remove("active-link");
  marsPlanet.classList.remove("active-link");
  jupiterPlanet.classList.remove("active-link");
  saturnPlanet.classList.remove("active-link");
  uranusPlanet.classList.remove("active-link");
  neptunePlanet.classList.add("active-link");
  planetName.textContent = planets.neptune.name;
  planetText.textContent = planets.neptune.overview;
  planetImage.src = planets.neptune.image;
  activeBtn.style.backgroundColor = planets.neptune.color;
  activeBtn.style.borderColor = planets.neptune.color;
  rotateInfo.textContent = planets.neptune.rotation;
  revolutionInfo.textContent = planets.neptune.revolution;
  radiusInfo.textContent = planets.neptune.radius;
  temperatureInfo.textContent = planets.neptune.temperature;
  overviewBtn.style.backgroundColor = planets.neptune.color;
  overviewBtn.style.borderColor = planets.neptune.color;
  structureBtn.style.backgroundColor = "transparent";
  structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
  surfaceBtn.style.backgroundColor = "transparent";
  surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";

  overviewBtn.addEventListener("click", () => {
    planetText.textContent = planets.neptune.overview;
    planetImage.src = planets.neptune.image;
    geologyImage.classList.add("hidden");
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    overviewBtn.style.backgroundColor = planets.neptune.color;
    overviewBtn.style.borderColor = planets.neptune.color;
  });

  structureBtn.addEventListener("click", () => {
    planetText.textContent = planets.neptune.structure;
    planetImage.src = planets.neptune.internal;
    geologyImage.classList.add("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = "transparent";
    surfaceBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = planets.neptune.color;
    structureBtn.style.borderColor = planets.neptune.color;
  });

  surfaceBtn.addEventListener("click", () => {
    planetText.textContent = planets.neptune.surface;
    planetImage.src = planets.neptune.image;
    geologyImage.src = planets.neptune.geology;
    geologyImage.classList.remove("hidden");
    overviewBtn.style.backgroundColor = "transparent";
    overviewBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    structureBtn.style.backgroundColor = "transparent";
    structureBtn.style.border = "0.1rem solid rgba(255, 255, 255, 0.2)";
    surfaceBtn.style.backgroundColor = planets.neptune.color;
    surfaceBtn.style.borderColor = planets.neptune.color;
  });

  overviewMobile.style.borderBottom = "4px solid #2D68F0";
  structureMobile.style.backgroundColor = "transparent";
  structureMobile.style.border = "none";
  surfaceMobile.style.backgroundColor = "transparent";
  surfaceMobile.style.border = "none";

  overviewMobile.addEventListener("click", () => {
    planetText.textContent = planets.neptune.overview;
    planetImage.src = planets.neptune.image;
    geologyImage.classList.add("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    overviewMobile.style.borderBottom = "4px solid #2D68F0";
  });

  structureMobile.addEventListener("click", () => {
    planetText.textContent = planets.neptune.structure;
    planetImage.src = planets.neptune.internal;
    geologyImage.classList.add("hidden");
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    surfaceMobile.style.backgroundColor = "transparent";
    surfaceMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    structureMobile.style.borderBottom = "4px solid #2D68F0";
  });

  surfaceMobile.addEventListener("click", () => {
    planetText.textContent = planets.neptune.surface;
    planetImage.src = planets.neptune.image;
    geologyImage.src = planets.neptune.geology;
    geologyImage.classList.remove("hidden");
    structureMobile.style.backgroundColor = "transparent";
    structureMobile.style.border = "none";
    overviewMobile.style.backgroundColor = "transparent";
    overviewMobile.style.border = "none";
    // structureMobile.style.backgroundColor = planets.mercury.color;
    surfaceMobile.style.borderBottom = "4px solid #2D68F0";
  });
});
