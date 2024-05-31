function FirstRow() {
    return (
        <div className="row-one">
            <div className="input-box">
                <input className="input" type="text" id="search-id" placeholder="请输入商品名称"></input>
                <img alt="" src="img/close.png" className="close"></img>
            </div>
            <div className="search-box">
                <button className="search">搜索</button>
            </div>
        </div>
    );
  }
  
  export default FirstRow;