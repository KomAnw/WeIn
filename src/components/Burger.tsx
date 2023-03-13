import { ForwardedRef, forwardRef } from 'react';
import type { InputRef } from 'src/sections/Header';
import styled from 'styled-components';

type BurgerProps = {
  setIsOpen: () => void;
};

export const Burger = forwardRef(({ setIsOpen }: BurgerProps, ref: ForwardedRef<InputRef>) => {
  return (
    <Container role="navigation">
      <div id="menuToggle" onClick={setIsOpen}>
        <input type="checkbox" ref={ref} />

        <span />
        <span />
        <span style={{ margin: 0 }} />

        <ul id="menu" />
      </div>
    </Container>
  );
});

const Container = styled.nav`
  width: 25px;
  #menuToggle {
    display: block;
    position: relative;
    z-index: 15;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: tomato;
  }

  #menuToggle input {
    display: none;
    width: 35px;
    height: 25px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 25px;
    height: 3.5px;
    margin-bottom: 3px;
    position: relative;

    background: rgba(194, 207, 185);
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: rgba(194, 207, 185);
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(1px, -1px);
  }
`;
