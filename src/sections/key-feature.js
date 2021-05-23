/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Make your campaigns as effective as possible by streamlining your emails.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Personalized Toolkit',
    title: 'Personalized Toolkit',
    text:
      'Keep track of new leads and customers across multiple campaigns and sources.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Reports and Forecasting',
    title: 'Reports and Forecasting',
    text:
      'Gain the insights you need to see what works best for your business, constantly.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Collaboration',
    title: 'Collaboration',
    text:
      'Communicate with your team effortlessly, ensuring nothing falls through the cracks.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Email Marketing Features"
          title="Designed to Help Your Business Grow"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};