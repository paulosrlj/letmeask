/* eslint-disable react/destructuring-assignment */
import { ToastContainer, toast } from 'react-toastify';

import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps): JSX.Element {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.info('Copiado!');
  }

  return (
    <>
      <ToastContainer position="top-center" closeOnClick autoClose={1500} closeButton={false} hideProgressBar />

      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>
          Sala #
          {props.code}
        </span>
      </button>
    </>
  );
}
