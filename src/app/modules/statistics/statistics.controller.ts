import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { StatisticsServices } from "./statistics.service";

const statistics = catchAsync(async (req, res) => {
  const result = await StatisticsServices.getServiceAndCategoryStatistics();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Statistics",
    data: result,
  });
});

export const StatisticsControllers = {
  statistics,
};
