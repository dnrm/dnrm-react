import Input from "../components/Input";
import Button from "../components/Button";

export default function InputGroup(props: any) {
  return (
    <div className="flex items-center">
      <form
        onSubmit={props.onSubmit}
        style={{ display: "flex", width: "100%" }}
        className="w-4/5"
      >
        <Input
          inputGroup
          value={props.value}
          onChange={props.onChange}
          className={props.className}
          list={props.list}
          style={{ maxWidth: "768px" }}
          id={props.id}
        />
        <Button inputGroup type="submit">
          {props.children}
        </Button>
      </form>
    </div>
  );
}
