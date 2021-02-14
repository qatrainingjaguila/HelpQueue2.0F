import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Link} from 'react-router-dom';

const SelectOptions = () => {

    return( 
        <section id="features" class="white-section">
        <div class="row">
          <div class="col-lg-4">
          <Link to="/createTicket">
          <FontAwesomeIcon icon="file-alt" size="6x" color="#004050"/>
            <h3 class="buttontag">Create a Ticket</h3>
            </Link>
          </div>
          <div class="col-lg-4">
          <Link to="/viewTickets">
          <FontAwesomeIcon icon="folder-open" size="6x" color="#004050"/>
            <h3 class="buttontag">View All Tickets</h3>
            </Link>
          </div>
          <div class="col-lg-4">
          <Link to="/contactUs">
          <FontAwesomeIcon icon="address-book" size="6x" color="#004050"/>
            <h3 class="buttontag">Contact Us</h3>
            </Link>
          </div>
        </div>
      </section>
 );
}
export default SelectOptions;