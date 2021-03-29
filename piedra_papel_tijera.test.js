const {
  random_machine_answer,
  check_user_option,
} = require("./piedra_papel_tijera");

describe("test entire options rock paper scissors", () => {
  const options = ["piedra", "tijera", "papel"];
  it("test if random machine answer is valid", () => {
    const random_value = random_machine_answer();
    expect(options).toContain(random_value);
  });
  it("test input user make it fail", () => {
    const invalid_option = "abcdefg";
    const check_input_user = check_user_option(invalid_option);
    expect(check_input_user).toBe("La opcion no es valida");
  });
});
