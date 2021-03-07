import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Styled Component式
const CustomButton = styled(Button)({
  backgroundColor: 'red'
});

const MaterialUIStyled = () => {
    return (
        <CustomButton>Styled Component式</CustomButton>
    )
};

export default MaterialUIStyled;