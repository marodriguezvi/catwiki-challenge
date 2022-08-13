module.exports = function (title, progress, size) {
  let itemAsHtml = `<div class="bar"><span class="bar__name bold">${title}:</span><div class="bar__progress-line">`;
  for (let i = 0; i < size; i++) {
    if (i < progress) {
      itemAsHtml += '<div class="bar__item bar__item--active"></div>';
    } else {
      itemAsHtml += '<div class="bar__item"></div>';
    }
  }
  return `${itemAsHtml}</div></div>`;
};
