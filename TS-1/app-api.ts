'use strict';
import axios from 'axios';


// Определение enum для пола пользователя
enum Gender {
  Male = 'male',
  Female = 'female',
}

// Определение enum для статуса электронной почты
enum EmailStatus {
  Verified = 'verified',
  Unverified = 'unverified',
}

// Типизация пользователя
interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: Gender;
  email: string;
  emailStatus: EmailStatus;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
      color: string;
      type: string;
  };
  domain: string;
  ip: string;
  address: {
      address: string;
      city: string;
      coordinates: {
          lat: number;
          lng: number;
      };
      postalCode: string;
      state: string;
  };
  macAddress: string;
  university: string;
  bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
  };
  company: {
      address: {
          address: string;
          city: string;
          coordinates: {
              lat: number;
              lng: number;
          };
          postalCode: string;
          state: string;
      };
      department: string;
      name: string;
      title: string;
  };
  ein: string;
  ssn: string;
  userAgent: string;
}

// Типизация ответа API
interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

const url = 'https://dummyjson.com/users';

// Функция для выполнения запроса
async function fetchUsers(url: string): Promise<UsersResponse> {
  try {
      const response = await axios.get(url);
      const data: UsersResponse = response.data;
      return data;
  } catch (error) {
    
    if(error instanceof Error){
      console.log(error.message);
    }
      throw new Error('Error fetching users');
  }
}
