const parseArgs = () => {
  const arr = process.argv.slice(2);
  const arrNames = arr.filter((item, index) => (index % 2 === 0 ? item : null));
  const arrValues = arr.filter((item, index) =>
    index % 2 !== 0 ? item : null
  );
  const str = arrNames
    .map((item, index) =>
      index !== arrNames.length - 1
        ? `${item} is ${arrValues[index]},`
        : `${item} is ${arrValues[index]}`
    )
    .join(" ");

  console.log(str);
};

parseArgs();
