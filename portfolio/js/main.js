// // ヘッダー、フッターのインクルード 
// ["header", "footer"].forEach((id) => {
//     const xhr = new XMLHttpRequest();
//     const filePath = `include/${id}.html`
//     xhr.open("GET", filePath, true);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const html = xhr.responseText;
//         const target = document.querySelector(`#${id}`);
//         target.insertAdjacentHTML("afterbegin", html);
//       }
//     }
//     xhr.send();
//   })

// ヘッダー、フッターのインクルード 
["header", "footer"].forEach((id) => {
  const xhr = new XMLHttpRequest();
  const filePath = `/portfolio/include/${id}.html`
  xhr.open("GET", filePath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const html = xhr.responseText;
      const target = document.querySelector(`#${id}`);
      target.insertAdjacentHTML("afterbegin", html);
    }
  }
  xhr.send();
})




