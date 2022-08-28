var productExceptSelf = function (nums) {
  const res = [];

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= nums[j];
  }

  return res;
};

exports.lambda_handler = async (event) => {
  productExceptSelf([
    45, 76, 56, 25, 27, 89, 38, 6, 9, 74, 94, 79, 31, 5, 52, 87, 40, 50, 85, 90,
    9, 33, 46, 71, 35, 9, 17, 80, 62, 12, 95, 78, 35, 11, 89, 34, 75, 92, 54,
    91, 53, 17, 62, 91, 40, 36, 29, 49, 68, 7, 56, 78, 6, 32, 10, 35, 90, 27,
    33, 91, 9, 78, 32, 84, 12, 1, 99, 62, 58, 64, 35, 61, 69, 70, 26, 25, 8, 26,
    48, 30, 84, 96, 84, 21, 100, 42, 36, 94, 89, 27, 91, 49, 21, 29, 43, 33, 3,
    10, 60, 11,
  ]);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Node - Product Except Self" }),
  };
  return response;
};
