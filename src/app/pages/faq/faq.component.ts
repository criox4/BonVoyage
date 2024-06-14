import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is BonVoyage?',
      answer: 'BonVoyage is a travel website that offers a wide range of travel packages to various destinations worldwide.',
      open: false
    },
    {
      question: 'How do I book a package?',
      answer: 'To book a package, browse through our available packages, select the one you like, and follow the booking instructions on the package page.',
      open: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit cards, debit cards, and online payment services.',
      open: false
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can cancel or modify your booking. Please refer to our cancellation policy for more details.',
      open: false
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we offer 24/7 customer support. You can contact us via email, phone, or live chat.',
      open: false
    }
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
