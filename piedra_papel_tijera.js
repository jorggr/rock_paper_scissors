const options = ["piedra", "tijera", "papel"];

const random_machine_answer = () => {
  const random_number_less_three = Math.random() * 3;
  const machine_random_option = Math.floor(random_number_less_three);
  const random_answer = options[machine_random_option];
  return random_answer;
};

const get_winner = (option_user) => {
  const machine_answer = random_machine_answer();

  if (option_user === machine_answer) {
    return "Ninguno Gana";
  } else if (option_user === "piedra" && machine_answer === "papel") {
    return `Usuario Gana`;
  } else if (option_user === "piedra" && machine_answer === "tijera") {
    return `Usuario Gana`;
  } else if (option_user === "papel" && machine_answer === "piedra") {
    return `Maquina Gana`;
  } else if (option_user === "papel" && machine_answer === "tijera") {
    return `Maquina Gana`;
  } else if (option_user === "tijera" && machine_answer === "piedra") {
    return `Maquina Gana`;
  } else if (option_user === "tijera" && machine_answer === "papel") {
    return `Usuario Gana`;
  }
};

const play_game = (string_user_option) => {
  const user_answer = string_user_option.toLowerCase();
  const is_within_the_options = options.includes(user_answer);
  if (is_within_the_options) {
    return get_winner(user_answer);
  }
  return "La opcion no es valida";
};

module.exports = { random_machine_answer, get_winner, play_game };
