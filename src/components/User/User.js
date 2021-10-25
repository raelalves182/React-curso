import React from 'react'
import { Route, Routes } from 'react-router'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserHeader from './UserHeader'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'

const User = () => {
  const {data} = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
