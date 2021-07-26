const questionObject = {
  id: String | Number,
  question: String,
  options: [],
  check_options: [],
  radio_options: [],
  exclude: [],
  required: Boolean,
  ref: {},
  type: String,
  metadata: {},
};

function create(context, object) {
  let index = object.length;
  let question = Object.create(questionObject);
  Object.assign(question, {
    id: index,
    question: "",
    options: new Array(),
    check_options: new Array(),
    radio_options: new Array(),
    exclude: new Array(),
    required: false,
    ref: {},
    type: "",
  });
  object.push(question);
  // console.log(object);
  return object;
}

function addOptions(context, _options) {
  _options.push({
    label: "",
    value: "",
  });
  return _options;
}

function remove(context, questions, index) {
  questions.splice(index, index);
  return questions;
}

export default {
  create,
  addOptions,
  remove,
};
