// import {
//   H2,
//   MaxWidthContainer,
//   ResponsiveSpacer,
//   Text
// } from 'axelra-react-utilities';
import {NextSeo} from 'next-seo';
import Link from 'next/link';
import {ReactElement} from 'react';
import styled from 'styled-components';
import {FancyTitle} from '../components/ui/FancyTitle';
import MainLayout from '../layouts/main.layout';

const Container = styled.div`
  overflow: hidden;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <NextSeo title={'Home'} />
      <FancyTitle>
        Hello Next.js
      </FancyTitle>
      <span>
        A starter template for <b>Next.js</b>
      </span>
      <span x={2} lg={4} />
      <h2 >
        What&apos;s inside
      </h2>
      <span>
        Styled Components <br />
        Typescript <br />
        Next-Seo <br />
        Axelra-React-Utilities
      </span>

      <h2>
        Layouts and Theming
      </h2>
      <div>
        Axelra-React-Utilities can be configured differently using the{' '}
        <Link href={'https://nextjs.org/docs/basic-features/layouts'}>
          layout pattern
        </Link>
        .<br /> Check out this <Link href={'/other'}>Other Page</Link> to see it
        in action
      </div>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
