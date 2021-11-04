const mappings = {
  "Display Name": "FN",
  Email: "EMAIL",
  Title: "TITLE",
  "Phone Number": "TEL",
  Homepage: "URL",
};

export const makeVCard = (details) => {
  let card = `
BEGIN:VCARD
VERSION:3.0
`;

  for (const key in details) {
    if (mappings[key]) {
      card += `${mappings[key]}:${details[key]}\n`;
    }
  }

  card += `END:VCARD`;

  return card;
};
