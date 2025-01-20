import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button'; // Assuming Button component exists
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'; // Assuming Card components exist
import { Input } from '../components/ui/Input'; // Assuming Input component exists
import Header from '../components/Header';
import { Footer } from '../components/Footer';

// Dummy booking data
const dummyResults = [
  {
    id: 1,
    name: 'XYZ Central Park Parking',
  },
  {
    id: 2,
    name: 'XYZ Times Square Garage',
  },
  {
    id: 3,
    name: 'XYZ Broadway Lot',
  },
];

export default function OwnerConfirmation() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]); // State to store the uploaded photos

  // Fetch the booking details based on the passed id
  const bookingDetails = dummyResults.find((result) => result.id === parseInt(id));

  const handlePhotoUpload = (event) => {
    if (event.target.files) {
      setPhotos(Array.from(event.target.files)); // Update photos state with selected files
    }
  };

  const handleConfirm = () => {
    // Logic to confirm the booking and release payment
    console.log('Booking confirmed, payment released');
    // You can integrate the payment release logic here
  };

  // If booking details are not found, display a message
  if (!bookingDetails) {
    return <div>Booking not found</div>;
  }

  return (
    <div>
      <Header/>
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Owner Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Booking Details Section */}
            <div>
              <h3 className="font-semibold">Booking Details</h3>
              <p>Booking ID: {id}</p>
              <p>Parking Spot: {bookingDetails.name}</p>
              {/* Add more booking details here if needed */}
            </div>

            {/* Photo Upload Section */}
            <div>
              <h3 className="font-semibold">Vehicle Condition Photos</h3>
              <Input
                type="file"
                multiple
                onChange={handlePhotoUpload}
                accept="image/*"
              />
              <p className="mt-2">
                {photos.length} photo{photos.length !== 1 ? 's' : ''} selected
              </p>
            </div>

            {/* Confirm Button */}
            <Button className="w-full" onClick={handleConfirm}>
              Confirm Booking and Release Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className='absolute w-full bottom-0'>
    <Footer/>
    </div>
    </div>
  );
}