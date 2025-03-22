<div className="hotel-booking-form-1 alt2 p-0 theme-bg">
    <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: 'url(assets/images/shape/pattern-4.png) no-repeat center bottom' }}></div>
    <div className="auto-container">
        <div className="hotel-booking-form-1-wrap">
            <h2 className="color_light mb_40">Make Reservation</h2>
            <form className="hotel-booking-form-1-form d-flex flex-wrap">
                <div className="form-group col-md-6">
                    <label className="hotel-booking-form-1-label">Check-in:</label>
                    <input placeholder="17 Sep, 2022" type="text" name="check-in" id="check-in" />
                </div>
                <div className="form-group col-md-6">
                    <label className="hotel-booking-form-1-label">Check-out:</label>
                    <input placeholder="21 Sep, 2022" type="text" name="check-out" id="check-out" />
                </div>
                <div className="form-group col-md-6">
                    <label className="hotel-booking-form-1-label">Rooms:</label>
                    <select name="rooms">
                        <option data-display="1 Room">1 Room</option>
                        <option value={2}>2 Rooms</option>
                        <option value={3}>3 Rooms</option>
                        <option value={4}>4 Rooms</option>
                        <option value={5}>5 Rooms</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="hotel-booking-form-1-label">Adults:</label>
                    <select name="adults">
                        <option data-display="2 Adults">2 Adults</option>
                        <option value={1}>1 Adult</option>
                        <option value={3}>3 Adults</option>
                        <option value={4}>4 Adults</option>
                        <option value={5}>5 Adults</option>
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label className="hotel-booking-form-1-label">Children:</label>
                    <select name="children">
                        <option data-display="1 Child">1 Child</option>
                        <option value={0}>0 Children</option>
                        <option value={2}>2 Children</option>
                        <option value={3}>3 Children</option>
                        <option value={4}>4 Children</option>
                        <option value={5}>5 Children</option>
                    </select>
                </div>
                <div className="form-group col-md-12 text-lg-end">
                    <button type="submit" className="btn-1 btn-large btn-light">Check Availability<span></span></button>
                </div>
            </form>
        </div>
    </div>
</div> 