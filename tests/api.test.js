test("API response has expected JSON structure", () => {
  const response = {
    id: 1,
    name: "Blue",
    hex: "#0000FF"
  };

  expect(response).toHaveProperty("id");
  expect(response).toHaveProperty("name");
  expect(response).toHaveProperty("hex");
});
