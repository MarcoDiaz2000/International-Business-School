document.querySelector('.custom-toggler').addEventListener('click', () => {
  document.getElementById('fullscreenMenu').style.display = 'flex';
});

document.getElementById('closeMenu').addEventListener('click', () => {
  document.getElementById('fullscreenMenu').style.display = 'none';
});

document.querySelectorAll('.mainmenu a').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('fullscreenMenu').style.display = 'none';
  });
});

const projects = [
  {
    speaker: 'Satya Nadella',
    description:
      'Electrical engineer, computer scientist and business administrator.',
    description2:
      'He has been CEO of Microsoft since February 2014.',
    image: './images/speaker Satya Nadella.jpg',
  },
  {
    speaker: 'Sundar Pichai',
    description:
      'Business executive, CEO of Google since 2015.',
    description2:
      'Pichai has led innovation efforts for a suite of software products, including Google Chrome and Chrome OS, as well as being largely responsible for Google Drive.',
    image: './images/speaker Sundar Pichai.jpg',
  },
  {
    speaker: 'Tim Cook',
    description:
      'American business executive, industrial engineer and developer, best known for being the current CEO of Apple, Inc. He also serves on the boards of Nike, Inc. and the National Football Foundation.',
    description2:
      'Cook owns $120 million worth of Apple stock. In March 2015, he said that before he dies he plans to donate his entire fortune to charity.',
    image: './images/speaker Tim Cook.jpg',
  },
  {
    speaker: 'Mark Zuckerberg',
    description:
      'American programmer and entrepreneur famous for being the creator and CEO of Facebook, the worlds most popular social network with more than 1.94 million monthly active users.',
    description2:
      'Last year, Zuckerberg was ranked 10th on the Forbes list of the worlds most powerful people. His net worth is estimated at $58.6 billion.',
    image: './images/speaker Mark Zuckerberg.jpg',
  },
  {
    speaker: 'Jeff Bezos',
    description:
      'American engineer, entrepreneur and investor, best known for being the founder, chairman, and CEO of amazon.com',
    description2:
      'www.amazon.com, which is the worlds largest online retailer. With an estimated net worth of $80.5 billion, Bezos is currently the third richest person in the world.',
    image: './images/speaker Jeff Bezos.jpg',
  },
  {
    speaker: 'Elon Musk',
    description:
      'Co-founder of PayPal, Tesla Motors, SpaceX, Hyperloop, SolarCity, The Boring Company and OpenAI.',
    description2:
      'Musk is currently CEO of SpaceX, CEO of Tesla Motors, chairman of SolarCity and co-chairman of OpenAI. Named the 21st most powerful person in the world by Forbes magazine in December last year, his fortune is valued at $13.9 billion.',
    image: './images/speaker elon musk.jpg',
  },
];

const speaker = document.querySelector('#speaker');

for (let i = 0; i < projects.length; i += 1) {
  speaker.innerHTML += `
    <div class="col col-11 col-md-6 speakers-box">
      <div class="row">
        <div class="col-4">
          <img class="img-fluid" src='${projects[i].image}' alt="picture-speaker">
        </div>
        <div class="col-8">
        <h3 class="speaker-subtitle">${projects[i].speaker}</h3>
          <p class="speaker-text">${projects[i].description}</p>
          <hr class="speaker-hr">
          <p class="speaker-text2">${projects[i].description2}</p>
        </div>
      </div>
    </div>
  `;
}
