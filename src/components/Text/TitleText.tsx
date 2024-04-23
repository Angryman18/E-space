const TitleText: React.FC<{ text: string }> = (props) => {
  return <div className='text-xl font-bold m-2'>{props.text}</div>;
};

export default TitleText;
