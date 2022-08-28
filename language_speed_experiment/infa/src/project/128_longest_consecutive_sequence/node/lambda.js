function longestConsecutive(nums) {
  if (!nums.length) {
    return 0;
  }

  const map = Object.create(null);
  let max = 0;

  for (const num of nums) {
    if (num in map) {
      continue;
    }

    const prev = num - 1;
    const next = num + 1;
    let len = 1;

    if (prev in map) {
      if (next in map) {
        len += map[prev] + map[next];
        map[prev - map[prev] + 1] = len;
        map[next + map[next] - 1] = len;
      } else {
        len += map[prev];
        ++map[prev - map[prev] + 1];
      }
    } else if (next in map) {
      len += map[next];
      ++map[next + map[next] - 1];
    }
    map[num] = len;
    max = Math.max(max, len);
  }

  return max;
}

exports.lambda_handler = async (event) => {
  longestConsecutive([
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
    body: JSON.stringify({
      message: "Hello from Node - Longest Consecutive Sequence",
    }),
  };
  return response;
};
