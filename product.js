const PRODUCT_DATA_URL = 'https://s3.amazonaws.com/bigassdeals-product-info/product.json';

function loadProduct() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      handleProductData(JSON.parse(xhttp.responseText));
    }
  };

  xhttp.open('GET', PRODUCT_DATA_URL, true);
  xhttp.send();
}

function handleProductData(product) {
  const link = document.getElementById('deal-link');
  const linkVisited = document.querySelector('#deal-link:visited');
  const image = document.getElementById('deal-pic');

  link.innerHTML = product.title;
  link.href = product.url;

  link.style.color = product.color;

  if (linkVisited) {
    linkVisited.style.color = product.color;
  }

  image.src = product.image_url;
}
