import "./CartPage.scss";
const CartPage = ({cartItems}) => {
  return (
    <div className="cart-page">
      <h2>쇼핑카트</h2>
      <p>주문하실 상품을 확인해 주세요</p>
      <div className="cart-wrap">
        {/* 상품목로 */}
        <ul className="cart-list">
          {
            cartItems.map((item)=>{
              return (
                <li key={item.id}>
                  <div className="img-box">
                    <img 
                      src={require(`../assets/images/new/${item.image}`)} 
                      alt={item.title}
                    />
                  </div>
                  <div className="info-box">
                    <h3>{item.title}</h3>
                    <div className="price-wrap">
                      <p>￦ {Number(item.price).toLocaleString()}</p>
                    
                      <div className="count-wrap">
                        <button onClick={handleMinus}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={handlePlus}>+</button>
                      </div>
                    </div>
                  </div>
                  <button>삭제</button>
                </li>
              )
            })
          }
        </ul>
        <div className="cart-summary">
          <h3>주문 예상 금액</h3>
          <div className="summary-wrap">
            <span>총 상품 금액</span>
            <span>￦ </span>
          </div>
          <div className="summary-wrap">
            <span>배송비</span>
            <span>￦ 0 (무료)</span>
          </div>
          <div className="summary-total">
            <span>총 결제 금액</span>
            <span>￦ </span>
          </div>
          <button>주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage