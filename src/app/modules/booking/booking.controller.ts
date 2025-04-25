import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { BookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking successfully",
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const customerBooking = catchAsync(async (req, res) => {
  const { email } = req.params;
  const result = await BookingServices.getCustomerBookingFromDB(
    email,
    req.query
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const popularServices = catchAsync(async (req, res) => {
  const limit = parseInt(req.query.limit as string) || 5;
  const result = await BookingServices.getPopularServices(limit);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Popular services successfully",
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBookings,
  customerBooking,
  popularServices,
};
