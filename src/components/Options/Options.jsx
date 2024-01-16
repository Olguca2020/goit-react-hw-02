import css from './Options.module.css';
export const Options = ({ values, handleClick, ifReset, handleClickReset }) => {
  const keys = Object.keys(values);

  return (
    <div className={css.optionWrapper}>
      {keys.map(key => {
        return (
          <button className={css.btn} type="button" key={key} onClick={handleClick}>
            {key}
          </button>
        );
      })}
      {ifReset && (
        <button className={css.btn} type="button" onClick={handleClickReset}>
          Reset
        </button>
      )}
    </div>
  );
};
