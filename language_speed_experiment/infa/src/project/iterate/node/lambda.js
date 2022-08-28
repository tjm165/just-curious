exports.lambda_handler = async (event) => {
  // TODO implement
  Array(1000000)
    .fill(0)
    .map((_, i) => i * i);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Node - Iterate" }),
  };
  return response;
};
