/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';
import Avatar5 from 'assets/testimonial/avatar5.png';
import Avatar6 from 'assets/testimonial/avatar6.png';
import Avatar7 from 'assets/testimonial/avatar7.png';

const data = [
  {
    id: 1,
    title: 'Just so much better',
    description:
      'You made it so simple. My email marketing workflow is so much faster and easier to work with than my way. I just choose the design design, make the change and click send.',
    avatar: Avatar1,
    name: 'Ian Evans',
    designation: '@ian.evans',
    review: 4,
  },
  {
    id: 2,
    title: 'Simple and logical',
    description:
      'Wow. I just created my first email marketing plan and email list and and it was SO SIMPLE. I am blown away. You guys truly kick ass. Thanks for being so supportive and logical.',
    avatar: Avatar2,
    name: 'Matt Spitz',
    designation: '@matt.spitz',
    review: 5,
  },
  {
    id: 3,
    title: 'Instant and continuous results',
    description:
      'Our client base just went thought the roof. We were able to triple our growth in just under 3 months by changing a few small things. Thank you The Email Company.',
    avatar: Avatar3,
    name: 'Anastasiya Shkurdai',
    designation: '@anastasiya.shkurdai',
    review: 5,
  },
  {
    id: 4,
    title: 'Scalable, unlimited growth',
    description:
      'Our inbound leads have grown so dramatically that we have had to hired a dedicated sales team that now only works on inbound leads. A true assets to our company and its growth.',
    avatar: Avatar4,
    name: 'Nicholai Popov',
    designation: '@nicholai.popov',
    review: 5,
  },
  {
    id: 5,
    title: 'Understandable, relevant analytics',
    description:
      'The Email Company has a great logic and simplicity to it. I was a bit worried about interpreting my email data, but it wasn’t a problem at all. I love using the analytics, it just works.',
    avatar: Avatar5,
    name: 'Bernadetta Pellegrini',
    designation: '@bernadetta.pellegrini',
    review: 5,
  },
  {
    id: 6,
    title: 'Genuine support that helps',
    description:
      'We had an issue with our customer acquisition costs and needed this resolved to gain customers without losing money. They went above and beyond with their support.',
    avatar: Avatar6,
    name: 'Dana Torres',
    designation: '@dana.torres',
    review: 5,
  },
  {
    id: 7,
    title: 'Genuine support that helps',
    description:
      'With fantastic products and tools at a price every business can afford, the team treat their clients like people and less like customers, providing relevant, stellar advice.',
    avatar: Avatar7,
    name: 'Email Therapy',
    designation: '@email.therapy',
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
}

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader
          slogan="Testimonial"
          title="Meet Client Satisfaction"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={item.sliderClass}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
