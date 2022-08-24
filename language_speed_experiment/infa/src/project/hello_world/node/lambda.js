exports.lambda_handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Node!" }),
  };
  return response;
};
