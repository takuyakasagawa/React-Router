import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/９９９">URL Pramerter</Link>
      <br />
      <Link to="/page2/９９９?name=hogehoge">Query Pramerter</Link>
    </div>
  );
};
