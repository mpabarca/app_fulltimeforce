// import React from 'react';
// import { render, screen } from '@testing-library/react';
import { getDifferenceBetweenDates } from '../util';

test('get time difference between a provide date to actual date', () => {
  expect(getDifferenceBetweenDates("2021-06-02T00:47:37Z")).toStrictEqual({quantity: 0, unit: "", date: "2 Jun", more30days: true});
});
