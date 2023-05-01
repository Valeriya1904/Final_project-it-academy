import { Component } from '../../../core/Component';
import '../../../core/Router/Link';
import './ContactsPage.scss';


class ContactsPage extends Component {

 
  render() {
    return `
    <h1 class="text-center mt-5 pt-5 text-uppercase fw-bold">About Us</h1>
    <div class="cards-container">
        <div class="contact-card">
            <div class="card-svg">
              <img src="./assets/images/icons/chat.svg" alt="chat" width="90" height="90">
            </div>
            <div class="card-title">Live Chat</div>
            <div class="card-descr">Should you require further assistance, our Client Service Advisors are able to assist via Live Chat.</div>
            <button class="card-btn">LIVE CHAT</button>
        </div>
        <div class="contact-card">
            <div class="card-svg">
              <img src="./assets/images/icons/like.svg" alt="like" width="90" height="90">
            </div>
            <div class="card-title">Wishlist</div>
            <div class="card-descr">Save your favourite pieces to your Wishlist when you sign-up for an account at Evans.com.</div>
            <button class="card-btn">SIGN-UP</button>
        </div>
        <div class="contact-card">
            <div class="card-svg">
              <img src="./assets/images/icons/car.svg" alt="car" width="90" height="90">
            </div>
            <div class="card-title">Shipping And Returns</div>
            <div class="card-descr">Find out more about our complimentary standard shipping, our complimentary 30-day return policy on all orders.</div>
            <button class="card-btn">DISCOVER MORE</button>
        </div>
        <div class="contact-card">
            <div class="card-svg">
              <img src="./assets/images/icons/gift.svg" alt="gift" width="90" height="90">
            </div>
            <div class="card-title">Gift Wrapping</div>
            <div class="card-descr">Your Evans gifts will be sent in our signature Medusa boxes with our Greca ribbon and a personal note card.</div>
            <button class="card-btn">DISCOVER MORE</button>
        </div>
        <div class="contact-card">
            <div class="card-svg">
              <img src="./assets/images/icons/calendar.svg" alt="calendar" width="90" height="90">
            </div>
            <div class="card-title">Book An Appointment</div>
            <div class="card-descr">Book an appointment for a phone call, video call, or in-store shopping experience.</div>
            <button class="card-btn">BOOK NOW</button>
        </div>
        <div class="contact-card">
            <div class="card-svg">
              <img src="./assets/images/icons/boutique.svg" alt="boutique" width="90" height="90">
            </div>
            <div class="card-title">Find A Boutique</div>
            <div class="card-descr">Find your nearest Evans boutique to discover currently available styles or speak with our expert Sale Advisors.</div>
            <button class="card-btn">FIND BOUTIQUE</button>
        </div>
    </div>
    <div class="map d-flex justify-content-center mb-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18817.05053224839!2d27.558836796616145!3d53.876093374626116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd19ddc60bb55%3A0x4a0c4da169e5c138!2z0JrQvtGA0L7QvdCwLdGB0LjRgtC4!5e0!3m2!1sru!2sby!4v1682967407744!5m2!1sru!2sby" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
        `;
  }
}

customElements.define('contacts-page', ContactsPage);
