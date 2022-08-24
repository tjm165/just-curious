var containsDuplicate = function (nums) {
  const numsSet = new Set();
  for (const i of nums) {
    if (numsSet.has(i)) {
      return true;
    }
    numsSet.add(i);
  }
  return false;
};

exports.lambda_handler = async (event) => {
  containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Node - Contains Duplicate"),
  };
  return response;
};
