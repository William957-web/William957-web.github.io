var getUrlString = location.href;
var url = new URL(getUrlString);
const Outcome=document.querySelector('#Outcome');
Outcome.innerHTML=url.searchParams.get('name');
