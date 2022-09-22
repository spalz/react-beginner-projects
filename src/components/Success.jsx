import React from "react";

export const Success = ({ count, onClickBackUsers }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => onClickBackUsers()} className="send-invite-btn">
        Назад
      </button>
    </div>
  );
};
