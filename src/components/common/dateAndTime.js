import React from "react";

export const formatDate = (dateString) => {
  // Parse the input date string
  const date = new Date(dateString);

  // Extract components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const year = date.getFullYear();

  // Get the month in short form
  const monthShort = date.toLocaleString("default", { month: "short" });

  // Determine AM/PM
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert 24-hour time to 12-hour time
  const hours12 = hours % 12 || 12;

  // Format minutes with leading zero if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Construct the formatted date and time string
  const formattedDate = `${hours12}:${formattedMinutes}${ampm} ${day}${monthShort},${year}`;

  return formattedDate;
};
