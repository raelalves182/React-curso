import React from 'react'
import { Route, Routes } from 'react-router'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserHeader from './UserHeader'
import UserStats from './UserStats'

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default User
