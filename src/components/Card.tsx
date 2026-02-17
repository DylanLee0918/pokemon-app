import styled from "styled-components";
import { Card as MuiCard } from "@mui/material";

export const StyledCard = styled(MuiCard)`
  &.MuiCard-root {
    height: 90vh;
    width: 85vw;
    background: #27374d;
    padding: 12px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      &.MuiCard-root {
        height: 90vh;
        width: 90vw;
        background: #27374d;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
