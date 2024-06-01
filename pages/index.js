import Head from 'next/head';
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
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <title>优惠券</title>
      </Head>
      <div className="row-one">
        <div className="input-box">
            <input className="input" type="text" id="search-id" placeholder="请输入商品名称" />
            <img alt="" src="img/close.png" className="close" />
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
        <div className="filter" id="tb"><img alt="" src="img/tb.png" /><p>淘 宝</p></div>
        <div className="filter" id="jd"><img alt="" src="img/jd.png" /><p>京 东</p></div>
        <div className="filter" id="pdd"><img alt="" src="img/pdd.png" /><p>拼多多</p></div>
        <div className="filter" id="wph"><img alt="" src="img/wph.png" /><p>唯品会</p></div>
        <div className="filter" id="wm"><img alt="" src="img/wm.png" /><p>活 动</p></div>
      </div>
    </div>);
}
