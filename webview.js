// orat.io integration
module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const FranzData = document.querySelector('#FranzMessages').dataset;
    if (FranzData) {
      direct = FranzData.direct;
      indirect = FranzData.indirect;
    }

    Franz.setBadge(direct, indirect);
  }

  Franz.injectCSS(path.join(__dirname, 'darkmode.css'));
  Franz.loop(getMessages);
}