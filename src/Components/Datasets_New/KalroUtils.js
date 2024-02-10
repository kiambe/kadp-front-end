function countGenders(data, key = "gender") {
  let femaleCount = 0;
  let maleCount = 0;

  // Iterate over the keys in the JSON object

  data.map((d) => {
    if (d[key] === "Female") {
      femaleCount++; // Increment female count if gender is female
    } else if (d[key] === "Male") {
      maleCount++; // Increment male count if gender is male
    }
  });

  let dataToReturn = { female: femaleCount, male: maleCount };

  return [
    {
      name: "Female",
      value: femaleCount,
    },
    {
      name: "male",
      value: maleCount,
    },
  ];
}

const getCOlumnsFromArray = (arrayOfObjects) => {
  //   console.log(keys); // Output: ['id', 'name', 'age']

  // If you want to extract keys from all objects in the array
  let allKeys = [];

  arrayOfObjects.map(
    (obj) =>
      !allKeys.includes(Object.keys(obj)) && allKeys.push(Object.keys(obj))
  );

  return allKeys[0].map((d) => {
    return { field: d, minWidth: 300 };
  });
};

const filterUniqueValues = (array, property) => {
  const uniqueValues = new Set();
  // console.log({array})
  return array.filter((item) => {
    const value = item[property];
    if (!uniqueValues.has(value)) {
      uniqueValues.add(value);
      return true;
    }
    return false;
  });
};

const structureGraphDataHelper = (
  array,
  key,
  value,
  valueToReturn = "Total_farmers"
) => {
  console.log({ array });

  let val = array.filter((d) => {
    return d[key] === value;
  });
  console.log(val);

  if (val.length === 0) {
    return 0;
  } else {
    return val[0][valueToReturn];
  }
};
const structureGraphData = (labels, data, key, valueToReturn) => {
  console.log(labels);
  console.log(data);

  let dataToReturn = [];
  labels.map((d) => {
    dataToReturn = [
      ...dataToReturn,
      structureGraphDataHelper(data, key, d, valueToReturn),
    ];
  });

  return dataToReturn;
};

export {
  countGenders,
  getCOlumnsFromArray,
  structureGraphData,
  structureGraphDataHelper,
  filterUniqueValues,
};
