import Card from "../components/Card";

const Account = () => {
  return (
    <div>
      <h1 className="text-4xl font-light py-2">Account</h1>
      <hr />
      <div className="option my-4 grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4">
        <Card
          title="Sign up"
          link="signup"
          className="my-2"
          image="https://source.unsplash.com/random"
        >
          Don't have an account? Sign up here!
        </Card>
        <Card
          title="Login"
          link="login"
          className="my-2"
          image="https://source.unsplash.com/random"
        >
          Already have an account? Log in here!
        </Card>
      </div>
    </div>
  );
};

export default Account;
