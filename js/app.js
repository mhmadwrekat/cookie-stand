'use strict' ;

let hour = ['6 Am','7 Am','8 Am','9 Am','10Am','11Am','12pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm','Location Total'];

function Cookie(name,min,max,avgCookie){
  this.name = name ;
  this.min = min ;
  this.max = max ;
  this.avgCustomer = [] ;
  this.avgCookie = avgCookie ;
  this.avgCookiePerhour = 0 ;
  this.hourCookie = [];
  this.totalAvg = 0 ;
}

function ranNum (min,max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * (max - min + 1) + min)*1) ;
}

let cookie = document.getElementById('cookie');


Cookie.prototype.print = function()
{
  let tr = document.createElement('tr');
  cookie.appendChild(tr);

  let nam = document.createElement('td');
  nam.textContent = this.name ;
  tr.appendChild(nam);
  let li ;
  for (let i = 1 ; i < hour.length ; i++)
  {
    li = document.createElement('td');
    this.avgCustomer = parseInt(ranNum(this.min,this.max) * this.avgCookie) ;
    li.textContent = this.avgCustomer ;
    this.totalAvg += this.avgCustomer ;
    tr.appendChild(li);
  }
  let td = document.createElement('td');
  td.textContent = this.totalAvg + ' Cookies';
  tr.appendChild(td);
};

function printStructure ()
{
  let tr = document.createElement('tr');
  cookie.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);

  for (let i = 0 ; i <= hour.length ; i++)
  {
    th = document.createElement('th');
    Cookie.avgCustomer = parseInt(ranNum(Cookie.min,Cookie.max) * Cookie.avgCookie) ;
    th.textContent = hour[i] ;
    tr.appendChild(th);
  }
}

function hourTotal ()
{
  let tr = document.createElement('tr');
  cookie.appendChild(tr);
  let nam = document.createElement('td');
  nam.textContent = 'Total Hour' ;
  tr.appendChild(nam);
  for (let i = 1 ; i < hour.length ; i++)
  {
    let th = document.createElement('th');
    th.textContent = ranNum('',1000,900,500) ;
    tr.appendChild(th);
  }
  let td = document.createElement('td');
  td.textContent = ranNum('',10000,9000,5000) + ' Cookies';
  tr.appendChild(td);
}
printStructure();
let seattle = new Cookie( 'SEATTLE' , 23 , 65 , 6.3 );
let tokyo = new Cookie( 'TOKYO' , 3 , 24 , 1.2 );
let dubai = new Cookie( 'DUBAI' , 11 , 38 , 3.7 );
let paris = new Cookie( 'PARIS' , 20 , 38 , 2.3 );
let lima = new Cookie( 'LIMA' , 2 , 16 , 4.6 );

let arr = [ seattle , tokyo , dubai , paris , lima];

for(let a = 0 ; a < arr.length ; a++ )
{
  arr[a].print() ;
}

let shopForm = document.getElementById('newShop');
shopForm.addEventListener('submit' , newShopFun) ;

function newShopFun(event)
{
  event.preventDefault();

  let shopName = event.target.shopName.value ;
  let minCustomer = event.target.minCustomer.value ;
  let maxCustomer = event.target.maxCustomer.value ;
  let avgCookie = event.target.avgCookie.value ;

  let newShop = new Cookie(shopName,minCustomer,maxCustomer,avgCookie);
  
  let cooki = document.getElementById('cookie');
  cooki.removeChild(cookie.lastElementChild);

  newShop.print();
  hourTotal();

}

hourTotal();




