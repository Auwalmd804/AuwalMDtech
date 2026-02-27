<!DOCTYPE html>
<html>
<head>
  <title>Auwal MD Technology</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body{
      margin:0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg,#0a0f1c,#111a2e);
      color:white;
      text-align:center;
      overflow-x:hidden;
    }

    header{
      padding:20px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      background:rgba(0,0,0,0.3);
      backdrop-filter: blur(10px);
    }

    .logo{
      font-size:22px;
      font-weight:bold;
      background: linear-gradient(90deg,#00aaff,#8a2be2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: glow 3s infinite alternate;
    }

    nav a{
      color:white;
      margin:0 10px;
      text-decoration:none;
      font-size:14px;
      transition:0.3s;
    }

    nav a:hover{
      color:#00aaff;
    }

    section{
      padding:80px 20px;
      animation: fadeIn 2s ease-in-out;
    }

    h1{
      font-size:42px;
      background: linear-gradient(90deg,#00aaff,#8a2be2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn{
      display:inline-block;
      padding:12px 25px;
      background:linear-gradient(90deg,#00aaff,#8a2be2);
      color:white;
      border-radius:30px;
      text-decoration:none;
      margin-top:20px;
      font-weight:bold;
      transition:0.3s;
    }

    .btn:hover{
      transform:scale(1.1);
      box-shadow:0 0 20px #00aaff;
    }

    .whatsapp{
      position:fixed;
      bottom:20px;
      right:20px;
      background:#25D366;
      color:white;
      padding:14px 18px;
      border-radius:50px;
      text-decoration:none;
      font-weight:bold;
      box-shadow:0 0 15px #25D366;
      transition:0.3s;
    }

    .whatsapp:hover{
      transform:scale(1.1);
    }

    footer{
      padding:20px;
      background:rgba(0,0,0,0.4);
      margin-top:40px;
      font-size:13px;
    }

    @keyframes fadeIn{
      from{opacity:0; transform:translateY(20px);}
      to{opacity:1; transform:translateY(0);}
    }

    @keyframes glow{
      from{filter:drop-shadow(0 0 5px #00aaff);}
      to{filter:drop-shadow(0 0 20px #8a2be2);}
    }

  </style>
</head>

<body>

<header>
  <div class="logo">Auwal MD</div>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="home">
  <h1>From Ideas to Impact</h1>
  <p>Technology • Innovation • Digital Solutions</p>
  <a href="#services" class="btn">Explore Services</a>
</section>

<section id="about">
  <h1>About Us</h1>
  <p>Auwal MD is a technology company focused on app development and digital innovation.</p>
</section>

<section id="services">
  <h1>Our Services</h1>
  <p>✔ App Development</p>
  <p>✔ App Distribution Platform</p>
  <p>✔ Digital Solutions</p>
</section>

<section id="contact">
  <h1>Contact</h1>
  <p>Email: yau789452@gmail.com</p>
  <p>Phone: 09137904300</p>
  <p>Phone: 08164712102</p>
</section>

<a class="whatsapp" href="https://wa.me/2349137904300" target="_blank">
  WhatsApp
</a>

<footer>
  © 2026 Auwal MD Technology Company
</footer>

</body>
</html>
