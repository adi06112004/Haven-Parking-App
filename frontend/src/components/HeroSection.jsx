import { useState, useEffect } from "react";
import { Navigation, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [searchCity, setSearchCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchCity.toLowerCase())
  );

  const navigate=useNavigate();

  const nav=()=>{
    navigate('/findresult');
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for ${searchQuery} in ${selectedCity}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 text-center text-black">
      <h1 className="mb-6 text-3xl font-bold md:text-5xl lg:text-6xl">
        Find Your Safe Haven for Parking
      </h1>

      {/* Input + Dropdown + Search Button in Single Row */}
      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 md:gap-4"
        >
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter place near which parking is wanted"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border p-3 rounded bg-white border-black text-black 
                       hover:border-double hover:shadow-xl hover:shadow-current w-full md:w-auto"
          />

          {/* City Selector with Dropdown */}
          <div className="relative dropdown">
            <button
              type="button"
              className="w-32 border px-3 py-3 rounded-md bg-black text-white flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedCity}
              <Search className="ml-2 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-700 
                              shadow-lg text-black rounded-md max-h-48 overflow-y-auto z-50">
                <input
                  type="text"
                  className="w-full p-2 border-b border-gray-700"
                  placeholder="Search city..."
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
                <div className="py-2">
                  {filteredCities.map((city) => (
                    <div
                      key={city}
                      className="p-2 cursor-pointer hover:bg-gray-700"
                      onClick={() => {
                        setSelectedCity(city);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button
            onClick={nav}
            type="submit"
            className="bg-black text-white px-3 py-3 rounded-md w-auto md:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default HeroSection;
