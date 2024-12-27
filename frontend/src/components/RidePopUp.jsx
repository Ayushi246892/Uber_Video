import React from 'react';

const RidePopUp = (props) => {
    return (
        <div className="relative bg-white p-5 rounded-lg shadow-lg">
            {/* Close Button */}
            <h5
                className="absolute top-0 right-0 p-2 text-3xl text-gray-200 cursor-pointer"
                onClick={() => props.setRidePopupPanel(false)}
            >
                <i className="ri-arrow-down-wide-line"></i>
            </h5>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-center mb-5">New Ride Available!</h3>

            {/* Ride Info */}
            <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                    <img
                        className="h-12 rounded-full object-cover w-12"
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt="User"
                    />
                    <h2 className="text-lg font-medium">
                        {props.ride?.user?.fullname?.firstname} {props.ride?.user?.fullname?.lastname}
                    </h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>

            {/* Ride Details */}
            <div className="flex gap-2 justify-between flex-col items-center mt-5">
                <div className="w-full">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 w-full">
                    <button
                        onClick={() => {
                            props.setConfirmRidePopupPanel(true);
                            props.confirmRide();
                        }}
                        className="bg-green-600 w-full text-white font-semibold p-2 px-10 rounded-lg"
                    >
                        Accept
                    </button>

                    <button
                        onClick={() => props.setRidePopupPanel(false)}
                        className="mt-2 w-full bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg"
                    >
                        Ignore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RidePopUp;
