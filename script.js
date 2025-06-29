
const tarjetas = {
  gtx1050ti: {
    titulo: 'NVIDIA GTX 1050 Ti', marca: 'nvidia', gama: 'baja',
    imagen: 'https://th.bing.com/th/id/R.9033c6e03d3ba85fca079156354f1696?rik=xN01Kk1nIR4sNg&riu=http%3a%2f%2fwww.smartworld.it%2fwp-content%2fuploads%2f2016%2f10%2fNVIDIA-GTX-1050-e-1050-Ti_5.png&ehk=D5wyvuqh4PB2DmBl%2f5iJNFDUArQLM1SlHFojhLXv3cI%3d&risl=&pid=ImgRaw&r=0',
    gpu: 'GP107', vram: '4 GB GDDR5', consumo: '75W', precio: '$140 USD'
  },
  gtx1660super: {
    titulo: 'NVIDIA GTX 1660 Super', marca: 'nvidia', gama: 'media',
    imagen: 'https://www.notebookcheck.com/fileadmin/Notebooks/NVIDIA/KFA2_GTX_1660_Super/GTX_1660S_14.jpg',
    gpu: 'TU116', vram: '6 GB GDDR6', consumo: '125W', precio: '$220 USD'
  },
  rtx3090: {
    titulo: 'NVIDIA RTX 3090', marca: 'nvidia', gama: 'alta',
    imagen: 'https://assets1.ignimgs.com/2020/09/24/rtx-3090-blogroll-1600909176729_160w.jpg?width=1280',
    gpu: 'GA102', vram: '24 GB GDDR6X', consumo: '350W', precio: '$1499 USD'
  },
  rx550: {
    titulo: 'AMD Radeon RX 550', marca: 'amd', gama: 'baja',
    imagen: 'https://th.bing.com/th/id/R.37aefb0a3d1feee994934f8ec4f57d36?rik=VQ5hNM1x%2ftovZw&pid=ImgRaw&r=0',
    gpu: 'Lexa', vram: '4 GB GDDR5', consumo: '50W', precio: '$100 USD'
  },
  rx580: {
    titulo: 'AMD Radeon RX 580', marca: 'amd', gama: 'media',
    imagen: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6217/6217300_sd.jpg',
    gpu: 'Polaris 20', vram: '8 GB GDDR5', consumo: '185W', precio: '$200 USD'
  },
  rx6950xt: {
    titulo: 'AMD Radeon RX 6950 XT', marca: 'amd', gama: 'alta',
    imagen: 'https://m.media-amazon.com/images/I/81ss7IRsvQL._AC_SL1500_.jpg',
    gpu: 'Navi 21', vram: '16 GB GDDR6', consumo: '335W', precio: '$1099 USD'
  },
  a380: {
    titulo: 'Intel Arc A380', marca: 'intel', gama: 'baja',
    imagen: 'https://www.tecnogeek.com/wp-content/uploads/2022/06/big_gunnir-arc-a380.webp',
    gpu: 'ACM-G11', vram: '6 GB GDDR6', consumo: '75W', precio: '$129 USD'
  },
  a750: {
    titulo: 'Intel Arc A750', marca: 'intel', gama: 'media',
    imagen: 'https://photo2.tinhte.vn/data/attachment-files/2023/03/6352747_intel-arc-a750-review-tinhte-11.jpg',
    gpu: 'ACM-G10', vram: '8 GB GDDR6', consumo: '225W', precio: '$249 USD'
  },
  aproa60: {
    titulo: 'Intel Arc Pro A60', marca: 'intel', gama: 'alta',
    imagen: 'https://img1.mydrivers.com/img/20230607/c93536a397fe4972802694c000d3d39f.png',
    gpu: 'ACM-G12', vram: '12 GB GDDR6', consumo: '130W', precio: '$300 USD'
  }
};

function mostrarMarca(id) {
  document.querySelectorAll('.marca').forEach(cat => cat.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function renderTarjetas() {
  const enlaces = {
    gtx1050ti: "gtx1050ti.html",
    gtx1660super: "gtx1660super.html",
    rtx3090: "rtx3090.html",
    rx550: "rx550.html",
    rx580: "rx580.html",
    rx6950xt: "rx6950xt.html",
    a380: "arca380.html",
    a750: "arca750.html",
    aproa60: "arcproa60.html"
  };

  for (const id in tarjetas) {
    const t = tarjetas[id];
    const div = document.createElement('div');
    div.className = 'tarjeta';
    div.setAttribute('data-titulo', t.titulo.toLowerCase());
    div.setAttribute('data-marca', t.marca.toLowerCase());
    div.setAttribute('data-gama', t.gama.toLowerCase());

    const enlace = enlaces[id] ? enlaces[id] : "#";

    div.innerHTML = `
      <a href="${enlace}" target="_blank" style="text-decoration: none; color: inherit;">
        <h3>${t.titulo}</h3>
        <img src="${t.imagen}" alt="${t.titulo}" />
        <ul>
          <li><strong>GPU:</strong> ${t.gpu}</li>
          <li><strong>VRAM:</strong> ${t.vram}</li>
          <li><strong>Consumo:</strong> ${t.consumo}</li>
          <li><strong>Precio:</strong> ${t.precio}</li>
        </ul>
      </a>
    `;
    document.getElementById(t.marca).appendChild(div);
  }
}

function filtrarTarjetas() {
  const filtro = document.getElementById('buscador').value.toLowerCase();

  if (filtro.includes('nvidia')) mostrarMarca('nvidia');
  else if (filtro.includes('amd')) mostrarMarca('amd');
  else if (filtro.includes('intel')) mostrarMarca('intel');

  document.querySelectorAll('.tarjeta').forEach(t => {
    const texto = t.innerText.toLowerCase();
    t.style.display = texto.includes(filtro) ? 'block' : 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderTarjetas();
  mostrarMarca('nvidia');
});
