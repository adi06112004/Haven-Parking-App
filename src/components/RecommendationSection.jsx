import React from 'react';

const recommendations = [
  { name: 'Downtown Parking', rating: 4.5, price: '$10/hr', distance: '0.5 miles' },
  { name: 'Central Plaza', rating: 4.2, price: '$8/hr', distance: '0.8 miles' },
  { name: 'Riverside Lot', rating: 4.7, price: '$12/hr', distance: '1.2 miles' },
  { name: 'Market Street Garage', rating: 4.0, price: '$9/hr', distance: '1.5 miles' },
];

export function RecommendationSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-2xl font-bold text-center">Popular Parking Spots</h2>
      <div className="w-full h-[160px] overflow-x-auto rounded-md border">
        <div className="flex w-[1000px] h-auto space-x-6 p-4">
          {recommendations.map((spot) => (
            <div
              key={spot.name}
              className="bg-white border px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-2">
                <h1 className="text-lg font-semibold text-gray-800">{spot.name}</h1>
              </div>
              <div className="text-sm text-gray-600 h-full">
                <p>
                  <strong className="font-medium">Rating:</strong> {spot.rating}
                </p>
                <p>
                  <strong className="font-medium">Price:</strong> {spot.price}
                </p>
                <p>
                  <strong className="font-medium">Distance:</strong> {spot.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
