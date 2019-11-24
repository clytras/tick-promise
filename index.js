module.exports = function() {
  return new Promise(resolve => {
    process.nextTick(resolve);
  });
}
