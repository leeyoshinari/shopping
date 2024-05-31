import { useContext } from 'react';
import { MyContext } from '../../contexts/myContext';

function Footer() {
    const {platform, updatePlatform} = useContext(MyContext);
    return (
        <div className="footer">
          <div className="tb" onClick={() => updatePlatform("tb")}><img alt="" src="img/tb.png" className="tb"></img><p className="tb">淘 宝</p></div>
          <div className="jd" onClick={() => updatePlatform("jd")}><img alt="" src="img/jd.png" className="jd"></img><p className="jd">京 东</p></div>
          <div className="pdd" onClick={() => updatePlatform("pdd")}><img alt="" src="img/pdd.png" className="pdd"></img><p className="pdd">拼多多</p></div>
          <div className="wph" onClick={() => updatePlatform("wph")}><img alt="" src="img/wph.png" className="wph"></img><p className="wph">唯品会</p></div>
          <div className="wm" onClick={() => updatePlatform("wm")}><img alt="" src="img/wm.png" className="wm"></img><p className="wm">活 动</p></div>
        </div>
    );
  }
  
  export default Footer;