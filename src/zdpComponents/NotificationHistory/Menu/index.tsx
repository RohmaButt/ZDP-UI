import React, { ReactNode } from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import BoxComponent from '../Box';

type IProps = {
  toolTipTitle?: string;
  [key: string]: any;
  children: ReactNode;
  anchorEl?: null | HTMLElement;
  handleClose: () => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  borderRadius?: string;
  icon?: string;
  mainBoxStyle?: object;
  iconSize?: string;
};

export default function MenuComponent({
  toolTipTitle,
  children,
  anchorEl,
  handleClose,
  handleClick,
  borderRadius,
  mainBoxStyle,
  icon,
  iconSize,
  ...otherProps
}: IProps) {
  const open = Boolean(anchorEl);
  return (
    <React.Fragment>
      <BoxComponent
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          ...mainBoxStyle,
        }}
      >
        <Tooltip title={toolTipTitle}>
          <BoxComponent
            sx={{
              height: iconSize ? iconSize : '44px',
              width: iconSize ? iconSize : '44px',
              borderRadius: borderRadius ? borderRadius : '30px',
              background: '#FFFFFF',
              border: '1px solid #E2E5E9',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={handleClick}
          >
            <IconButton
              size="small"
              sx={{ p: '0px', position: 'absolute' }}
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              {icon ? <img src={icon} alt={'iconAlt'} /> : <MoreVertIcon />}
            </IconButton>
          </BoxComponent>
        </Tooltip>
      </BoxComponent>
      <Menu
        anchorEl={anchorEl}
        id="menus"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            boxShadow: '0px 8px 20px -3px #13264029',
            mt: 1.5,
            borderRadius: '16px',
            p: '8px',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          boxShadow: '0px 8px 20px -3px #13264029',
        }}
        {...otherProps}
      >
        {children}
      </Menu>
    </React.Fragment>
  );
}

MenuComponent.defaultProps = {
  children: <></>,
  Tooltip: '',
};