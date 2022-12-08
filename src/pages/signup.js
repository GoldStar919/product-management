import React from 'react';
import { Header, Footer, TextInput, Button } from '../components';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import apiRequest from '../Utilities';
import { AuthActions } from '../reducers/AuthReducer';
import { useForm, Controller } from 'react-hook-form';
import Router from 'next/router';
// import { Button } from '@material-ui/core';

const Signup = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({ mode: 'onChange' });

  const dispatch = useDispatch();

  const signup = async (payload) => {
    try {
      const response = await apiRequest.post(`auth/signup`, payload);
      dispatch(AuthActions.setAuth(response.data.data));
      Router.push('/');
    } catch (error) {
      console.log('signup', error);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mainbody">
          <Header />
          <h1 className="text-center text-4xl font-normal p-8">Sign Up</h1>
          <div className="block flex gap-4 align-center">
            <form className="sm:w-3/4 md:w-1/2 xl:w-1/3 mx-auto" onSubmit={handleSubmit((values) => signup(values))}>
              <div className="justify-item-center">
                <div className="">
                  <Controller
                    name="name"
                    control={control}
                    render={(field) => (
                      <TextInput
                        {...field}
                        type="text"
                        placeholder="Enter Your Name"
                        errors={errors}
                      />
                    )}
                    rules={{
                      required: 'Name is required.',
                      maxLength: {
                        value: 20,
                        message: 'This input exceed maxLength.',
                      },
                    }}
                  />
                </div>
                <div className="">
                  <Controller
                    name="email"
                    control={control}
                    render={(field) => (
                      <TextInput
                        {...field}
                        type="text"
                        placeholder="Enter Your Email"
                        errors={errors}
                      />
                    )}
                    rules={{ required: 'Email is required.' }}
                  />
                </div>
                <div className="">
                  <Controller
                    name="password"
                    control={control}
                    render={(field) => (
                      <TextInput
                        {...field}
                        type="password"
                        placeholder="Enter Your Password"
                        errors={errors}
                      />
                    )}
                    rules={{ required: 'Password is required.' }}
                  />
                </div>
                <div className="">
                  <Controller
                    name="confirm_password"
                    control={control}
                    render={(field) => (
                      <TextInput
                        {...field}
                        type="password"
                        placeholder="Enter Your Confirm Password"
                        errors={errors}
                      />
                    )}
                    rules={{ required: 'Comfirm Password is required.' }}
                  />
                </div>
                <div className="w-full text-center">
                <Button
                  className="btn btn-secondary w-1/2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Sign Up'}
                </Button>
                </div>
                <div className="text-center">
                  Don&apos;t have an account? <Link href="/login">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
