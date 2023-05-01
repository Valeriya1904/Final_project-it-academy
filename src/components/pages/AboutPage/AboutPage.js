import { Component } from '../../../core/Component';
import { APP_ROUTES } from '../../../constants/appRoutes';
import './AboutPage.scss';
import '../../../core/Router/Link';

class AboutPage extends Component {
  render() {
    return `
    <div class="about-container">
      <h3 class="about-title">COMPANY PROFILE</h3>
      <p class="about-text">Founded in 1978 in Milan,Gianni Evans S.r.l is one of the leading international fashion design houses and a symbol of Italian luxury world-wide. It designs, manufactures, distributes and retails fashion and lifestyle products including haute couture, prèt-à-porter, accessories, jewellery, watches, eyewear, fragrances, and home furnishings all bearing the distinctive Medusa logo.</p>
      <p class="about-text">The Evans Group distributes its products through a world-wide D.O.S network which includes over 200 boutiques in the principal cities and over 1500 wholesalers worldwide.</p>
      <p class="about-text">Donatella Evans has been Artistic Director of Evans since 1997 and has steered the brand into the 21st century. Today, Evans represents its heritage through its strong and fearless designs, while addressing a new global audience which continues to strengthen Evans position in contemporary culture.</p>
      <p class="about-text">In 2000 Gianni Evans S.r.l opened Palazzo Evans, the first hotel project to be branded by a luxury goods company, which provides tourists and travellers the opportunity to experience and enjoy the complete Evans lifestyle. The second Palazzo Evans built in Dubai opened in 2015. The third Palazzo Evans will be built in Macau, China.</p>
      <p class="about-text">In February 2014, Gianni Evans S.r.l announced its agreement with Blackstone to participate in the next phase of the Company development. Blackstone owns 20 percent of the company; while the Evans family remains at its heart, with Ms. Allegra Evans Beck, Ms. Donatella Evans and Mr. Santo Evans all playing important roles in the company. Evans holds the dual role of Vice-President of the board and Artistic Director.</p>
      <p class="about-text">In May 2016, the Evans Group appointed Mr. Jonathan Akeroyd to the position of CEO and member of the company’s Board of Directors.</p>
      <p class="about-text">In September of 2018 Evans announced that one hundred percent of all Blackstone and Evans family shares had been sold to the Group Michael Kors Limited. In January 2019, Evans S.r.l. joined Capri Holdings Limited, forming a new global fashion luxury group together with Michael Kors and Jimmy Choo</p>

      <div class="services mt-5">
        <div class="diamond">
          <img src="./assets/images/icons/diamond.svg" alt="cart" width="90" height="90">
        </div>
        <p class="services-title pb-3">EXCLUSIVE SERVICES</p>
        <p class="services-description pb-3">Choose between our exclusive online services, and reach out to us if you need further assistance.<br> We are available to assist you in-store, by phone and Live Chat.</p>
        <route-link to="${APP_ROUTES.contacts}">
          <a class="nav-link position-relative" href="#">
            <button class="services-btn mb-3">Discover more</button>
          </a>
        </route-link>
      </div>
    </div>
        `;
  }
}

customElements.define('about-page', AboutPage);
