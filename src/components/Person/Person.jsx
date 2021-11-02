/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">My name is {name}</h2>
        {sex === 'f' ? ('') : (
          <p className="Person__age">I am {age}</p>
        )}
        {!isMarried ? (
          <p className="Person__partner">I am not married</p>
        ) : (sex === 'm' && isMarried
          ? (<p className="Person__partner">My wife&apos;s name is {partnerName}</p>)
          : (<p className="Person__partner">My husband&apos;s name is {partnerName}</p>)
        )}
      </section>
    </>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isMarried: PropTypes.bool.isRequired,
    sex: PropTypes.string.isRequired,
    partnerName: PropTypes.string.isRequired,
  }).isRequired,
};
