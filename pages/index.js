import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (<div className="container">
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Shopping" />
        <meta name="apple-mobile-web-app-title" content="Shopping" />
        <meta name="msapplication-tooltip" content="Shopping" />
        <meta name="theme-color" content="#3eaf7c" />
        <meta name="msapplication-navbutton-color" content="#3eaf7c" />
        <meta name="msapplication-starturl" content="/index.html" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"/>
        <title>优惠券</title>
      </Head>
      <div className="row-one">
        <div className="input-box">
            <input className="input" type="text" id="search-id" placeholder="请输入商品名称" />
            <Image alt="" src="/img/close.png" className="close" width={25} height={25} priority fetchpriority="high" />
        </div>
        <div className="search-box">
            <button className="search">搜索</button>
        </div>
      </div>
      <div className="row-two">
        <div className="sort-by">
          <label>排序：</label>
          <span className="filter" id="zh">综合</span>
          <span className="filter" id="price">价格</span>
          <span className="filter" id="sale">销量</span>
        </div>
      </div>
      <div className="row-three"></div>
      <div className="footer">
        <div className="filter" id="tb"><Image alt="" src="/img/tb.png" width={40} height={40} priority fetchpriority="high" /><p>淘 宝</p></div>
        <div className="filter" id="jd"><Image alt="" src="/img/jd.png" width={40} height={40} priority fetchpriority="high" /><p>京 东</p></div>
        <div className="filter" id="pdd"><Image alt="" src="/img/pdd.png" width={40} height={40} priority fetchpriority="high" /><p>拼多多</p></div>
        <div className="filter" id="wph"><Image alt="" src="/img/wph.png" width={40} height={40} priority fetchpriority="high" /><p>唯品会</p></div>
        <div className="filter" id="wm"><Image alt="" src="/img/wm.png" width={40} height={40} priority fetchpriority="high" /><p>活 动</p></div>
      </div>
    </div>);
}
