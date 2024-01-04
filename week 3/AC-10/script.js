var nconstellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

//instead of this, I thought about just adding Canis Major and then sorting the array but eh whatever
var constellations = ["Canis Major"];
for (i = 0; i < nconstellations.length; i++) {
    constellations.push(nconstellations[i]);
}
planets.pop();
var bigStar = star.toUpperCase();

//not REALLY sure what they were asking for so here's both ideas of what they could mean
var galaxy1 = [constellations, planets];
var galaxy2 = [];
for (j = 0; j < (constellations.length + planets.length); j++) {
    if (j < constellations.length) {
        galaxy2.push(constellations[j]);
    }
    else {
        galaxy2.push(planets[j - (constellations.length - 1)])
    }
}