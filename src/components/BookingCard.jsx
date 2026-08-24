"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);
  console.log(departureDate);

  const { _id, price, destinationName, country, imageUrl } = destination;

  const handleBooking = async () => {
    const bookingData = {
        userId: user.id,
        userImage: user.image,
        userName: user.name,
        destinationId: _id,
        destinationName,
        price,
        country,
        imageUrl,
        departureDate: new Date(departureDate)
    }
    
    const res = await fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    const data = await res.json();

    console.log(data);
  }


  return (
    <Card className="border rounded-none mt-5 mb-5">
      <p className="text-muted">Starting from</p>
      <h2>${price}</h2>
      <p>per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={handleBooking}>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
