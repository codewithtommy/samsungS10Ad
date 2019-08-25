// variables for performance and easy editing
let sloganOne = $('.sloganOne'),
    sloganTwo = $('.sloganTwo'),
    sloganThree = $('.sloganThree'),
    sloganFour = $('.sloganFour'),
    h1 = $('h1'),
    stagger = $('.stagger'),
    phoneImage = $('.imageContainer'),
    button = $('button');

// animations for the slogans one and two
function textPanel() {
  let tl = new TimelineMax();

  tl
    .from(sloganOne, 1.5, { y: -50, autoAlpha: 0, ease:Power1.easeOut })
    .from(h1, 1, { y: 50, autoAlpha: 0, ease:Power1.easeOut }, 1)
    .staggerFrom(stagger, .5, { autoAlpha: 0, ease:Power1.easeOut }, 0.7)

  return tl;
}

// animations for samsung phone
function phonePanel() {
  let tl = new TimelineMax();

  tl.from(phoneImage, 1, {y: 350, autoAlpha: 0})
  
  return tl;
}

// animations for slogans three and four with preorder button
function preorderPanel() {
  let tl = new TimelineMax();

  tl
    .from(sloganThree, 1, {autoAlpha: 0, ease:Power1.easeOut})
    .from(button, 1, {autoAlpha: 0, ease:Power0.easeNone}, "-= .5")
    .from(sloganFour, 1, { autoAlpha: 0, ease: Power1.easeOut }, "-= .5");

  return tl;
}

// master panel created to allow easy code review/ maintainence 
let masterPanel = new TimelineMax({repeat: -1, repeatDelay: 20});

// add animation panels here to initial animations
masterPanel.add(textPanel());
masterPanel.add(phonePanel());
masterPanel.add(preorderPanel());