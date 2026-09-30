/* Shelsky's "Build Your Own" sandwich kit lander renderer.
   Each page defines window.KIT (its own config) at the top of the HTML.
   Shared data: kits-registry.js (cross-sell cards) and reviews.js (real reviews only).
   Placeholder markup: wrap any unconfirmed text in [[double brackets]] and it renders
   as a yellow dashed "needs Peter" chip. */
(function(){
  var K = window.KIT || {};
  var REG = window.KIT_REGISTRY || {};
  var REV = window.SHELSKYS_REVIEWS || [];
  var SHIP = "Order by 4pm and it ships the next day.";

  function ph(s){
    if(s == null) return "";
    return String(s).replace(/\[\[(.+?)\]\]/g, '<span class="ph">$1</span>');
  }
  function stars(n){ var s=""; for(var i=0;i<(n||5);i++) s+="&#9733;"; return s; }
  function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function byId(id){ for(var i=0;i<REV.length;i++){ if(REV[i].id===id) return REV[i]; } return null; }
  function $(id){ return document.getElementById(id); }
  function cta(label){ return '<a class="btn lg js-cta" href="'+(K.ctaUrl||"#order")+'">'+label+'</a>'; }
  var priceHtml = function(size){ return ph((size||K.sizes[0]).price); };

  function reviewCard(r, cls){
    if(!r) return '';
    return '<div class="'+cls+'"><div class="stars">'+stars(r.stars)+'</div>'+
      '<p>&ldquo;'+esc(r.quote)+'&rdquo;</p>'+
      '<p class="who">'+esc(r.author)+' &middot; <span class="src">'+esc(r.source)+(r.location?', '+esc(r.location):'')+'</span></p></div>';
  }
  function phReview(cls, want){
    return '<div class="'+cls+' phcard"><div class="stars">&#9734;&#9734;&#9734;&#9734;&#9734;</div>'+
      '<p>Review slot open: '+esc(want||"real customer review")+'.</p><p class="who">Placeholder, no real review found yet</p></div>';
  }

  document.title = "Build Your Own " + K.name + " | Shelsky's of Brooklyn";

  /* nav */
  $("nav-cta").innerHTML = "Get the kit &middot; " + priceHtml();
  $("nav-cta").href = K.ctaUrl || "#order";

  /* mockup legend */
  if(K.showPlaceholderLegend){
    $("phbar").innerHTML = 'MOCKUP. Anything in <span class="ph">yellow</span> is a placeholder waiting on Peter: price, weights, SKU, exact shop build. Reviews are real Google reviews.';
    $("phbar").style.display = "block";
  }

  /* hero */
  $("hero").innerHTML =
    '<div class="grid">'+
      '<div class="photo"><img src="'+K.photo+'" alt="'+esc(K.photoAlt)+'"><span class="badge">'+esc(K.badge||"From our Court Street counter")+'</span></div>'+
      '<div class="copy">'+
        '<div class="kicker">'+ph(K.kicker)+'</div>'+
        '<h1><span class="byo">Build your own</span>'+esc(K.name)+'</h1>'+
        '<p class="sub">'+ph(K.heroSub)+'</p>'+
        '<div class="promise"><span class="two">2</span><span class="lbl">sandwiches.<br>Everything in the box.</span></div>'+
        '<div class="sizes" id="sizes">'+K.sizes.map(function(s,i){
          return '<button type="button" class="size'+(i===0?' on':'')+'" data-i="'+i+'"><span class="n">'+ph(s.label)+'</span><span class="d">'+ph(s.desc)+'</span><span class="p">'+ph(s.price)+'</span></button>';
        }).join('')+'</div>'+
        cta("Build my "+esc(K.shortName))+
        '<p class="shipline">'+SHIP+'</p>'+
        (K.anchorLine?'<p class="anchor">'+ph(K.anchorLine)+'</p>':'')+
      '</div>'+
    '</div>';
  document.querySelectorAll('#sizes .size').forEach(function(b){
    b.addEventListener('click', function(){
      document.querySelectorAll('#sizes .size').forEach(function(x){x.classList.remove('on');});
      b.classList.add('on');
    });
  });

  /* review strip (right under hero) */
  var strip = (K.reviews && K.reviews.strip) || [];
  var stripHtml = "";
  for(var i=0;i<3;i++){
    var r = byId(strip[i]);
    stripHtml += r ? reviewCard(r,"sq") : phReview("sq","short 5-star line for the strip");
  }
  $("strip").innerHTML = '<div class="container">'+
    '<p class="rating"><span class="stars">'+stars(5)+'</span>'+ph(K.ratingLine||"Loved on Court Street since 2011")+'</p>'+
    '<div class="stripgrid">'+stripHtml+'</div></div>';

  /* press */
  $("press").innerHTML = '<div class="container"><p class="lbl">As seen in</p><div class="presslogos">'+
    '<img src="press/featured1.webp" alt="The New York Times">'+
    '<img src="press/featured2.webp" alt="Bon Appetit">'+
    '<img src="press/featured4.webp" alt="Vogue" class="tall">'+
    '<img src="press/Tablet-Magazine-283x43.webp" alt="Tablet Magazine">'+
    '<img src="press/featured3.webp" alt="Edible Brooklyn">'+
    '</div></div>';

  /* what's in the box */
  $("inbox").innerHTML = '<div class="container center">'+
    '<p class="eyebrow">What\'s in the box</p>'+
    '<h2>Everything to make two.<br>Exactly how we make it.</h2>'+
    '<div class="inboxgrid">'+
      '<ul class="inside">'+K.contents.map(function(c){
        var t = c.img ? '<img class="thumb" src="'+c.img+'" alt="" loading="lazy">' : '<span class="thumb blank">'+(c.free?'&#10033;':'&bull;')+'</span>';
        return '<li'+(c.free?' class="free"':'')+'>'+t+'<span class="item"><span class="qty">'+ph(c.qty)+'</span><b>'+ph(c.name)+'</b>'+(c.note?'<span class="note">'+ph(c.note)+'</span>':'')+'</span></li>';
      }).join('')+'</ul>'+
      '<div class="side">'+
        '<h3>'+ph(K.boxHeadline)+'</h3>'+
        '<p>'+ph(K.boxCopy)+'</p>'+
        '<div class="math">'+K.math.map(function(m){return '<div class="row"><span>'+ph(m[0])+'</span><span>'+ph(m[1])+'</span></div>';}).join('')+'</div>'+
      '</div>'+
    '</div></div>';

  /* recipe card */
  $("recipe").innerHTML = '<div class="container center">'+
    '<p class="eyebrow">The card in the box</p>'+
    '<h2>How to build it.</h2>'+
    '<p class="lede" style="max-width:34em;margin:20px auto 0;">Every kit comes with a card: a photo of the sandwich and the build, step by step, the way we do it behind the counter.</p>'+
    '<div class="card">'+
      '<div class="cimg"><img src="'+K.photo+'" alt="'+esc(K.photoAlt)+'" loading="lazy"></div>'+
      '<div class="cbody">'+
        '<p class="ctag">Shelsky\'s of Brooklyn &middot; Build your own</p>'+
        '<h3>'+esc(K.name)+'</h3>'+
        '<p class="cmeta">'+ph(K.recipeMeta)+'</p>'+
        '<ol>'+K.steps.map(function(s){return '<li>'+ph(s)+'</li>';}).join('')+'</ol>'+
        '<p class="sig">'+ph(K.recipeSig||"Now eat it. Peter")+'</p>'+
      '</div>'+
    '</div></div>';

  /* video */
  var v = K.video || {};
  $("video").innerHTML = '<div class="container"><div class="vgrid">'+
    '<div>'+
      '<p class="eyebrow">Watch Peter build it</p>'+
      '<h2>'+ph(v.headline)+'</h2>'+
      '<p class="lede" style="margin-top:20px;">'+ph(v.copy)+'</p>'+
      cta("Build my "+esc(K.shortName))+
    '</div>'+
    '<div class="phone">'+
      (v.standIn?'<span class="vtag ph">'+esc(v.standIn)+'</span>':'')+
      (v.src?'<video controls playsinline muted preload="none" poster="'+v.poster+'"><source src="'+v.src+'" type="video/mp4"></video>':'<img src="'+v.poster+'" alt="">')+
    '</div>'+
  '</div></div>';

  /* review wall */
  var wall = (K.reviews && K.reviews.wall) || [];
  var slots = Math.max(6, wall.length);
  var wallHtml = "";
  for(var j=0;j<slots;j++){
    var rw = byId(wall[j]);
    wallHtml += rw ? reviewCard(rw,"qcard") : phReview("qcard", j===0 ? ("a review that names the "+K.name) : "real customer review");
  }
  $("wall").innerHTML = '<div class="container center">'+
    '<p class="eyebrow">From our Google reviews</p>'+
    '<h2>'+ph(K.wallHeadline||"Brooklyn has opinions. These are theirs.")+'</h2>'+
    '<div class="wallgrid">'+wallHtml+'</div></div>';

  /* shipping band */
  $("ship").innerHTML = '<div class="container">'+
    '<p class="eyebrow">Shipped cold from Brooklyn</p>'+
    '<p class="big">'+SHIP+'</p>'+
    '<p>'+ph(K.shipCopy)+'</p>'+
    (function(){ var r = byId(K.reviews && K.reviews.ship); return r ? '<div class="shipq"><p>&ldquo;'+esc(r.quote)+'&rdquo;</p><p class="who">'+esc(r.author)+' &middot; '+esc(r.source)+' review</p></div>' : ''; })()+
    '</div>';

  /* build another */
  var others = (K.crossSell || []).map(function(s){return REG[s];}).filter(Boolean).slice(0,3);
  $("more").innerHTML = '<div class="container center">'+
    '<p class="eyebrow">Build another</p>'+
    '<h2>One sandwich is a start.</h2>'+
    '<div class="kgrid">'+others.map(function(o){
      return '<a class="kcard" href="'+o.url+'"><img src="'+o.photo+'" alt="'+esc(o.name)+'" loading="lazy"><div class="kb">'+
        '<p class="tag">Build your own</p><h3>'+esc(o.name)+'</h3><p>'+ph(o.blurb)+'</p><span class="go">Makes 2 &middot; '+ph(o.price)+'</span></div></a>';
    }).join('')+'</div></div>';

  /* faq */
  $("faq").innerHTML = '<div class="container"><p class="eyebrow center">Good to know</p>'+
    '<h2 class="center" style="margin-bottom:14px;">Questions, answered.</h2><div class="faq">'+
    K.faq.map(function(q){return '<div class="q"><h3>'+ph(q[0])+'</h3><p>'+ph(q[1])+'</p></div>';}).join('')+
    '</div></div>';

  /* final */
  $("order").innerHTML = '<div class="container">'+
    '<div class="gold-tick" style="border-color:#fff;"></div>'+
    '<h2>'+ph(K.finalHeadline)+'</h2>'+
    '<p class="closer">'+ph(K.finalCloser)+'</p>'+
    '<p class="price">'+priceHtml()+'</p>'+
    '<p class="shipline">'+SHIP+'</p>'+
    cta("Build my "+esc(K.shortName))+'</div>';

  /* sticky */
  $("sticky").innerHTML = '<a class="js-cta" href="'+(K.ctaUrl||"#order")+'"><span class="sp">Build your own '+esc(K.shortName)+' &middot; '+priceHtml()+'</span><span>Get it</span></a>';
})();
