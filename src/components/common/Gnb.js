import { useState } from "react";
import "./Gnb.scss";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Gnb = () => {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <nav>
      <div className="mobile-toggle" onClick={handleClick}>
        <button>{isShow ? <MdClose /> : <MdOutlineMenu />}</button>
        <span>감성별 추천</span>
      </div>
      <div className={`menu-wrap ${isShow ? 'on':''}`}>
        <ul className="menu-top">
          <li>전체보기👀</li>
          <li>인기박스💖</li>
          <li>신상박스🌹</li>
          <li>다시 찾아온 문구들🎁</li>
        </ul>
        <ul className="menu-bottom">
          <li>설렘박스💌</li>
          <li>집중박스📚</li>
          <li>힐링박스🌿</li>
          <li>우정박스🤝</li>
          <li>다꾸박스🎀</li>
        </ul>
      </div>
    </nav>
  );
};

export default Gnb;
