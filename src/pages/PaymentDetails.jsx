import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button'; // Assuming Button component exists
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'; // Assuming Card components exist
import { Input } from '../components/ui/Input'; // Assuming Input component exists
import Header from '../components/Header';
import { Footer } from '../components/Footer';

// Dummy parking spot data
const dummyResults = [
  {
    id: 1,
    name: 'XYZ Central Park Parking',
    price: '$15/hour',
  },
  {
    id: 2,
    name: 'XYZ Times Square Garage',
    price: '$20/hour',
  },
  {
    id: 3,
    name: 'XYZ Broadway Lot',
    price: '$18/hour',
  },
];

export default function PaymentDetails() {
  const { id } = useParams();
  const [couponCode, setCouponCode] = useState(''); // State to hold the coupon code
  const navigate = useNavigate();

  // Fetch the parking details based on the passed id
  const parkingDetails = dummyResults.find((result) => result.id === parseInt(id));

  // Payment button handler
  const handlePayment = () => {
    // In a real application, you would implement the payment logic here
    console.log('Processing payment...');
  };

  // If parking details are not found, display a message
  if (!parkingDetails) {
    return <div>Parking spot not found</div>;
  }

  return (
    <div>
      <Header/>
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Payment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Parking spot details */}
            <div>
              <h3 className="font-semibold">Parking Spot</h3>
              <p>{parkingDetails.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Price</h3>
              <p>{parkingDetails.price}</p>
            </div>

            {/* Coupon code input */}
            <div>
              <h3 className="font-semibold">Coupon Code</h3>
              <Input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)} // Update coupon code on change
              />
            </div>

            {/* Payment button */}
            <Button className="w-full" onClick={handlePayment}>
              Pay Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    <div className='absolute bottom-0 w-full'>
    <Footer/>
    </div>
   
    </div>
  );
}