import nc from "next-connect";

const handler = nc()
  //.use(someMiddleware())
  .get((req, res) => {
    return res.status(200).json({
      test: 'Successful',
    });
  });

export default handler;