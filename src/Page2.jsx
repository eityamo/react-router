import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/900">URL parameter</Link>
      <br />
      <Link to="/page2/900?name=hohohoho">Query URL</Link>
    </div>
  );
};
