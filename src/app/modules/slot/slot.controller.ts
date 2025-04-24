import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { SlotServices } from "./slot.service";

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot created Successfully",
    data: result,
  });
});

const getAllSlots = catchAsync(async (req, res) => {
  const slots = await SlotServices.getAllSlotsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Slots retrieved successfully",
    meta: slots.meta,
    data: slots.data,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const result = await SlotServices.getAvailableSlotsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Slots retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const SlotControllers = {
  createSlot,
  getAllSlots,
  getAvailableSlots,
};
