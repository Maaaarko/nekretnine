const fields = {
    description: { name: "Opis" },
    price: { name: "Cijena" },
    contactNumber: { name: "Kontakt broj" },
    contactEmail: { name: "Kontakt email" },
    images: { name: "Slike" },
    type: { name: "Tip" },
    subType: { name: "Podtip" },
    yearBuilt: { name: "Godina izgradnje" },
    yearRenovated: { name: "Godina zadnje renovacije" },
    heatingType: { name: "Grijanje" },
    coolingType: { name: "Hlađenje" },
    garage: { name: "Garaža" },
    garageSize: { name: "Veličina garaže" },
    garageParkingSpaces: { name: "Parkirna mjesta u garaži" },
    parkingSpacesTotal: { name: "Parkirna mjesta" },
    parkingSpacesOutside: { name: "Vanjska parkirna mjesta" },
    numOfBedrooms: { name: "Spavaće sobe" },
    numOfBathrooms: { name: "Kupaonice" },
    numOfFullBathrooms: { name: "Potpune kupaonice" },
    numOfHalfBathrooms: { name: "Polukupaonice" },
    totalArea: { name: "Ukupna površina" },
    livingArea: { name: "Stambena površina" },
    patioArea: { name: "Površina okućnice" },
    numOfStories: { name: "Broj etaža" },
    storiesSpan: { name: "Prostiranje" },
    appliances: { name: "Kućanski uređaji" },
    degreeOfFurniture: { name: "Stupanj namještenosti" },
    floorType: { name: "Podovi" },
    roofType: { name: "Krov" },
    buildingMaterials: { name: "Građevinski materijal" },
    utilities: { name: "Dostupne komunalne usluge" },
    balcony: { name: "Balkon/terasa/lođa" },
    balconyType: { name: "Tip (balkon/terasa/lođa)" },
    balconySize: { name: "Površina balkona/terase/lođe" },
    pool: { name: "Bazen" },
    poolType: { name: "Tip bazena" },
    poolSize: { name: "Površina bazena" },
    sauna: { name: "Sauna" },
    vineCellar: { name: "Vinski podrum" },
    gym: { name: "Teretana" },
}

export const getFieldName = (field) => {
    return fields[field]?.name
}
