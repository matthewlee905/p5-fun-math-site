/* 共用小工具：不收集任何個人資料 */
(function () {
  window.$ = function (id) { return document.getElementById(id); };
  window.isTeacherMode = function () { return /(?:^|[?&])teacher=1(?:&|$)/.test(location.search || ""); };
  window.openCard = function (html) {
    var ov = document.getElementById("ov");
    var card = document.getElementById("ovCard");
    if (!ov || !card) return;
    card.innerHTML = html;
    ov.classList.remove("hidden");
    card.scrollTop = 0;
  };
  window.closeCard = function () {
    var ov = document.getElementById("ov");
    if (ov) ov.classList.add("hidden");
  };
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "ov") closeCard();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeCard();
  });
})();
