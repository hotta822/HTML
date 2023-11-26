// 1. 変数mqlにMediaQueryListを格納
const mql = window.matchMedia('(min-width: 769px)');

// 2. メディアクエリに応じて実行したい処理を関数として定義
const handleMediaQuery = function(mql) {
  if (mql.matches) {
    // 769px以上の場合の処理
    console.log('769px以上');
  } else {
    // 769px未満の場合の処理
    console.log('769px未満');
  }
};

// 3. イベントリスナーを追加（メディアクエリの条件一致を監視）
mql.addEventListener(handleMediaQuery);

// 4. 初回チェックのため関数を一度実行
handleMediaQuery(mql);