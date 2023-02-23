module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  let i = 0;
  function deletePairs() {
    bracketsConfig.forEach((br) => {
      newStr = newStr.replace(`${br[0]}${br[1]}`, '');
    });
  };

  do {
    deletePairs();
    i++;
  } while (i < 100);

  let result = (newStr.length === 0) ? true : false;
  return result;
}
