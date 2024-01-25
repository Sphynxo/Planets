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
    temperature: "430° C",
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
    temperature: "471° C",
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
    temperature: "16° C",
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
    temperature: "-28° C",
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
    temperature: "-108° C",
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
    temperature: "-138° C",
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
    temperature: "-195° C",
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
    temperature: "-201° C",
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

const planetName = document.querySelector(".planet-name");
const image = document.querySelector(".planet-image");
const description = document.querySelector(".description");
const link = document.querySelector(".link");
const rotate = document.querySelector(".rotate-info");
const revolution = document.querySelector(".revolution-info");
const radius = document.querySelector(".radius-info");
const temp = document.querySelector(".temp-info");
const buttons = document.querySelectorAll(".btn");
const activeBtn = document.querySelector('.active-btn')
const planetNames = document.querySelectorAll(".main-nav-link");
let currentPlanet = planets['mercury'];
planetName.textContent = currentPlanet.name;
description.textContent = currentPlanet.overview;
rotate.textContent = currentPlanet.rotation;
revolution.textContent = currentPlanet.revolution;
radius.textContent = currentPlanet.radius;
temp.textContent = currentPlanet.temperature


planetNames.forEach((planet) =>
  planet.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("active-btn"));

    planetNames.forEach((p) => p.classList.remove("active-link"));
    planet.classList.add("active-link");
    if (planet.classList.contains("active-link")) {
      const currentPlanetName = planet.textContent.toLowerCase();
      currentPlanet = planets[currentPlanetName];
      updateInfo(currentPlanet);
    }

    function updateInfo(planet) {
      planetName.textContent = planet.name;
      description.textContent = planet.overview;
      rotate.textContent = planet.rotation;
      revolution.textContent = planet.revolution;
      radius.textContent = planet.radius;
      temp.textContent = planet.temperature;
      image.src = planet.image;
      activeBtn.style.backgroundColor = planet.color
    }
  })
);

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    buttons.forEach((b) => b.classList.remove("active-btn"));
    button.classList.add("active-btn");
    
    if (button.classList.contains("overview")) {
      description.textContent = currentPlanet.overview;
      image.src = currentPlanet.image
    } else if (button.classList.contains("structure")) {
      description.textContent = currentPlanet.structure;
      image.src = currentPlanet.internal
    } else if (button.classList.contains("surface")) {
      description.textContent = currentPlanet.surface;
      image.src = currentPlanet.geology
    }
  })
);

