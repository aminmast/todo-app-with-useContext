import styled from "styled-components";

export const TodoRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* for elements child */
  ${(props) =>
    props.type === "flexStart"
      ? `
    justify-content: left;
  `
      : `
      justify-content: space-between;
      margin: 2rem 0; 
      `}
  /* if todo is complete */
${(props) =>
    props.complete
      ? `
    background-color: #333;
    `
      : null}
    align-items: center;
`;

export const TextTodo = styled.p`
  cursor: pointer;
  color: #fff;
  margin: 0 1rem;
  font-size: 1.5rem;
  text-decoration: ${(props) => (props.complete ? "line-through" : "none")};
  font-weight: ${(props) => (props.complete ? "200" : "500")};
`;
