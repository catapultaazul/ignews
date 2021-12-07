import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Lucas" },
    { id: 2, name: "Andrelli" },
    { id: 3, name: "Leo" },
  ];

  return response.json(users);
};
