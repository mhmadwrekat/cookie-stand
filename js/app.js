'use strict' ;

// object ONE ( SEATTLE ) :
const seattle = {
  name : 'SEATTLE' ,
  min : 23 ,
  max : 65 ,
  avgCustomer : 0 ,
  avgCookie : 6.3 ,
  avgCookiePerhour : 0 ,
  hour : ['6 Am : ','7 Am : ','8 Am : ','9 Am : ','10 Am : ','11 Am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6 pm : ','7 pm : ','8 pm : '],
  hourCookie : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  totalSeattle : 0 ,
  geCustomer : function (min,max)
  {

    this.avgCustomer = Math.floor((Math.random() * (max - min + 1) + min)*1) ;
    this.avgCookiePerhour = this.avgCustomer * this.avgCookie ;
    this.totalSeattle += this.totalSeattle ;
    return this.avgCookiePerhour ;
  },
  print : function ()
  {
    let cookie = document.getElementById('cookie');

    let article = document.createElement('article');
    cookie.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    let t = 0 ;
    let li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
    for (let i = 0 ; i < this.hourCookie.length ; i++)
    {
      li = document.createElement('li');
      li.textContent = this.hour[i] + parseInt(this.geCustomer(this.min,this.max)) + ' Cookies' ;
      t += parseInt(this.geCustomer(this.min,this.max)) ;
      this.totalSeattle = (t) ;
      article.appendChild(li);
    }

    let hr = document.createElement('hr');
    hr.textContent = 'Total : ' + this.totalSeattle + ' Cookies';
    article.appendChild(hr);
  }
};
//console.log(seattle.print());


// object TWO ( TOKYO ) :
const tokyo = {
  name : 'TOKYO' ,
  min : 3 ,
  max : 24 ,
  avgCustomer : 0 ,
  avgCookie : 1.2 ,
  avgCookiePerhour : 0 ,
  hour : ['6 Am : ','7 Am : ','8 Am : ','9 Am : ','10 Am : ','11 Am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6 pm : ','7 pm : ','8 pm : '],
  hourCookie : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  totalSeattle : 0 ,
  geCustomer : function (min,max)
  {

    this.avgCustomer = Math.floor((Math.random() * (max - min + 1) + min)*1) ;
    this.avgCookiePerhour = this.avgCustomer * this.avgCookie ;
    this.totalSeattle += this.totalSeattle ;
    return this.avgCookiePerhour ;
  },
  print : function ()
  {
    let cookie = document.getElementById('cookie');

    let article = document.createElement('article');
    cookie.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    let t = 0 ;
    let li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
    for (let i = 0 ; i < this.hourCookie.length ; i++)
    {
      li = document.createElement('li');
      li.textContent = this.hour[i] + parseInt(this.geCustomer(this.min,this.max)) + ' Cookies' ;
      t += parseInt(this.geCustomer(this.min,this.max)) ;
      this.totalSeattle = (t) ;
      article.appendChild(li);
    }

    let hr = document.createElement('hr');
    hr.textContent = 'Total : ' + this.totalSeattle + ' Cookies';
    article.appendChild(hr);
  }
};

// object THREE ( DUBAI ) :
const dubai = {
  name : 'DUBAI' ,
  min : 11 ,
  max : 38 ,
  avgCustomer : 0 ,
  avgCookie : 3.7 ,
  avgCookiePerhour : 0 ,
  hour : ['6 Am : ','7 Am : ','8 Am : ','9 Am : ','10 Am : ','11 Am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6 pm : ','7 pm : ','8 pm : '],
  hourCookie : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  totalSeattle : 0 ,
  geCustomer : function (min,max)
  {

    this.avgCustomer = Math.floor((Math.random() * (max - min + 1) + min)*1) ;
    this.avgCookiePerhour = this.avgCustomer * this.avgCookie ;
    this.totalSeattle += this.totalSeattle ;
    return this.avgCookiePerhour ;
  },
  print : function ()
  {
    let cookie = document.getElementById('cookie');

    let article = document.createElement('article');
    cookie.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    let t = 0 ;
    let li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
    for (let i = 0 ; i < this.hourCookie.length ; i++)
    {
      li = document.createElement('li');
      li.textContent = this.hour[i] + parseInt(this.geCustomer(this.min,this.max)) + ' Cookies' ;
      t += parseInt(this.geCustomer(this.min,this.max)) ;
      this.totalSeattle = (t) ;
      article.appendChild(li);
    }

    let hr = document.createElement('hr');
    hr.textContent = 'Total : ' + this.totalSeattle + ' Cookies';
    article.appendChild(hr);
  }
};

