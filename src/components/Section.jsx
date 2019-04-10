import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const H2 = styled.h2`
  margin: 0;
  font-weight: 300;
  color: #6e7790;
  font-size: 22px;
  position: relative;
  margin-bottom: 20px;
`;

const Section = ({ title, children }) => (
  <div>
    <H2>{title}</H2>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
