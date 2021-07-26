function create(context, title, description, questions) {
  let _questions = updateQuestionsOptions(questions);
  let formObject = {
    title,
    description,
    _questions,
  };
  console.log(_questions);
  return _questions;
}

function updateQuestionsOptions(questions) {
  questions.map((item, index) => {
    if (item.type === "radio_button") {
      item.options = item.radio_options;
    } else if (item.type === "check_box") {
      item.options = item.check_options;
    }
    item.options.map((option, index) => {
      option.value = option.label;
    });
  });

  return questions;
}

export default {
  create,
};
