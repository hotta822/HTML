//絶対パスを使うインクルードを考える


// オリジンを取得
var origin = window.location.origin;

// header.htmlとfooter.htmlへのパスを生成
var headerPath = origin + '/include/header.html';
var footerPath = origin + '/include/footer.html';

// // header.htmlとfooter.htmlを読み込む
// $('#header').load(headerPath);
// $('#footer').load(footerPath);

// header.htmlを読み込む
fetch(headerPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

// footer.htmlを読み込む
fetch(footerPath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
