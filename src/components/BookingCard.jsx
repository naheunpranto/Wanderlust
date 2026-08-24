'use client'

import { Button, Card, DateField, Label } from "@heroui/react";
import React from "react";

const BookingCard = ({ destination }) => {
  const { price } = destination;

  return (
    <Card className="border rounded-none mt-5 mb-5">
      <p className="text-muted">Starting from</p>
      <h2>${price}</h2>
      <p>per person</p>

      <DateField className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button>Book Now</Button>
    </Card>
  );
};

export default BookingCard;
