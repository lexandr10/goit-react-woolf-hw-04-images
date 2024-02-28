import stl from './Button.module.css';
export const Button = props => {
  return (
    <button className={stl.Button} onClick={props.handlerLoadMore}>
      Load more...
    </button>
  );
};
