import { useHistory } from 'react-router-dom';
import { FormEvent } from 'react';

import notFoundImg from '../assets/images/404.png';
import { Button } from './Button';

import '../styles/notFound.scss';

export function NotFound(): JSX.Element {
  const history = useHistory();

  function handleBack(event: FormEvent) {
    event.preventDefault();

    history.push('/');
  }

  return (
    <div id="not-found">

      <img className="notFoundImg" src={notFoundImg} alt="Not found" />

      <Button onClick={handleBack}>Voltar</Button>
    </div>
  );
}
