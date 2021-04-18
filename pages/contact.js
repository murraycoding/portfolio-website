import ContactStyles from '../styles/Contact.module.scss';
import SectionTitle from '../components/SectionTitle';

export default function ContactPage() {
  return (
    <form id="contact-form" method="post">
      <SectionTitle name="Contact Info" />
      <label>Name</label>
      <input placeholder="Type Name Here" />
      <label>Email</label>
      <input type="email" placeholder="name@awesomecompany.com" />
      <label>Phone</label>
      <input placeholder="(555)867-5309"></input>
      <SectionTitle name="Message" />
      <label>Reason for contact</label>
      <select>
        <option>Option 1</option>
      </select>
      <label>Message</label>
      <textarea rows="4"/>
    </form>
  )
}