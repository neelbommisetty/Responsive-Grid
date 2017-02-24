const render = (cols) => {
  const html2Cols = `
    <div class= "col-xs-12 col-sm-sm-12 col-md-6 box col2">
      1
    </div>
    <div class= "col-xs-12 col-sm-sm-12 col-md-6 box col2">
      2
    </div>
  `;
  const html3Cols = `
    <div class= "col-xs-12 col-sm-sm-12 col-md-4 box col3">
      1
    </div>
    <div class= "col-xs-12 col-sm-sm-12 col-md-4 box col3">
      2
    </div>
    <div class= "col-xs-12 col-sm-sm-12 col-md-4 box col3">
      3
    </div>
  `;
    const html4Cols = `
    <div class= "col-xs-12 col-sm-6 col-md-3 box col4">
      1
    </div>
    <div class= "col-xs-12 col-sm-6 col-md-3 box col4">
      2
    </div>
    <div class= "col-xs-12 col-sm-6 col-md-3 box col4">
      3
    </div>
    <div class= "col-xs-12 col-sm-6 col-md-3 box col4">
      4
    </div>
  `;
    const app = document.querySelector('.app');
    if (cols === 2) {
      app.innerHTML = html2Cols;
    }
    if (cols === 3) {
      app.innerHTML = html3Cols;
    }
    if (cols === 4) {
      app.innerHTML = html4Cols;
    }
}
render(4);