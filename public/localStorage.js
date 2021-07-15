function set(context, key, value) {
  console.log(key, value);
  localStorage.setItem(key, value);
}

function get(context, key) {
  return localStorage.getItem(key.toString());
}

export default {
  set,
  get,
};
