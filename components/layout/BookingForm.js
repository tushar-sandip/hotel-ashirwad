import React, { useState } from 'react';

const BookingForm = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const handleWhatsApp = () => {
        const message = `Hello, I would like to make a reservation. Check-in: ${checkIn}, Check-out: ${checkOut}, Rooms: ${rooms}, Adults: ${adults}, Children: ${children}.`;
        const phoneNumber = '9130375375'; // Replace with your WhatsApp number
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank'); // Open WhatsApp in a new tab
    };

    return (
        <div className="hotel-booking-form-1 alt2 p-0 theme-bg">
            <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: 'url(assets/images/shape/pattern-4.png) no-repeat center bottom' }}></div>
            <div className="auto-container">
                <div className="hotel-booking-form-1-wrap">
                    <h2 className="color_light mb_40">Make Reservation</h2>
                    <form className="hotel-booking-form-1-form d-flex flex-wrap" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group col-md-6">
                            <label className="hotel-booking-form-1-label">Check-in:</label>
                            <input 
                                type="date" 
                                name="check-in" 
                                id="check-in" 
                                value={checkIn} 
                                onChange={(e) => setCheckIn(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="hotel-booking-form-1-label">Check-out:</label>
                            <input 
                                type="date" 
                                name="check-out" 
                                id="check-out" 
                                value={checkOut} 
                                onChange={(e) => setCheckOut(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="hotel-booking-form-1-label">Rooms:</label>
                            <select 
                                name="rooms" 
                                value={rooms} 
                                onChange={(e) => setRooms(e.target.value)} 
                                required
                            >
                                <option value={1}>1 Room</option>
                                <option value={2}>2 Rooms</option>
                                <option value={3}>3 Rooms</option>
                                <option value={4}>4 Rooms</option>
                                <option value={5}>5 Rooms</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="hotel-booking-form-1-label">Adults:</label>
                            <select 
                                name="adults" 
                                value={adults} 
                                onChange={(e) => setAdults(e.target.value)} 
                                required
                            >
                                <option value={1}>1 Adult</option>
                                <option value={2}>2 Adults</option>
                                <option value={3}>3 Adults</option>
                                <option value={4}>4 Adults</option>
                                <option value={5}>5 Adults</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="hotel-booking-form-1-label">Children:</label>
                            <select 
                                name="children" 
                                value={children} 
                                onChange={(e) => setChildren(e.target.value)} 
                                required
                            >
                                <option value={0}>0 Children</option>
                                <option value={1}>1 Child</option>
                                <option value={2}>2 Children</option>
                                <option value={3}>3 Children</option>
                                <option value={4}>4 Children</option>
                                <option value={5}>5 Children</option>
                            </select>
                        </div>
                        <div className="form-group col-md-12 text-lg-end">
                            <button 
                                type="button" 
                                className="btn-1 btn-large btn-light" 
                                onClick={handleWhatsApp}
                            >
                                Book Now <span></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm; 