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
        <meta name="application-name" content="优惠券" />
        <meta name="apple-mobile-web-app-title" content="优惠券" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="msapplication-tooltip" content="优惠券" />
        <meta name="theme-color" content="#3eaf7c" />
        <meta name="msapplication-navbutton-color" content="#3eaf7c" />
        <meta name="msapplication-starturl" content="/" />
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
      <div className="activity-header hidden">
        <span className='cy nav-item filter'>餐饮</span>
        <span className='tb nav-item filter'>淘宝</span>
        <span className='jd nav-item filter'>京东</span>
        <span className='pdd nav-item filter'>拼多多</span>
        <span className='wph nav-item filter'>唯品会</span>
        <span className='mt nav-item filter'>美团</span>
        <span className='ele nav-item filter'>饿了么</span>
        <span className='dd nav-item filter'>滴滴</span>
        <span className='qt nav-item filter'>其他</span>
      </div>
      <div className="row-three"></div>
      <div className="footer">
        <div className="filter" id="tb"><Image alt="" src="/img/tb.png" width={40} height={40} priority fetchpriority="high" /><p>淘 宝</p></div>
        <div className="filter" id="jd"><Image alt="" src="/img/jd.png" width={40} height={40} priority fetchpriority="high" /><p>京 东</p></div>
        <div className="filter" id="pdd"><Image alt="" src="/img/pdd.png" width={40} height={40} priority fetchpriority="high" /><p>拼多多</p></div>
        <div className="filter" id="wph"><Image alt="" src="/img/wph.png" width={40} height={40} priority fetchpriority="high" /><p>唯品会</p></div>
        <div className="filter" id="wm"><Image alt="" src="/img/wm.png" width={40} height={40} priority fetchpriority="high" /><p>活 动</p></div>
      </div>
      <div className="spinner-container"><div className="spinner"></div></div>
      <div id="tips" className="tips"></div>
      <a href="" target="_blank" rel="noopener noreferrer" className="hidden" id="good-url"></a>
    </div>);
}
