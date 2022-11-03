import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Pagination = ({ pageCount }) => {
  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        breakClassName="break"
        nextLabel=">"
        pageRangeDisplayed={3}
        pageCount={10}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 0.1rem;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    padding: 0.3rem;
    color: black;
    font-family: var(--Branding-sf-bold);
    font-size: 14px;
    border-radius: 0.3rem;
  }
  .break {
    background-color: #0000008d;
  }
`;
