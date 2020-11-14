import React from 'react';
import styles from './Input.module.scss';

const Input = (props) => {
  const { tag: Tag, name, type, label, onChangeFn, fieldTypes } = props;
  return (
    <div className={styles.addForm__item}>
      <label htmlFor={name}>{label}</label>
      <Tag className={styles.inputItem} name={name} type={type} id={name} onChange={onChangeFn}>
        {Tag === 'select'
          ? fieldTypes.map((type) => {
              return (
                <option key={type.name} name="fieldOfStudy" value={type.name}>
                  {type.name}
                </option>
              );
            })
          : null}
      </Tag>
    </div>
  );
};

export default Input;
