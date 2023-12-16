interface testimonialProps {
  key: String;
  body: String;
  designation: String;
  imagePath: String;
  quotation: String;
}

export const testimonials: testimonialProps[] = [
  {
    key: "1",
    body: "One of the big value of HighTouch is time-to value. We have seen a lot of value very quickly",
    designation: "Head of Marketing Technology and Personalization at Chime",
    imagePath: "NM.jpeg",
    quotation: "Natalie Miles",
  },
  {
    key: "2",
    body: "We have to do things great for millions of customers every single day. We have to have technology to help power that. That’s what we’re getting from the Hightouch and Snowflake ecosystem.",
    designation: "Head of Marketing Technology and Personalization at Chime",
    imagePath: "BB.jpeg",
    quotation: "Bradley Breuer",
  },
  {
    key: "3",
    body: "The combination of Snowflake and Hightouch forms the cornerstone of our customer intelligence platform.",
    designation:
      "Customer Intelligence Platform Director at Warner Music Group",
    imagePath: "TD.jpeg",
    quotation: "Tom Dinneny",
  },
];
