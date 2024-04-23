const TitleText: React.FC<{ text: string }> = (props) => {
  return <div className='text-xl font-bold m-4'>{props.text}</div>;
};

export default TitleText;
