export const localizeDateFields = (fields: string[], collection: any[]) => {
  const converted = collection.map((doc) => {
    let localizedDoc = { ...doc };
    for (let f of fields) {
      localizedDoc[f] = doc[f].replace("Z", "");
    }
    return localizedDoc;
  });
  return converted;
};
