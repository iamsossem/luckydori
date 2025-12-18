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
                    </div>
                    <div className="count-wrap">
                      <button>-</button>
                      <span>{item.quantity}</span>
                      <button>+</button>
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
        </div>
      </div>
    </div>
  )
}

export default CartPage