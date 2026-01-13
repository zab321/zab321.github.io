var posts=["posts/3eeb.html","posts/64332.html","posts/13178.html","posts/10219.html","posts/7737.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };