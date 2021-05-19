const featureProduct = [
  {
    title: 'phone',
    productName: 'i-phone',
    price: 1600,
    reviews: 5,
  },
  {
    title: 'phone',
    productName: 'i-phone',
    price: 4500,
    reviews: 5,
  },
  {
    title: 'phone',
    productName: 'Redme',
    price: 2500,
    reviews: 4,
  },
  {
    title: 'Earphone',
    productName: 'Bass Earphone',
    price: 600,
    reviews: 4,
  },
  {
    title: 'Earphone',
    productName: 'Bass Earphone',
    price: 600,
    reviews: 4,
  },
  {
    title: 'Earphone',
    productName: 'Bass Earphone',
    price: 600,
    reviews: 4,
  },
  {
    title: 'Watch',
    productName: 'smart Watch',
    price: 1600,
    reviews: 5,
  },
  {
    title: 'Watch',
    productName: 'smart Watch',
    price: 1600,
    reviews: 5,
  },
  {
    title: 'Watch',
    productName: 'smart Watch',
    price: 1600,
    reviews: 5,
  },
];

const filterProduct = [
  {
    dataFilter: 'Trending',
    productName: 'I-phone',
    price: 500,
    review: 2,
    img: 'collection_01.png',
  },
  {
    dataFilter: 'Special',
    productName: 'Wireless headphone',
    price: 10000,
    review: 2,
    img: 'collection_02.png',
  },
  {
    dataFilter: 'Special',
    productName: 'Wireless Headphone',
    price: 600,
    review: 2,
    img: 'collection_03.png',
  },
  {
    dataFilter: 'Special',
    productName: 'Headphone',
    price: 800,
    review: 2,
    img: 'collection_04.png',
  },
  {
    dataFilter: 'Featured',
    productName: '"mobile',
    price: 300,
    review: 2,
    img: 'collection_05.png',
  },
  {
    dataFilter: 'Featured',
    productName: 'Laptop',
    price: 500,
    review: 2,
    img: 'collection_06.png',
  },
  {
    dataFilter: 'Trending',
    productName: 'Laptop',
    price: 500,
    review: 2,
    img: 'collection_07.png',
  },
  {
    dataFilter: 'Trending',
    productName: 'Laptop',
    price: 500,
    review: 2,
    img: 'collection_08.png',
  },
];
const featureProd = document.querySelector('.feature_product');
const filterProd = document.querySelector('.filter_product');

const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

const slides = document.querySelectorAll('.slide');
const silder = document.querySelector('.slider');

filterProd.innerHTML = '';
featureProd.innerHTML = '';
featureProduct.forEach((feature, featureNo) => {
  const element = document.createElement('div');
  element.setAttribute('class', 'col-sm-3');
  element.innerHTML = `<div class="product-small box"><div class="box-image"><div class="image-zoom">
                <a href="#">
                  <img src="img/${featureNo + 1}.jpg" alt="${featureNo + 1}" />
                </a>
              </div>

              <div class="overlay-right">
                <button
                  type="button"
                  class="btn btn-secondary"
                  title="Quick Shop"
                >
                  <i class="fa fa-eye"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  title="Add to Wishlist"
                >
                  <i class="fa fa-heart-o"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-quantity="1"
                  title="Add to Cart"
                >
                  <i class="fa fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <div class="box-text text-center grid-style-2">
              <div class="item-prices">
                <div class="title">
                  <p>${feature.title}</p>

                  <p class="product-name"><a href="#">${
                    feature.productName
                  }</a></p>
                </div>
                <div class="product-price">
                  <span class="price">Rs ${feature.price}</span>
                </div>
              </div>
              <div class="product-bottom text-center">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>

    `;
  featureProd.append(element);
});

// sticky navigation bar
const nav = document.querySelector('.nav-bar');
console.log(nav);
const header = document.querySelector('.header');

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

filterProduct.forEach((product) => {
  const element = document.createElement('div');

  element.setAttribute('class', `itemBox ${product.dataFilter}`);
  element.innerHTML = `
  <div class="card">
            <div class="imgBox">
              <img src='img/${product.img}' "alt="">
            </div>
            <div class="contentBox">
              <h3>${product.productName}</h3>
              <h2 class="price">RS ${product.price}</h2>
              <div class="product-bottom text-center">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <a href="#" class="buy">Add to cart</a>
            </div>
          </div>`;
  filterProd.append(element);
});

const slider = function () {
  let currSlide = 0;
  const maxslide = slides.length - 1;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = () => {
    if (maxslide === currSlide) {
      currSlide = 0;
    }
    currSlide++;
    goToSlide(currSlide);
  };

  const prevSlide = () => {
    if (currSlide === 0) {
      currSlide = maxslide;
    } else {
      currSlide--;
    }

    goToSlide(currSlide);
  };

  goToSlide(0);

  // Even handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
};
slider();

// animation

const shopping = document.querySelector('.Section_link--js');
const section4 = document.querySelector('#section-4');
const section2 = document.querySelector('#section-2');
const section3 = document.querySelector('#section-3');
const section5 = document.querySelector('#section-5');
const section6 = document.querySelector('#section-6');

shopping.addEventListener('click', function (e) {
  e.preventDefault();
  section4.style.scrollMarginTop = '200px';
  section4.scrollIntoView({ behavior: 'smooth' });
});

//Fade up
const collection1 = document.querySelector('.collection__box-1');
const collection2 = document.querySelector('.collection__box-2');
const collection3 = document.querySelector('#collection__box-3');

const revealSections = function (section, classList) {
  const revealSection = (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove(classList);
    observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.09,
  });
  sectionObserver.observe(section);
  section.classList.add(classList);
};
revealSections(collection1, 'collection__box--1');
revealSections(collection2, 'collection__box--2');
revealSections(collection3, 'collection__box--3');

revealSections(section2, 'collection__box--3');
revealSections(section3, 'collection__box--1');
revealSections(section4, 'collection__box--2');
revealSections(section5, 'collection__box--1');
revealSections(section6, 'collection__box--3');
