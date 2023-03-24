import { Icon, Spacer } from "../";

export default function Header({ ...props }) {
  return (
    <section className="header" {...props}>
      <h3>I'm younique</h3>
      <Icon
        name="list"
        size={32}
        color="white"
        style={{ marginRight: "8px", position: "absolute", right: "0" }}
      />
    </section>
  );
}
