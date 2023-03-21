import { Icon, Spacer } from "../";

export default function Header({ ...props }) {
  return (
    <section className="header">
      <Spacer />
      <h3>I'm younique</h3>
      <Icon name="list" size={32} color="white" />
    </section>
  );
}
