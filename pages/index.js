import Head from 'next/head';
import FirstRow from './components/firstRow';
import SecondRow from './components/secondRow';
import ThirdRow from './components/thirdRow';
import Footer from './components/footer';

export default function Home() {
    return (<div className="container">
        <Head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
          <title>优惠券</title>
        </Head>
        <FirstRow/>
        <SecondRow/>
        <ThirdRow/>
        <Footer/>
      </div>);
}
