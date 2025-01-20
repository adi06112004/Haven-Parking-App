import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button'; // Assuming Button component exists
import { Input } from '../components/ui/Input'; // Assuming Input component exists
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'; // Assuming Card components exist
import { Star } from 'lucide-react'; // Assuming you have lucide-react installed for icons
import Header from '../components/Header';
import { Footer } from '../components/Footer';

// Sample data for parking spots
const dummyResults = [
  {
    id: 1,
    name: 'XYZ Central Park Parking',
    owner: 'John Doe',
    rating: 4.5,
    price: '$15/hour',
    timespan: '24/7',
    distance: '0.3 miles',
  },
  {
    id: 2,
    name: 'XYZ Times Square Garage',
    owner: 'Jane Smith',
    rating: 4.2,
    price: '$20/hour',
    timespan: '6AM - 12AM',
    distance: '0.8 miles',
  },
  {
    id: 3,
    name: 'XYZ Broadway Lot',
    owner: 'Bob Johnson',
    rating: 4.7,
    price: '$18/hour',
    timespan: '24/7',
    distance: '0.5 miles',
  },
];

export default function FindParkingResults() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(dummyResults);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = dummyResults.filter((result) =>
      result.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Search for parking (e.g., xyz)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </div>
        </form>

        {/* Filter and Sort Buttons */}
        <div className="mb-6 flex justify-between">
          <Button variant="outline">Sort By</Button>
          <Button variant="outline">Filters</Button>
        </div>

        {/* Displaying Parking Results */}
        <div className="space-y-4">
          {searchResults.map((result) => (
            <Card key={result.id}>
              <CardHeader>
                <CardTitle>{result.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <p>Owner: {result.owner}</p>
                  <p className="flex items-center">
                    Rating: {result.rating}
                    <Star className="ml-1 h-4 w-4 fill-current text-yellow-400" />
                  </p>
                  <p>Price: {result.price}</p>
                  <p>Timespan: {result.timespan}</p>
                  <p>Distance: {result.distance}</p>
                  <Button
                    className="w-full"
                    onClick={() => navigate(`/payment/${result.id}`)}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}