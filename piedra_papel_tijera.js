let options = ["piedra", "tijera", "papel"];

const random_machine_answer = () => {
  let random_number_less_three = Math.random() * 3;
  let machine_random_option = Math.floor(random_number_less_three);
  let random_answer = options[machine_random_option];
  return random_answer;
};

const check_user_option = (string_user_option) => {
  const user_answer = string_user_option.toLowerCase();
  const is_within_the_options = options.includes(user_answer);
  if (is_within_the_options) {
    return user_answer;
  }
  return "La opcion no es valida";
};

const get_winner = (input_user) => {
  const machine_answer = random_machine_answer();
  const user_answer = check_user_option(input_user);

  if (user_answer === machine_answer) {
    return "Ninguno Gana";
  } else if (user_answer === "piedra" && machine_answer === "papel") {
    return `Usuario Gana`;
  } else if (user_answer === "piedra" && machine_answer === "tijera") {
    return `Usuario Gana`;
  } else if (user_answer === "papel" && machine_answer === "piedra") {
    return `Maquina Gana`;
  } else if (user_answer === "papel" && machine_answer === "tijera") {
    return `Maquina Gana`;
  } else if (user_answer === "tijera" && machine_answer === "piedra") {
    return `Maquina Gana`;
  } else if (user_answer === "tijera" && machine_answer === "papel") {
    return `Usuario Gana`;
  }
};

module.exports = { random_machine_answer, check_user_option };
