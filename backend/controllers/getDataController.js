import { Dashboard } from "../models/dashboardSchema.js";

export const getDataController = async (req, res) => {
  try {
    const result = await Dashboard.find({});
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
  }
};
