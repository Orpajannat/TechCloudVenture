import ConsultationCall from '@/components/contact/ConsultationCall';
import ContactForm from '@/components/contact/ContactForm';
import ContactIntro from '@/components/contact/ContactIntro';
import Hero from '@/components/contact/Hero';
import WhyChooseUs from '@/components/contact/WhyChooseUs';
import BookCall from '@/components/our-story/BookCall';

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactIntro/>
      <ConsultationCall/>
      <ContactForm/>
      <WhyChooseUs/>
    </main>
  );
}
