/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Email and Subscriber Management',
    title: 'Email and Subscriber Management',
    text:
      'Manage your email list and subscribers in a logical interface that makes it easy to add, filter and organize your subscribers and their details, all in one place.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Create Amazing Campaigns',
    title: 'Create Amazing Campaigns',
    text:
      'Want to code emails from scratch? No problem. Our simple HTML email editor gives your unique features, snippets, custom variables and an  email CSS inliner.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Deliver The Right Message',
    title: 'Deliver The Right Message',
    text:
      'Personalize your campaigns with our advanced targeting features. Then deliver the right email to the right subscriber, all set up it up in a few minutes.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'We\'re Here for You',
    title: 'We\'re Here for You',
    text:
      'Our support team works around the clock in order to assist you whenever in the best way they can. Just shoot us an email or, fire up the live chat.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Email Marketing Made Better"
          title="Useful Features Making Your Email Marketing More Effective"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
