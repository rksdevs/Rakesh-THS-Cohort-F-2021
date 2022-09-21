import { articles } from "../../../data";

export default function handler(req, res) {
  const id = req.query.id;

  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(400).json({ message: `Article with id ${id} was not found` });
  }
}

// export const getStaticProps = async (context) => {
//   const id = context.query.id;
//   const res = await fetch(`${server}/articles/${id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     props: {
//       paths,
//       fallback: false,
//     },
//   };
// };
