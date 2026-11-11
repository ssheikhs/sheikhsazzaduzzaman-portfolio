import { Link } from "react-router-dom";

export default function NotFound({ message = "This page doesn't exist." }) {
  return (
    <section className="container-x flex flex-col items-start py-24 md:py-32">
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-6 text-5xl font-bold">Page not found</h1>
      <p className="mt-4 text-lg text-muted">{message} Check the address, or head back to the home page.</p>
      <Link to="/" className="btn-primary mt-8">Go to home page</Link>
    </section>
  );
}
