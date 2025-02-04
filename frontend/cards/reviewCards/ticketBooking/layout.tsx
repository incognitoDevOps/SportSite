import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you're using React Router

interface TicketBookingProps {
	item: {
	  id: number;
	  title: string;
	  description: string;
	  date: string;
	  location: string;
	  ticketPrice: string;
	  latitude: string;
	  longitude: string;
	  image: string;
	};
	children: React.ReactNode;
	href: string;
  }
const CustomLink: React.FC<TicketBookingProps> = ({children , item, href}) => {
  // You can use 'item' prop here as needed, for example:
  const customOnClick = () => {
    // Handle click with 'item'
    console.log(item);
  };

  return (
    <RouterLink to={href} onClick={customOnClick}>
      {children}
    </RouterLink>
  );
};

export default CustomLink;
