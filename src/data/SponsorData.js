import sponsor1 from "../../public/sponsors/sponsor1.png";
import sponsor2 from "../../public/sponsors/sponsor2.png";
import sponsor3 from "../../public/sponsors/sponsor3.png";

class Sponsor {
  constructor(title, alt, website, image, description = "") {
    this.title = title;
    this.alt = alt;
    this.website = website;
    this.image = image;
    this.description = description;
  }
}

export const SponsorData = [
  new Sponsor(
    "Sponsor 1",
    "Sponsor 1 Logo",
    "https://example.com/sponsor1",
    sponsor1,
    "Our first amazing sponsor supporting the event."
  ),
  new Sponsor(
    "Sponsor 2", 
    "Sponsor 2 Logo",
    "https://example.com/sponsor2",
    sponsor2,
    "Our second fantastic sponsor helping make this event possible."
  ),
  new Sponsor(
    "Sponsor 3",
    "Sponsor 3 Logo", 
    "https://example.com/sponsor3",
    sponsor3,
    "Our third incredible sponsor contributing to the success of this event."
  ),
];
