import React from 'react';

export default class Home extends React.Component {  
  render() {
    return <>
      <div class="main-content-block">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">Hi, I&apos;m <span className="home__title-color">Zac</span><br /> Web Developer<br /> Entrepreneur<br /> Adventurer</h1>
            <div className="home__buttons">
              <a className="button" href="#work">My Work</a>
              <a className="button mobile-float-right" href="#skills">My Skills</a>
            </div>
          </div>
          <div className="home__social">
            <a className="home__social-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/znespral">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a className="home__social-icon" target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/2434899/zacnespral21">
              <i className="bx bxl-stack-overflow"></i>
            </a>
            <a className="home__social-icon" target="_blank" rel="noreferrer" href="https://jsfiddle.net/user/zacnespral21/fiddles/">
              <i className="bx bxl-jsfiddle"></i>
            </a>
            <a className="home__social-icon" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1MXWJAbBHsRSvhhNes08aru0w8ZGbt7zp/view?usp=sharing">
              <i className="bx bxs-file-pdf"></i>
            </a>
          </div>
          <div className="home__img">
            <img src="img/profile.jpg" alt="profile" />
          </div>
        </section>
        {/* <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img"><img src="img/grand-canyon.jpg" alt="" /></div>
            <div>
              <h2 className="about__subtitle">I&apos;m Zac</h2>
              <p className="about__text">Honest. Driven. Dedicated. At the age of 18 I started my own company "Larpsen" to expand my passion of developing amazing applications and providing solutions to everyday businesses, while also working an 9-5 position. After interning at Dow Chemical during my last year in high school, I was offered a full time job on their Quick Response Team in the Digital Department. I proved to be an exceptional employee with tech savvy and problem solving needed to rise to the next level. Within three years, I was promoted from entry level Quality Assurance to Web Technician and finally a Front-End Developer. Now almost 8 years later I've worked in several high level positions with a handful of large and small companies, with different roles and responsibilities in each to expand my knowledge and experience. I will always strive to improve and innovate, looking beyond what everyone sees today, to the possibilities that could be tomorrow because I want to be different, not to be your average developer.</p>
            </div>
          </div>
        </section> */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">HTML/5, CSS/3</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2012"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">PHP</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2015"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">JavaScript</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2012"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">Apache/Nginx/IIS</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2014"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">MySQL &amp; T-SQL</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2016"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">AWS Services</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2018"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">VueJS</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2020"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">Laravel</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2018"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">NodeJS</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2018"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">Cloudflare</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2018"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">Google Analytics</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2019"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">ReactJS</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2020"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">Flutter</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2020"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">TypeScript</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2020"), new Date())}</span> Years</div>
            </div>
            <div className="skills__data">
                <div className="skills__names"><i className="bx bxl-html5 skills__icon"></i><span className="skills__name">Angular</span></div>
                <div className="skills__bar skills__fullwidth"></div>
                <div><span className="skills__percentage">{dateDiff(new Date("1 January 2021"), new Date())}</span> Years</div>
            </div>
          </div>
        </section>
        <section className="work section" id="work"><h2 className="section-title">Work</h2>
          <div className="work__container bd-grid">
            <a href="https://chambita.zacharynespral.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/320/crop/600/https://chambita.zacharynespral.com" alt="Oobie"/>
              </div>
            </a>
            <a href="https://bidwinn.zacharynespral.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/320/crop/600/https://bidwinn.zacharynespral.com" alt="Oobie"/>
              </div>
            </a>
            <a href="https://sunnydays.zacharynespral.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/320/crop/600/https://sunnydays.zacharynespral.com" alt="Oobie"/>
              </div>
            </a>
            <a href="https://www.oobie.io" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/300/crop/600/https://www.oobie.io" alt="Oobie"/>
              </div>
            </a>
            <a href="https://www.iqair.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/300/crop/600/https://www.iqair.com" alt="IQAir"/>
              </div>
            </a>
            <a href="https://www.myluckyfans.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/300/crop/600/https://www.myluckyfans.com/login" alt="My Lucky Fans"/>
              </div>
            </a>
            <a href="https://www.larpsen.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/larpsen.png" alt="Larpsen"/>
              </div>
            </a>
            <a href="https://www.pro-fitworld.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.pro-fitworld.com" alt="Pro-Fit World"/>
              </div>
            </a>
            <a href="https://www.stingerworld.com" target="_blank" rel="noreferrer">
            <div className="work__img">
              <img src="https://image.thum.io/get/width/600/crop/600/https://www.stingerworld.com" alt="Stinger World"/>
            </div>
            </a>
            <a href="https://www.camofasteners.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.camofasteners.com" alt="CAMO Fasteners"/>
              </div>
            </a>
            <a href="https://www.nationalnail.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.nationalnail.com" alt="National Nail"/>
              </div>
            </a>
            <a href="https://goo.gl/QSVAv4" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.dow.com/en-us/market/mkt-auto-transportation/sub-auto-aerospace-aviation.html" alt="Dow Aircraft"/>
              </div>
            </a>
            <a href="https://goo.gl/yN6SQq" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.dupont.com/transportation-industrial.html" alt="Dow Automotive"/>
              </div>
            </a>
            <a href="https://goo.gl/DmrEwj" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://de.dow.com/de-de" alt="Dow Germany"/>
              </div>
            </a>
            <a href="https://goo.gl/2q5P4e" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.dow.com/en-us/market/mkt-paints-inks-coatings.html" alt="Dow Coatings"/>
              </div>
            </a>
            <a href="https://goo.gl/ushk3Q" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.dow.com/en-us/product-technology/pt-polyurethanes.html" alt="Dow Chemical Polyurethane"/>
              </div>
            </a>
            <a href="https://goo.gl/xY1ZVZ" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://engage.dow.com/201801_PaintQualityInstitute" alt="Paint Quality Institute"/>
              </div>
            </a>
            <a href="https://goo.gl/FuOAw6" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/russia.png" alt="Dow Russia"/>
              </div>
            </a>
            <a href="https://goo.gl/Hh9O5A" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/learningcenter.png" alt="Dow Chemical Learning Center"/>
              </div>
            </a>
            <a href="https://goo.gl/aGAJOq" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/makeitlast.png" alt="Dow Make it Last"/>
              </div>
            </a>
            <a href="https://goo.gl/wVRRS7" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.dow.com/en-us.html" alt="Dow"/>
              </div>
            </a>
            <a href="https://www.motoweather.net/" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/motoweather.png" alt="Moto Weather"/>
              </div>
            </a>
            <a href="https://www.rezzey.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/rezzey.png" alt="Rezzey"/>
              </div>
            </a>
            <a href="https://www.eclipsedistributing.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://image.thum.io/get/width/600/crop/600/https://www.eclipsedistributing.com" alt="Eclipse Distributing"/>
              </div>
            </a>
            <a href="https://www.troubadourguide.com" target="_blank" rel="noreferrer">
              <div className="work__img">
                <img src="https://s3.amazonaws.com/cdn.larpsen.com/img/portfolio/troubadourguide.png" alt="TroubadourGuide"/>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  };
};

var datenew = new Date();
var dateold = new Date("1 January 2000");
function dateDiff(dateold, datenew){
  var ynew = datenew.getFullYear();
  var mnew = datenew.getMonth();
  var dnew = datenew.getDate();
  var yold = dateold.getFullYear();
  var mold = dateold.getMonth();
  var dold = dateold.getDate();
  var diff = ynew - yold;
  if(mold > mnew) diff--;
  else
  {
    if(mold == mnew)
    {
      if(dold > dnew) diff--;
    }
  }
  return diff;
}