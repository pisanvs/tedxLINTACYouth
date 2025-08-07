import ryg from "../../public/sponsors/ryg.png";
import publicis from "../../public/sponsors/publicis.png";
import indumac from "../../public/sponsors/indumac.png";

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
    "R&G Consultoría",
    "Logo R&G",
    "https://rygconsultoria.cl/",
    ryg,
    "Consultora Líder en auditoría, contabilidad, y servicios laborales"
  ),
  new Sponsor(
    "Publicis Groupe Chile", 
    "Logo Publicis Groupe",
    "https://www.publicisgroupe.com/",
    publicis,
    "Líder global en marketing, comunicación y transformación digital, conectando a las más grandes marcas con personas a través de la creatividad y la tecnología."
  ),
  new Sponsor(
    "Indumac",
    "Logo Indumac", 
    "https://www.indumacequipamientos.cl/",
    indumac,
    "Empresa chilena líder en mobiliario funcional, con más de 80 años de experiencia, combinando diseño, calidad e innovación para las mejores instituciones de Chile y el extranjero."
  ),
];
