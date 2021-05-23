//STYLES
import styles from '../styles/pages/auth_styles/signup.module.scss';

// Dependencies
import { Fragment, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

//Components
import Alert from '../components/shared/alert/Alert';
import Dove from '../components/svgs/items/Dove';

//REDUX IMPORTS
import { connect, useSelector } from 'react-redux';
import { setAlert } from '../actions/alert';

const Signup = ({ setAlert }) => {
  const alert = useSelector((state) => state.alert);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
  });

  const { username, email, passwordOne, passwordTwo } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (passwordOne !== passwordTwo) {
      console.log("Password doesn't match!");

      const alertDoubble = alert.findIndex((x) => x.alertType === 'danger');
      if (alertDoubble !== -1) return;
      setAlert("Password doesn't match", 'danger');
    } else {
      console.log('Good Work!');
    }
  };
  const onChange = (e) => {
    // Excludes whitespaces
    if (/\s/.test(e.target.value)) {
      // It has any kind of whitespace
      return;
    }
    // Excludes everything but letters
    const pattern = /[^A-Za-z0-9]/;
    if (pattern.test(e.target.value)) {
      return;
    }

    // Sets formdata to to what user is typing
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log(e.target.name);
    // ({ [event.target.name]: event.target.value });
    // checkUsernameTaken(event.target.value);
  };

  const onChangeEmail = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <main className={styles.signup_wrapper}>
        <div className={styles.logo_container}>
          <Dove />
          <h1>SUNDELOF</h1>
        </div>

        <form onSubmit={(e) => onSubmit(e)}>
          <h3>Create your account</h3>
          <Alert />
          <label>
            Username
            <input
              name='username'
              value={username}
              onChange={(e) => onChange(e)}
              type='text'
              placeholder='Username'
              // required
            />
          </label>
          <label>
            E-mail
            <input
              name='email'
              value={email}
              onChange={(e) => onChangeEmail(e)}
              type='email'
              placeholder='E-mail address'
              // required
            />
          </label>
          <label>
            Password
            <input
              name='passwordOne'
              value={passwordOne}
              onChange={(e) => onChange(e)}
              type='password'
              placeholder='Password'
              // required
            />
          </label>
          <label>
            Confirm password
            <input
              name='passwordTwo'
              value={passwordTwo}
              onChange={(e) => onChange(e)}
              type='password'
              placeholder='Confirm password'
              // required
            />
          </label>
          <button /* disabled={isInvalid} */ type='submit'>Sign Up</button>

          <span>
            Already have an account? <Link href='/signin'>Sign in</Link>
          </span>
        </form>
      </main>
    </Fragment>
  );
};

Signup.PropTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Signup);
