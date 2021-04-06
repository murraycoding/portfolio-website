import ContactStyles from '../styles/Contact.module.scss';
import SectionTitle from '../components/SectionTitle';

export default function ContactPage() {
  return (
    <form id="contact-form" method="post">
      <SectionTitle name="Contact Info" />
      <label>Name</label>
      <input placeholder="Type Name Here"></input>
      <label>Email</label>
      <input type="email" placeholder="name@awesomecompany.com"></input>
      <SectionTitle name="Message" />
    </form>
  )
}