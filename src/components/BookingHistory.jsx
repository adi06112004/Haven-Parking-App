import React, { useState } from 'react';
import { Button } from './ui/Button'; // Your Button component
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'; // Your Card components
import { FaCheckCircle, FaClock } from 'react-icons/fa'; // Correct icon imports
import Header from './Header';

const mockBookings = [
  { id: 1, parkingName: 'Downtown Parking', dateTime: '2023-05-15 14:00', status: 'Completed', price: '$10' },
  { id: 2, parkingName: 'Central Plaza', dateTime: '2023-05-20 10:30', status: 'Upcoming', price: '$8' },
  { id: 3, parkingName: 'Riverside Lot', dateTime: '2023-05-18 09:00', status: 'Completed', price: '$12' },
];

export function BookingHistory() {
  const [filter, setFilter] = useState('All');
  const [expandedBooking, setExpandedBooking] = useState(null);

  const filteredBookings = mockBookings.filter(booking =>
    filter === 'All' || booking.status === filter
  );

  return (
    <div>
        <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Booking History</h1>

      {/* Filter Section */}
      <div className="mb-4 shadow-sm border-[2px] rounded-lg">
        <select 
          onChange={(e) => setFilter(e.target.value)} 
          value={filter} 
          className="w-full border-[1px] text-sm py-2 px-2 border-black hover:border-double hover:border-black hover:border-[5px] hover:rounded-lg rounded bg-white focus:ring-slate-600 focus:white focus:outline-none"
        >
          <option className='' value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{booking.parkingName}</span>
                {booking.status === 'Completed' ? (
                  <FaCheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <FaClock className="h-5 w-5 text-yellow-500" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date & Time: {booking.dateTime}</p>
              <p>Status: {booking.status}</p>
              <p>Price: {booking.price}</p>
              
              {/* Expanded Booking Details */}
              {expandedBooking === booking.id ? (
                <div className="mt-2">
                  <p>Additional booking details here...</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedBooking(null)}
                    className="mt-2"
                  >
                    Hide Details
                  </Button>
                </div>
              ) : (
                <div className="mt-2 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setExpandedBooking(booking.id)}
                  >
                    View Details
                  </Button>
                  {booking.status === 'Upcoming' && (
                    <a href={`/ownerconfirmation/${booking.id}`}>
                      <Button size="sm">Owner Confirmation</Button>
                    </a>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}
