import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const HomePage = () => {

  const user = JSON.parse(localStorage.getItem('user'));


  if (!user) {
    return <p className="text-red-500 text-center mt-4">Пользователь не авторизован</p>;
  }

  const registrationDate = new Date(user.registrationDate).toLocaleDateString();

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Добро пожаловать, {user.name}!</h1>

      <p className="text-gray-600 mb-2">Дата регистрации: {registrationDate}</p>
      
      {user.nickname && <p className="text-gray-600 mb-2">Никнейм: {user.nickname}</p>}
      {user.age && <p className="text-gray-600 mb-2">Возраст: {user.age}</p>}
      {user.gender && <p className="text-gray-600 mb-2">Пол: {user.gender}</p>}
      {user.avatar && <p className="mb-4"><img src={user.avatar} alt="Avatar" className="rounded-full" width="100" /></p>}

      <div className="flex justify-center">
        <Link to="/notes">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Перейти к заметкам
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
