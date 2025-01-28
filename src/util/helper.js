export const createGoogleCalendarLink = (event) => {
    const { title, date, time, location, description } = event;
  
    // Combine date and time into ISO format
    const startDateTime = new Date(`${date}T${time}:00`);
    
    if (isNaN(startDateTime)) {
      throw new Error(`Invalid date or time: ${date} ${time}`);
    }
  
    // Start and end times in Google Calendar format (UTC)
    const startDate = startDateTime.toISOString().replace(/-|:|\.\d+/g, '');

    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000); // Add 1 hour
    const endDate = endDateTime.toISOString().replace(/-|:|\.\d+/g, '');
  
    // Create Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(location)}`;
  
    return googleCalendarUrl;
  };
  

  export const convertTo12HourFormat = (time24) => {
    
    const [hour, minute] = time24.split(':');
    const hour12 = (parseInt(hour, 10) % 12) || 12; 
    const period = parseInt(hour, 10) >= 12 ? 'PM' : 'AM';

    return `${hour12}:${minute} ${period}`; 
  };
  
