/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBehance, FaGithub, FaMediumM, FaSourcetree, FaDiscord } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Aiden Bancroft',
    title: 'Aiden Bancroft',
    designation: 'CEO & Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'medium',
        path: '#',
        icon: <FaMediumM />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Mia El Morched',
    title: 'Mia El Morched',
    designation: 'CXO & Co-Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Mason Creed',
    title: 'Mason Creed',
    designation: 'CFO & Co-Founder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'linkedin',
        path: '#',
        icon: <FaLinkedinIn />,
      },
      {
        id: 3,
        name: 'discord',
        path: '#',
        icon: <FaDiscord />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Ananya Chauhan',
    title: 'Ananya Chauhan',
    designation: 'Software Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'github',
        path: '#',
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: 'sourcetree',
        path: '#',
        icon: <FaSourcetree />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Izabella Vázquez',
    title: 'Izabella Vázquez',
    designation: 'Email Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'github',
        path: '#',
        icon: <FaGithub />,
      },
      {
        id: 3,
        name: 'medium',
        path: '#',
        icon: <FaMediumM />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Ari Halifax',
    title: 'Ari Halifax',
    designation: 'Email Designer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'behance',
        path: '#',
        icon: <FaBehance />,
      },
      {
        id: 3,
        name: 'medium',
        path: '#',
        icon: <FaMediumM />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="Our Team"
          title="A Global Team with A Shared Passion for Innovation"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