// object FOUR ( PARIS ) :
const paris = {
  name : 'PARIS' ,
  min : 20 ,
  max : 38 ,
  avgCustomer : 0 ,
  avgCookie : 2.3 ,
  avgCookiePerhour : 0 ,
  hour : ['6 Am : ','7 Am : ','8 Am : ','9 Am : ','10 Am : ','11 Am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6 pm : ','7 pm : ','8 pm : '],
  hourCookie : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  totalSeattle : 0 ,
  geCustomer : function (min,max)
  {

    this.avgCustomer = Math.floor((Math.random() * (max - min + 1) + min)*1) ;
    this.avgCookiePerhour = this.avgCustomer * this.avgCookie ;
    this.totalSeattle += this.totalSeattle ;
    return this.avgCookiePerhour ;
  },
  print : function ()
  {
    let cookie = document.getElementById('cookie');

    let article = document.createElement('article');
    cookie.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    let t = 0 ;
    let li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
    for (let i = 0 ; i < this.hourCookie.length ; i++)
    {
      li = document.createElement('li');
      li.textContent = this.hour[i] + parseInt(this.geCustomer(this.min,this.max)) + ' Cookies' ;
      t += parseInt(this.geCustomer(this.min,this.max)) ;
      this.totalSeattle = (t) ;
      article.appendChild(li);
    }

    let hr = document.createElement('hr');
    hr.textContent = 'Total : ' + this.totalSeattle + ' Cookies';
    article.appendChild(hr);
  }
};

// object FIVE ( LIMA ) :
const lima = {
  name : 'LIMA' ,
  min : 2 ,
  max : 16 ,
  avgCustomer : 0 ,
  avgCookie : 4.6 ,
  avgCookiePerhour : 0 ,
  hour : ['6 Am : ','7 Am : ','8 Am : ','9 Am : ','10 Am : ','11 Am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6 pm : ','7 pm : ','8 pm : '],
  hourCookie : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  totalSeattle : 0 ,
  geCustomer : function (min,max)
  {

    this.avgCustomer = Math.floor((Math.random() * (max - min + 1) + min)*1) ;
    this.avgCookiePerhour = this.avgCustomer * this.avgCookie ;
    this.totalSeattle += this.totalSeattle ;
    return this.avgCookiePerhour ;
  },
  print : function ()
  {
    let cookie = document.getElementById('cookie');

    let article = document.createElement('article');
    cookie.appendChild(article);

    let h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
    let t = 0 ;
    let li = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ;
    for (let i = 0 ; i < this.hourCookie.length ; i++)
    {
      li = document.createElement('li');
      li.textContent = this.hour[i] + parseInt(this.geCustomer(this.min,this.max)) + ' Cookies' ;
      t += parseInt(this.geCustomer(this.min,this.max)) ;
      this.totalSeattle = (t) ;
      article.appendChild(li);
    }

    let hr = document.createElement('hr');
    hr.textContent = 'Total : ' + this.totalSeattle + ' Cookies';
    article.appendChild(hr);
  }
};
//////////////////////////////////
// CALLED :

seattle.print();
tokyo.print();
dubai.print();
paris.print();
lima.print();



