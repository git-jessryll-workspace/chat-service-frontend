
import {post} from 'axios';
import LoginForm from './components/auth/LoginForm';
import { server } from '../config/index';
export default function login() {
  
  const handleLogin = (form) => {
      post(`${server}/api/login`, form)
      .then(res => {
        
      })
      .catch(err => {
        
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <LoginForm 
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
}
