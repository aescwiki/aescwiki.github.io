window.onscroll=getScroll;
window.onload= function(){document.getElementById('f').onclick=setCatMania;}
function getScroll()
{
	if(self.pageYOffset>185)
	{	
		document.getElementById('menu').style.position="fixed"; 
		document.getElementById('menu').style.left="50%"; 
		document.getElementById('menu').style.top="10px"; 
		document.getElementById('menu').style.margin="0 0 0 -462px"; 
	}
	else
	{
		document.getElementById('menu').style.position="absolute"; 
		document.getElementById('menu').style.left="0"; 
		document.getElementById('menu').style.top="185px"; 
		document.getElementById('menu').style.margin="10px 0 0 10px"; 
	}
}

function setCatMania()
{
	var i = setInterval(catMania, 25); 
	setTimeout(function(){clearInterval(i)},2500)
}

//Google analytics code
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-104782082-1', 'auto');
  ga('send', 'pageview');


//Catmania(fitcha)
function catMania()
{
	var cat = document.createElement('img');
	cat.src="img/cat.png";
	cat.style.position="fixed";
	cat.style.zIndex="10";
	var l = Math.round(Math.random()*(document.documentElement.clientWidth))-90;
	var r = Math.round(Math.random()*(document.documentElement.clientHeight))-185;
	cat.style.left=l+"px";
	cat.style.top=r+"px";
	document.body.appendChild(cat);
}