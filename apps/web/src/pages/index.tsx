import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app';
import { funfunction } from 'ui';
 
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>;
};
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
    </>
  );
};

export async function getServerSideProps() {
  // Check logged environment variables
  funfunction('GSSP')
  return { props: {} }
}
export default Page;