const counterSchema = require("../models/counter.model");

const logError = (error) => {
  console.error("Error: ", error);
};

exports.createCounter = async (req, res) => {
  const { count, title, subTitle } = req.body;

  try {
    const counter = new counterSchema({
      count,
      title,
      subTitle,
    });
    const data = await counter.save();
    return res.status(200).send({
      data,
      message: "Counter created successfully",
      isSuccess: true,
    });
  } catch (error) {
    logError(error);
    return res.status(500).send({
      message: "Failed to create Counter due to server error",
      isSuccess: false,
    });
  }
};

exports.getCounter = async (req, res) => {
  try {
    const getData = await counterSchema.find();
    const counters = await counterSchema.countDocuments();
    res.status(200).json({
      data: getData,
      totalCounters: counters,
      message: "Counter Retrieved Successfully",
      isSuccess: true,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: "Failed to Retrieve Counter",
      isSuccess: false,
    });
  }
};
