import { Fragment, useState } from 'react';
import styles from '../styles/pages/auth_styles/signup.module.scss';
import Link from 'next/link';

import Dove from '../components/svgs/items/Dove';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');

  const onChange = (event) => {
    if (/\s/.test(event.target.value)) {
      // It has any kind of whitespace
      // göra error
      return;
    }
    const pattern = /[^A-Za-z0-9]/;
    if (pattern.test(event.target.value)) {
      return;
    }

    /*         this.checkIfPartOfOrg(event.target.value); */

    // ({ [event.target.name]: event.target.value });
    // checkUsernameTaken(event.target.value);
  };

  const onChangeEmail = (event) => {
    // console.log(event.target.value)
    setEmail(event.target.value);
  };
  return (
    <Fragment>
      <main className={styles.signup_wrapper}>
        <div className={styles.logo_container}>
          <Dove />
          <h1>SUNDELOF</h1>
        </div>
        <form /* onSubmit={onSubmit} */>
          <h3>Sign In</h3>
          <label>
            E-mail
            <input
              name='email'
              value={email}
              onChange={onChangeEmail}
              type='email'
              placeholder='E-mail address'
            />
          </label>
          <label>
            Password
            <input
              name='passwordOne'
              value={passwordOne}
              onChange={onChange}
              type='password'
              placeholder='Password'
            />
          </label>
          <button /* disabled={isInvalid} */ type='submit'>Sign In</button>
          <span>
            Don't have an account? <Link href='/signup'>Sign up</Link>
          </span>
        </form>
      </main>
    </Fragment>
  );
};

export default Signin;
