const parseEnv = () => {
  const envObject = process.env;
  let str = "";
  for (let item in envObject) {
    if (item.indexOf("RSS_") !== -1) {
      str += `${item}=${envObject[item]}; `;
    }
  }
  console.log(str);
};

parseEnv();
