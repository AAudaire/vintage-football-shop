import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Equipe de France - 2006 - Domicile - Zinedine Zidane",
    price: 90,
    description:
      "Maillot de l'équipe de France 2006 floqué Zinedine Zidane, la dernière compétition de la légende, où il attendra un niveau exceptionel en emmenant son équipe jusqu'en finale face a l'italie. Malheureusement cette finale connaitra une fin triste pour le Z, avec le fameux coup de boule et la défaite de l'équipe de france.",
    images: [
      {
        url: "src\\assets\\Jersey\\Edf-2006-domicile-Zidane-1.jpg",
        alt: "Maillot de l'équipe de France 2006 Zidane domicile face",
      },
      {
        url: "src\\assets\\Jersey\\Edf-2006-domicile-Zidane-2.jpg",
        alt: "Maillot de l'équipe de France 2006 Zidane domicile dos",
      },
    ],
    category: "Maillots",
  },
  {
    id: 2,
    name: "AC Milan - 2009/2010 - Domicile -  Ronaldinho",
    price: 85,
    description:
      "Maillot mythique de l'AC Milan 2009/2010 aux couleurs rouge et noir, floqué Ronaldinho. Un des plus beaux maillots de l'histoire du football avec le génie brésilien.",
    images: [
      {
        url: "src\\assets\\Jersey\\ACMilan-2009-domicile-Ronaldinho-1.jpg",
        alt: "Maillot de l'AC Milan 2009/2010 Ronaldinho domicile face",
      },
      {
        url: "src\\assets\\Jersey\\ACMilan-2009-domicile-Ronaldinho-2.jpg",
        alt: "Maillot de l'AC Milan 2009/2010 Ronaldinho domicile dos",
      },
    ],
    category: "Maillots",
  },
  {
    id: 3,
    name: "FC Barcelona - 2010/2011 - Domicile - Messi",
    price: 95,
    description:
      "Maillot emblématique du FC Barcelona 2010/2011, floqué Lionel Messi. L'année de la Ligue des Champions remportée face à Manchester United.",
    images: [
      {
        url: "src\\assets\\Jersey\\FCBarcelona-2010-domicile-Messi-1.jpg",
        alt: "Maillot du FC Barcelona 2010/2011 Messi domicile face",
      },
      {
        url: "src\\assets\\Jersey\\FCBarcelona-2010-domicile-Messi-2.jpg",
        alt: "Maillot du FC Barcelona 2010/2011 Messi domicile dos",
      },
    ],
    category: "Maillots",
  },
  {
    id: 4,
    name: "Manchester United - 1998/2000 - Domicile - Beckham",
    price: 88,
    description:
      "Maillot légendaire de Manchester United 1998/2000 floqué David Beckham. 2 saisons plus que réussies pour le Manchester de Sir Alex Ferguson avec 2 titres de Premier League, 1 FA Cup, 1 Ligue des Champions et 1 coupe intercontinentale ! David Beckham jouera 102 matchs pour 17 buts et 38 passes décisives.",
    images: [
      {
        url: "src\\assets\\Jersey\\ManU-1998-domicile-Beckham-1.jpg",
        alt: "de Manchester United 1998/2000 Beckham domicile face",
      },
      {
        url: "src\\assets\\Jersey\\ManU-1998-domicile-Beckham-2.jpg",
        alt: "de Manchester United 1998/2000 Beckham domicile face",
      },
    ],
    category: "Maillots",
  },
  {
    id: 5,
    name: "Real Madrid - 2001/2002 - Domicile - Zidane",
    price: 92,
    description:
      "Maillot blanc du Real Madrid 2001/2002 floqué Zinedine Zidane. L'année de la victoire en Ligue des Champions face au Bayer Leverkusen.",
    images: [
      {
        url: "src\\assets\\Jersey\\RealMadrid-2001-domicile-Zidane-1.jpg",
        alt: "Maillot du Real Madrid 2001/2002 Zidane domicile face",
      },
      {
        url: "src\\assets\\Jersey\\RealMadrid-2001-domicile-Zidane-2.jpg",
        alt: "Maillot du Real Madrid 2001/2002 Zidane domicile dos",
      },
    ],
    category: "Maillots",
  },
    {
    id: 6,
    name: "Real Madrid - 2001/2002 - Domicile",
    price: 60,
    description:
      "Maillot blanc du Real Madrid 2001/2002. L'année de la victoire en Ligue des Champions face au Bayer Leverkusen.",
    images: [
      {
        url: "src\\assets\\Jersey\\RealMadrid-2001-domicile-Zidane-1.jpg",
        alt: "Maillot du Real Madrid 2001/2002 Zidane domicile face",
      },
    ],
    category: "Maillots",
  },
];
