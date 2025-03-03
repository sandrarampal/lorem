const Title = (props) => {
  console.log(props);

  const titleText = props.name;
  return <h1 className="main-title">{titleText}</h1>;
};

export default Title;
