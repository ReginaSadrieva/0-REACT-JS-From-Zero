import classes from './Button.module.css';

export default function Button({ children, onClick, isActive }) {
  // let classes = 'button';

  // if (isActive) classes += ' active';
  // function handleClick() {
  //   console.log('button clicked');
  // }

  // const handleMouseEnter = () => console.log('entered');
  //console.log('Button component render');
  console.log(classes);
  return (
    <button
      className={isActive ? `${classes.button} ${classes.active}` : classes.button}
      //className={classes}
      onClick={onClick}
      // onMouseEnter={handleMouseEnter}
      // onDoubleClick={() => console.log('double')}
    >
      {children}
    </button>
  );
}
