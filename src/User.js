const User = (props) => {
  console.log(props);
  return (
    <h2>
      {props.name} : {props.age}
    </h2>
  );
};

export default User;
