module.exports = function (...args) {
  const parameters = args.slice(0, args.length - 1);
  return parameters.join('');
};
