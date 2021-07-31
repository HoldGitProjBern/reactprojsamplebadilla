import "./App.css";
import CustomerMenu from "./components/CustomerMenu";
import FrontDeskMenu from "./components/FrontDeskMenu";
import { Route, Link, BrowserRouter } from "react-router-dom";
import { RoomProvider } from "./contexts/RoomContext";
import { ReservationProvider } from "./contexts/ReservationContext";
import { PaidReservationsProvider } from "./contexts/PaidReservationsContext";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReservationProvider>
          <PaidReservationsProvider>
            <BrowserRouter>
              <div className="linksContainer">
                <Link className="App-link" to="/customermenu">
                  Customer Menu
                </Link>
                <Link className="App-link" to="/adminmenu">
                  Admin Menu
                </Link>
              </div>
              <div className="bogus-container">
                <Route path="/customermenu">
                  <RoomProvider>
                    <CustomerMenu />
                  </RoomProvider>
                </Route>
                <Route path="/adminmenu">
                  <FrontDeskMenu />
                </Route>
              </div>
            </BrowserRouter>
          </PaidReservationsProvider>
        </ReservationProvider>
      </header>

      <footer>
        Created by Bernard Badilla (note : no error handling, NAME must be
        unique to work properly)
      </footer>
    </div>
  );
}

export default App;
