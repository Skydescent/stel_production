import React, { useState } from "react";
import { sendMail } from "../services/MailService";
import { maskPhoneInput } from "../helpers";

const OrderForm = ({ productPropsToOrder }) => {
  const [orderState, setOrder] = useState({
    phone: null,
    email: null,
    comment: null,
    isOrderSend: false,
  });

  const handleFormChange = (e) => {
    setOrder((prev) => {
      const newOrder = { ...prev };
      if (e.target.name === 'phone') {
        newOrder[e.target.name] = maskPhoneInput(e.target.value);
      } else {
        newOrder[e.target.name] = e.target.value;
      }
      return newOrder;
    });
  };

  const handleSendOrderMail = (e) => {
    e.preventDefault();

    if (!orderState.phone && !orderState.email) {
      alert("Поля телефон и/или почта должны быть заполнены!");
      return;
    }

    if (!orderState.email && (!orderState.phone || orderState.phone.length < 15) ) {
      alert("Телефон должен иметь не меньше 11 цифр!");
      return;
    }

    const data = { ...orderState, ...productPropsToOrder };

    sendMail(data).then((response) => {
      if (response.result === "success") {
        setOrder(() => ({
          email: null,
          phone: null,
          comment: null,
          isOrderSend: true,
        }));
        setTimeout(() => {
          setOrder(() => ({
            email: null,
            phone: null,
            comment: null,
            isOrderSend: false,
          }));
        }, 3000);
      }
    });
  };

  return !orderState.isOrderSend ? (
    <form className="form ajax_form" name="order_form">
      <div className="popup_header">Отправка заказа</div>

      <input
        type="phone"
        name="phone"
        value={orderState.phone ?? ''}
        maxLength="30"
        placeholder="Контактный телефон"
        onChange={(e) => handleFormChange(e)}
      />
      <p>
        <em>и/или</em>
      </p>
      <input
        type="email"
        name="email"
        maxLength="30"
        placeholder="Электронная почта"
        onChange={(e) => handleFormChange(e)}
      />
      <textarea
        name="comment"
        placeholder="Комментарий к заказу"
        rows="3"
        onChange={(e) => handleFormChange(e)}
      />
      <input
        type="submit"
        value="Отправить"
        name="submit"
        className="sbmt"
        disabled={!orderState.phone && !orderState.email}
        onClick={(e) => handleSendOrderMail(e)}
      />
    </form>
  ) : (
    <div>
      <strong>Заказ отправлен</strong>
      <p>Ожидайте обратного звонка или письма из магазина.</p>
    </div>
  );
};

export default OrderForm;
