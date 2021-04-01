import React, { createContext, useReducer, useMemo } from 'react';
import * as SecureStore from 'expo-secure-store';
import PropTypes from 'prop-types';
// import { me } from '../lib/api';

const initialData = {
  token: null,
  user: {},
};
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin': {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case 'signout': {
      return {
        ...initialData,
      };
    }
    case 'updateUser': {
      return {
        ...state,
        user: action.payload,
      };
    }
    case 'updateToken': {
      return {
        ...state,
        token: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialData);
  const value = useMemo(() => ({
    state,
    dispatch,
    logout: async () => {
      await SecureStore.deleteItemAsync('token');
      dispatch({
        type: 'signout',
      });
    },
  }));

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.defaultProps = {
  children: null,
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContext.Provider');
  }
  return context;
};
