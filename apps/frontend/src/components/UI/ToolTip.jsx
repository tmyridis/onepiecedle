import { Tooltip } from 'react-tooltip';

function ToolTip({ id, place = 'top' }) {
  return (
    <Tooltip
      place={place}
      id={id}
      opacity={1}
      border="3px solid #534e41"
      style={{
        backgroundColor: '#faf9f3',
        color: '#534e41',
        width: '150px',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        zIndex: '50',
      }}
    ></Tooltip>
  );
}

export default ToolTip;
