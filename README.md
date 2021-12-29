# Where2Next
A multi-booking trip organizer &nbsp; 🌴

### Built with &nbsp; ⚙️
- React
- React Router
- Node/Express
- MongoDB

### API 🔌
GET /nearbyEvents/:city/:state/:startDate/:endDate
city: string
state: string
startDate: string (YYYY-MM-DD)
endDate: string (YYYY-MM-DD)

GET /flights/:arrivalCode
arrivalCode: string (3-letter airport abbreviation code)

GET /hotels/:city/:destinationId
city: string (case-sensitive)
destinationId: number -> retrieved and queried on protocol for https://hotels4.p.rapidapi.com/properties/list


### Landing page and header &nbsp; 🏠
- Enter the location and time frame you're looking to book through
- Fuzzy searching via <a href="https://github.com/reactjs/react-autocomplete">React Autocomplete</a>
- Login - optional until checkout
- The URL updates based to reflect search parameters - share it via the header's social media buttons at any time while browsing.

### Selecting and navigating 🔀

#### Events:
- Lists upcoming events in the selected timeframe and destination
- Users may add events to their trip, see more info, and sort by date, price, or distance

#### Flights:
- Lists flights to destination in selected timeframe
- Adjust origin for departure

#### Hotels:
- Opens to a neighborhood list based on destination
- Lists hotel options in selected neighborhood and timeframe

### Your trips 👤

#### Itinerary:
- View the events, flights and hotels added to your trip so far
- Selections are hosted in local storage regardless of login status. Once you check out, an itinerary will be available on your account page.

#### Account page:
- View your personal information
- Rundown of your purchased trips, listed by destination
