import React from 'react';
import PropTypes from 'prop-types';
import EditTransactionForm from '../EditTransactionForm/EditTransactionForm';
import style from './ModalEditTransaction.module.css';

const ModalEditTransaction = ({ isOpen, initialValues, onSubmit, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = e => {
    if (e.target.className === 'modal-overlay') onClose();
  };

  return (
    <div className={style['modal-overlay']} onClick={handleBackgroundClick}>
      <div className={style['modal-content']}>
        <button className={style['modal-close']} onClick={onClose}>
          X
        </button>
        <h3>Edit Transaction</h3>
        <EditTransactionForm
          initialValues={initialValues}
          onSubmit={onSubmit}
        />
        <button className={style['modal-cancel']} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

ModalEditTransaction.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  initialValues: PropTypes.shape({
    type: PropTypes.oneOf(['income', 'expense']).isRequired,
    sum: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    comment: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalEditTransaction;
