/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { pizzas, dominosCities } from '../../../configs/widgetConfig';
import Select from '../../UI/Select';

const PizzaConfigForm = ({ defaultParams, setWidgetParams }) => {
  const [name, setName] = useState(defaultParams?.name || pizzas[0]);
  const [city, setCity] = useState(defaultParams?.city || dominosCities[0]);
  const [street, setStreet] = useState(defaultParams?.street || '');
  const [house, setHouse] = useState(defaultParams?.house || '');
  const [apartment, setApartment] = useState(defaultParams?.apartment || '');
  const [phone, setPhone] = useState(defaultParams?.phone || '');
  const [email, setEmail] = useState(defaultParams?.email || '');

  useEffect(() => {
    setWidgetParams({
      name,
      city,
      street,
      house,
      apartment,
      phone,
      email
    });
  }, [name, city, street, house, apartment, phone, email]);

  return (
    <div>
      <div>
        <div className="mb-2">Pizza:</div>
        <Select options={pizzas} selected={defaultParams?.name || pizzas[0]} onChange={setName} />
        <div className="my-2">City:</div>
        <Select
          options={dominosCities}
          selected={defaultParams?.city || pizzas[0]}
          onChange={setCity}
        />
        <div className="my-2">Street:</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="street"
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <div className="my-2">House:</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="house"
          type="text"
          placeholder="House"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />
        <div className="my-2">Apartment:</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="apartment"
          type="text"
          placeholder="Apartment"
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
        <div className="my-2">Phone:</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phone"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="my-2">Email:</div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PizzaConfigForm;
